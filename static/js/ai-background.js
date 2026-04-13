import * as THREE from "/vendor/three.module.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  initBackground();
}

function initBackground() {
  const mount = document.createElement("div");
  mount.id = "ai-background";
  mount.setAttribute("aria-hidden", "true");
  document.body.prepend(mount);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 15);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: "low-power"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  renderer.setSize(window.innerWidth, window.innerHeight);
  mount.appendChild(renderer.domElement);

  const root = document.documentElement;

  const getThemeColor = (name, fallback) => {
    const value = getComputedStyle(root).getPropertyValue(name).trim();
    return new THREE.Color(value ? `hsl(${value})` : fallback);
  };

  const particleMaterial = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColor: { value: getThemeColor("--primary", "#2563eb") }
    },
    vertexShader: `
      attribute float aScale;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aScale * 2.8 * (140.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5));
        float alpha = smoothstep(0.5, 0.0, dist);
        gl_FragColor = vec4(uColor, alpha * 0.55);
      }
    `
  });

  const lineMaterial = new THREE.LineBasicMaterial({
    color: getThemeColor("--foreground", "#0f172a").lerp(getThemeColor("--primary", "#2563eb"), 0.35),
    transparent: true,
    opacity: 0.07
  });

  const group = new THREE.Group();
  group.rotation.x = 0.18;
  group.rotation.y = -0.2;
  scene.add(group);

  let particles;
  let lines;

  function buildMesh() {
    if (particles) {
      group.remove(particles);
      particles.geometry.dispose();
    }
    if (lines) {
      group.remove(lines);
      lines.geometry.dispose();
    }

    const count = window.innerWidth < 768 ? 85 : 145;
    const spreadX = window.innerWidth < 768 ? 6.5 : 9;
    const spreadY = window.innerWidth < 768 ? 4.2 : 5.4;
    const spreadZ = 2.4;

    const points = [];
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * spreadZ;
      const point = new THREE.Vector3(x, y, z);
      points.push(point);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      scales[i] = 0.6 + Math.random() * 1.05;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const pairs = [];
    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        if (points[i].distanceTo(points[j]) < 1.25) {
          pairs.push(points[i], points[j]);
        }
      }
    }

    const linePositions = new Float32Array(pairs.length * 3);
    for (let i = 0; i < pairs.length; i += 1) {
      const point = pairs[i];
      linePositions[i * 3] = point.x;
      linePositions[i * 3 + 1] = point.y;
      linePositions[i * 3 + 2] = point.z;
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);
  }

  function render() {
    renderer.render(scene, camera);
  }

  function applyTheme() {
    const primary = getThemeColor("--primary", "#2563eb");
    const foreground = getThemeColor("--foreground", "#0f172a");
    particleMaterial.uniforms.uColor.value.copy(primary);
    lineMaterial.color.copy(foreground).lerp(primary, 0.35);
    render();
  }

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    buildMesh();
    render();
  }

  const observer = new MutationObserver(applyTheme);
  observer.observe(root, { attributes: true, attributeFilter: ["class"] });

  window.addEventListener("resize", resize, { passive: true });

  buildMesh();
  applyTheme();
}

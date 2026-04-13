/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./themes/hugo-profile/layouts/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)"
      },
      borderRadius: {
        xl: "calc(var(--radius) + 0.125rem)",
        "2xl": "calc(var(--radius) + 0.5rem)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "sans-serif"],
        display: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--border) / 0.45), 0 24px 80px hsl(221 39% 11% / 0.18)",
        panel: "0 12px 48px hsl(221 39% 11% / 0.16)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, hsl(var(--border) / 0.25) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.25) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

---
title: "Renderizar Matemáticas con Mathjax"
date: 2022-12-09T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Sintaxis de Markdown
  - Mathjax
  - ejemplo
image: /images/mathjax.png
description: ""
toc: true
---

## Ejemplos Matemáticos

Esta versión compatible con modo offline mantiene las fórmulas como texto legible y bloques de código en lugar de cargar MathJax desde una CDN.

Expresión de ejemplo:

> | Pr(x <- P1) [A(x) = 1] - Pr(x <- P2) [A(x) = 1] | < negligible

Luego, usa `$$ ... $$` en una línea por sí sola para renderizar una ecuación de bloque:

```text
| Pr_{x <- P1} [A(x) = 1] - Pr_{x <- P2} [A(x) = 1] | < negligible
```

La versión sin procesar es:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```


Ejemplo en línea:

`x^n / y`

```
Escribe matemáticas en línea como texto plano, por ejemplo x^n / y, cuando trabajes completamente offline.
```

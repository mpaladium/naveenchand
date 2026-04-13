---
title: "Render Math With Mathjax"
date: 2022-12-09T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Markdown syntax
  - Mathjax
  - example
image: /images/mathjax.png
description: ""
toc: true
---

## Math Examples

This offline-safe version keeps formulas as readable text and code samples instead of loading MathJax from a CDN.

Example expression:

> | Pr(x <- P1) [A(x) = 1] - Pr(x <- P2) [A(x) = 1] | < negligible

Then, use `$$ ... $$` on a line by itself to render a block equation:

```text
| Pr_{x <- P1} [A(x) = 1] - Pr_{x <- P2} [A(x) = 1] | < negligible
```

The raw version is:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```


Inline example:

`x^n / y`

```
Write inline math as plain text like x^n / y when running fully offline.
```

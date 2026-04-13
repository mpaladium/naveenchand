---
title: "Rendre les Mathématiques avec Mathjax"
date: 2022-12-09T19:53:33+05:30
draft: false
author: "Gurusabarish"
tags:
  - Syntaxe Markdown
  - Mathjax
  - exemple
image: /images/mathjax.png
description: ""
toc: true
---

## Exemples Mathématiques

Cette version compatible hors ligne conserve les formules sous forme de texte lisible et de blocs de code au lieu de charger MathJax depuis un CDN.

Expression d'exemple :

> | Pr(x <- P1) [A(x) = 1] - Pr(x <- P2) [A(x) = 1] | < negligible

Ensuite, utilisez `$$ ... $$` sur une ligne par elle-même pour rendre une équation de bloc:

```text
| Pr_{x <- P1} [A(x) = 1] - Pr_{x <- P2} [A(x) = 1] | < negligible
```

La version brute est:

```
$$ | Pr_{x \leftarrow P_{1}} [A(x) = 1] - Pr_{x \leftarrow P_{2}} [A(x) = 1] | < \text{negligible} $$
```


Exemple en ligne :

`x^n / y`

```
Écrivez les mathématiques en ligne comme texte brut, par exemple x^n / y, pour un site entièrement hors ligne.
```

# Nav Portfolio

A Hugo portfolio site with:

- Tailwind CSS for layout and styling
- a shadcn-inspired design system built with CSS variables
- a lightweight Three.js AI/brain background
- multilingual content support (`en`, `es`, `fr`)

## Requirements

- Hugo Extended
- Node.js 18+ and npm

Verified in this repo with:

- Hugo `v0.160.1`
- Node `v20.19.6`
- npm `v10.8.2`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Build the Tailwind CSS bundle:

```bash
npm run build:css
```

3. Start the Hugo dev server:

```bash
hugo server
```

Or run Tailwind watch and Hugo together:

```bash
npm run dev
```

4. Open the local site Hugo prints in the terminal, usually:

```text
http://localhost:1313/
```

## Typical Dev Workflow

When you change Tailwind classes or `assets/css/tailwind.css`, rebuild CSS:

```bash
npm run build:css
```

Then refresh the Hugo site or keep `hugo server` running in another terminal.

For day-to-day work, use:

```bash
npm run dev
```

For a production build:

```bash
npm run build:css
hugo
```

## Project Structure

```text
.
├── assets/css/tailwind.css      # Tailwind entry file and design tokens
├── content/                     # Site content and multilingual pages
├── data/markdown/               # Reusable markdown blocks loaded from config
├── layouts/                     # Hugo template overrides
│   └── partials/utils/          # Markdown rendering helpers
├── static/
│   ├── css/tailwind.css         # Compiled Tailwind output
│   └── js/ai-background.js      # Three.js AI background
├── hugo.yaml                    # Site configuration and homepage content
├── package.json                 # Tailwind build script
└── tailwind.config.js           # Tailwind scan/config
```

## Customization

### 1. Site Identity

Edit `params` in [hugo.yaml](./hugo.yaml):

- `params.title`
- `params.description`
- `params.favicon`
- `params.navbar.brandName`

### 2. Homepage Content

Most homepage sections are driven directly from [hugo.yaml](./hugo.yaml):

- `params.hero`
- `params.about`
- `params.experience`
- `params.education`
- `params.projects`
- `params.achievements`
- `params.contact`
- `params.footer`

This is the fastest way to change text, links, badges, images, and CTA labels.

#### Markdown content from files

Some fields support sourcing Markdown from a file using an `@` prefix. Example:

```yaml
params:
  about:
    content: "@data/markdown/en/about.md"
```

This is rendered via:

- [layouts/partials/utils/markdown-content.html](./layouts/partials/utils/markdown-content.html)
- [layouts/partials/utils/markdown-content-emojify.html](./layouts/partials/utils/markdown-content-emojify.html)

#### Skills (categorized + rating bars)

Skills are configured in [hugo.yaml](./hugo.yaml) under:

- `params.about.skills.categories[]`
  - `name`
  - `items[]` with `name`, `rating` (0–100), optional `label`

The About section renders these as responsive cards with progress bars.

#### Experience / Education (markdown override)

You can either use the original structured items, or provide a single markdown file:

```yaml
params:
  experience:
    markdown: "@data/markdown/en/experience.md"
  education:
    markdown: "@data/markdown/en/education.md"
```

### 3. Navigation

Edit:

- `params.navbar`
- `languages.<lang>.menu.main`
- `Menus.main`

Use these to change section links, custom menu items, and multilingual menu labels.

### 4. Styling / Design System

Main design tokens live in [assets/css/tailwind.css](./assets/css/tailwind.css) under `:root` and `.dark`.

Change these variables to retheme the site:

- `--background`
- `--foreground`
- `--card`
- `--muted`
- `--primary`
- `--border`
- `--radius`

Reusable component classes are also defined there:

- `.surface`
- `.surface-muted`
- `.section-heading`
- `.section-kicker`
- `.ui-button`
- `.ui-button-secondary`
- `.ui-pill`

After editing Tailwind styles, rebuild:

```bash
npm run build:css
```

### 5. Templates

Main Hugo overrides live in [layouts/](./layouts):

- [layouts/_default/baseof.html](./layouts/_default/baseof.html)
- [layouts/index.html](./layouts/index.html)
- [layouts/_default/list.html](./layouts/_default/list.html)
- [layouts/_default/single.html](./layouts/_default/single.html)
- [layouts/partials/sections/](./layouts/partials/sections)

Edit these when you want to change layout structure instead of just text/styles.

### 6. AI Background

The Three.js background is implemented in [static/js/ai-background.js](./static/js/ai-background.js).

You can customize:

- node density
- colors
- connection density
- overall spread
- opacity

Keep it subtle. It is a background layer, not the primary content.

### 7. Images

Update image references in:

- `params.hero.image`
- `params.about.image`
- `params.projects.items[].image`
- `params.achievements.items[].image`
- content frontmatter such as blog post `image`

Static assets usually live in [static/images](./static/images).

## Multilingual Content

This site uses:

- `content/` for English
- `content/es/` for Spanish
- `content/fr/` for French

Language-specific homepage overrides live in `languages.<lang>.params` inside [hugo.yaml](./hugo.yaml).

Markdown blocks can also be duplicated per language under `data/markdown/<lang>/`.

## Notes

- This repo uses Tailwind and a shadcn-style system, not the actual React `shadcn/ui` component library.
- `static/css/tailwind.css` is generated from `assets/css/tailwind.css`.
- `node_modules/`, `public/`, and `.hugo_build.lock` are ignored in git.

## Troubleshooting

### Styles changed but the page still looks old

Rebuild Tailwind:

```bash
npm run build:css
```

### Hugo build fails after content edits

Run:

```bash
hugo
```

Read the file/line Hugo reports and fix the offending markdown/frontmatter.

### The background feels too heavy

Reduce values in [static/js/ai-background.js](./static/js/ai-background.js):

- particle count
- connection threshold
- material opacity
- spread values

## Next Improvements

- add screenshots to this README

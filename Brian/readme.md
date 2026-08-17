# HTML Assignment

## 1. Is `<!DOCTYPE>` a Declarator or an Element?

`<!DOCTYPE>` is a **declaration**, not an HTML element. It tells the browser which HTML standard the document uses.

```html
<!DOCTYPE html>
```

---

## 2. Different Versions of HTML

- **HTML 1.0** — Basic structure of early web pages.
- **HTML 2.0** — Added forms and standardized HTML.
- **HTML 3.2** — Added tables, applets, and more formatting features.
- **HTML 4.01** — Improved support for stylesheets, scripting, and accessibility.
- **XHTML 1.0** — HTML rewritten using stricter XML rules.
- **HTML5** — Added semantic elements, multimedia, graphics, and modern web APIs.
- **HTML Living Standard** — The current approach, where HTML is continuously updated.

---

## 3. Other Semantic Elements

Semantic elements clearly describe the purpose of their content.

- `<header>` — Header or introductory content
- `<nav>` — Navigation links
- `<main>` — Main content
- `<section>` — Section of related content
- `<article>` — Independent content such as a blog post
- `<aside>` — Related or secondary content
- `<footer>` — Footer information
- `<figure>` — Images, diagrams, or other self-contained content
- `<time>` — Date or time information

# Assignment 2

# CSS Reference Notes

## Widely-Used, Browser-Compatible Units

**Tier 1 — universal support:**
`px`, `%`, `em`, `rem`, `vw` / `vh`, `deg`, `s` / `ms`, `fr`

**Tier 2 — well-supported, specialized:**
`ch`, `vmin` / `vmax`, `turn`

**Tier 3 — modern, check target browsers:**
`dvh` / `svh` / `lvh` (mobile viewport fixes), `cqw` / `cqh` / `cqi` (container query units)

**Rule of thumb:** `rem` for typography/spacing, `px` for borders, `%`/`fr` for layout widths, `vw`/`vh` (or `dvh`) for viewport sizing, `deg`/`s` for animation.

---

## All CSS Selectors

**Basic:** `*`, `element`, `.class`, `#id`, `element.class`, `.class1.class2`

**Combinators:**

- `A B` — descendant (any depth)
- `A > B` — direct child
- `A + B` — adjacent sibling
- `A ~ B` — general sibling
- `A, B` — grouping (either)

**Attribute:** `[attr]`, `[attr="value"]`, `[attr~="value"]`, `[attr^="value"]`, `[attr$="value"]`, `[attr*="value"]`, `[attr|="value"]`

**Pseudo-classes (state):** `:hover`, `:active`, `:focus`, `:focus-visible`, `:focus-within`, `:visited`, `:target`, `:disabled`, `:checked`, `:required`, `:valid` / `:invalid`, `:read-only`, `:placeholder-shown`

**Pseudo-classes (structural):** `:first-child`, `:last-child`, `:only-child`, `:nth-child(n)`, `:first-of-type`, `:last-of-type`, `:nth-of-type(n)`, `:empty`, `:root`

**Pseudo-classes (logical):** `:not()`, `:is()`, `:where()`, `:has()` (parent selector — checks children)

**Pseudo-elements:** `::before`, `::after`, `::first-line`, `::first-letter`, `::selection`, `::placeholder`, `::marker`, `::backdrop`

**Compatibility note:** `:has()`, `:is()`, `:where()`, `:focus-visible` are all safe in modern browsers (2023+, no IE) — fine for a React/Tailwind stack.

---

## Favorite CSS Properties (worth knowing well)

1. **`clamp()`** — `font-size: clamp(1rem, 2vw + 1rem, 3rem)` — responsive scaling, no media queries
2. **`gap`** — flex/grid spacing without margin hacks
3. **`aspect-ratio`** — `aspect-ratio: 16 / 9` — no more padding-top hacks
4. **`backdrop-filter`** — `blur(12px)` for frosted-glass UI
5. **`grid-template-areas`** — layout as readable ASCII art
6. **`accent-color`** — one-line native checkbox/radio/slider theming
7. **`:has()`** — true parent selector, e.g. `.card:has(img) { padding: 0; }`
8. **`scroll-snap-type` / `scroll-snap-align`** — carousels/full-page scroll, zero JS

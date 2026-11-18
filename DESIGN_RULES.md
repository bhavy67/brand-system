# Design Rules

One visual language for everything I publish: profile photo, logo, covers, blog images, diagrams, post graphics, carousels, thumbnails and screenshots. **Monochrome, light, minimal, polished.** Words and post ideas follow [`CONTENT_RULES.md`](CONTENT_RULES.md).
If a design decision isn't covered here, choose the quieter option.

## 1. Principles

1. **Monochrome.** Black, white and greys only. No accent colour, no gradients.
2. **Light theme.** Light background, dark content. Never a dark-mode variant of the same asset.
3. **One idea per canvas.** One headline, one supporting line, one call-to-action (usually a URL). Nothing else competes.
4. **Typography does the work.** Large, tight, confident type. Decoration is secondary and abstract.
5. **Restraint over novelty.** If an element can be removed without losing meaning, remove it.
6. **Legible at thumbnail size.** Every asset is checked at ~185px wide (LinkedIn Featured). If the headline isn't readable there, it's too small or there's too much text.

## 2. Tokens

Source of truth: [`tokens/tokens.css`](tokens/tokens.css).

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F6F4` | Canvas background |
| `--surface` | `#FFFFFF` | Raised elements (cards, page mockups) |
| `--border` | `#D9D9D5` | Frame and hairlines |
| `--ink` | `#0E0E0E` | Headlines, filled shapes, URL pill |
| `--ink-body` | `#4A4A46` | Subtitle / body copy |
| `--ink-muted` | `#6B6B66` | Small uppercase labels |
| `--ink-faint` | `#8C8C86` | The headline's closing full stop |

Contrast: `--ink` on `--bg` is about 17:1 and `--ink-body` on `--bg` about 8:1. Keep body text at or above 4.5:1.

## 3. Typography

- **Headline / body:** Inter. Headline 700 at -0.04em tracking, line-height 1.0. Subtitle 400 at -0.01em, line-height 1.35.
- **Labels and URLs:** monospace (JetBrains Mono, fallback DejaVu Sans Mono). Labels are uppercase with 0.18em tracking.
- **Headlines end with a full stop** rendered in `--ink-faint`. It's the single recurring signature across assets.
- Maximum 3 lines of headline, 2 lines of subtitle (3 only if unavoidable).
- Sentence case for headlines. No ALL CAPS except the small label.
- No emoji in graphics.

## 4. Layout (1200 x 627, LinkedIn link-card ratio)

- Background `--bg`, inset hairline frame 24px from the edge, 20px radius, 1.5px `--border`.
- Content padding: 64px vertical, 72px horizontal.
- Structure, top to bottom: **label** (top-left), **headline + subtitle** (left, max about 640px wide), **URL pill + hairline rule** (bottom).
- Right side holds one abstract mark, about 300px, kept at least 60px inside the frame so nothing gets cropped.
- Safe area: keep all text inside the inner frame. LinkedIn crops differently across surfaces.

### The URL pill
Black pill (`--ink` background, `--bg` text), monospace 24px, ending with ` →`. Followed by a 1.5px `--border` rule filling the remaining width.

### The abstract mark
One simple geometric motif per asset that hints at the topic, never illustrates it literally:

| Asset | Motif |
|---|---|
| Portfolio | Offset outlined squares plus a solid black square carrying the BL monogram |
| GitHub | Commit graph: vertical line, filled and outlined nodes, two branches |
| Blog | Page sketch: title bar, text lines, one dark "code block" |

New motifs follow the same grammar: outlines in `--border-strong`, one or two solid `--ink` shapes, no more than about 8 elements.

## 5. Do

- Use real, specific copy that describes what the thing is.
- Use whitespace generously. The canvas should feel calm.
- Keep one solid black element per composition as the visual anchor.
- Check alignment: all text shares one left edge.
- Export PNG at exact size (1200x627 for link cards, 1080x1350 for portrait posts, 1080x1080 for square).
- Verify at thumbnail size before publishing.

## 6. Don't: the anti-slop rules

"AI slop" is generic, over-decorated output that looks machine-made. None of the following belongs in this system:

**Visual**
- No gradients (purple/blue/neon or otherwise), glows, glassmorphism, drop-shadow stacks or blurred blobs.
- No colour. Not even "just one accent".
- No glossy 3D shapes, robots, brains, circuit boards, neural-net meshes, floating code windows, sparkles or rockets.
- No stock-photo style imagery, generated "hero" art, or decorative particles/grids/noise.
- No random brand logo rows or tech-icon walls to look impressive.
- No emoji, no clip-art icons, no icon in a rounded-square tile for every bullet.
- No more than one font family for text plus one mono.

**Copy**
- No buzzword filler: "cutting-edge", "next-gen", "revolutionize", "supercharge", "unlock", "game-changing", "seamless", "leverage", "empower", "passionate", "dive into", "in today's fast-paced world".
- No unverifiable numbers or claims. Never invent metrics, repo counts, follower counts or years of experience. Use only facts that are true on the day.
- No stacked triple taglines ("Build. Ship. Scale.") unless each word is true and specific.
- No em-dash-heavy, rhetorical-question or "It's not X, it's Y" phrasing.
- No exclamation marks.

**Composition**
- No centred-everything layout with a glow behind it.
- No more than one idea, one CTA.
- No tiny text. If it can't be read at thumbnail size, cut it.

### Slop test (apply before shipping)

1. Could this image belong to anyone? If yes, make it more specific or simpler.
2. Is there any element whose only job is to look impressive? Remove it.
3. Would it still look right in greyscale and at 185px wide?
4. Does every word and number hold up as true?
5. Does it feel like a calm, human-made editorial layout rather than a template?

## 7. Writing voice

Copy on graphics follows [`CONTENT_RULES.md`](CONTENT_RULES.md): plain, specific, neutral, no buzzwords, no invented numbers.

## 8. Asset specs

Every asset below uses the same frame, tokens, type and slop rules. Source templates live in [`templates/`](templates); examples in [`assets/`](assets).

| Asset | Size | Template / example |
|---|---|---|
| LinkedIn Featured / link card | 1200 x 627 | `assets/featured/` |
| LinkedIn cover | 1584 x 396 | `assets/cover/linkedin-cover.png` |
| Blog cover (Hashnode / Medium) | 1600 x 840 | `assets/blog/blog-cover-template.png` |
| Post, square | 1080 x 1080 | `assets/post/post-square-template.png` |
| Post, portrait / carousel slide | 1080 x 1350 | `assets/post/carousel-slide-template.png` |
| X / Twitter image | 1600 x 900 | same grammar as the blog cover, 16:9 |
| Diagram | 1600 x 900 (or wider) | `assets/diagram/architecture-diagram-example.png` |
| Logo mark | SVG + 512 x 512 PNG | `assets/logo/` |
| Profile photo | 800 x 800 min | photo rules below |

### 8.1 Logo
- The mark is the **BL monogram**: Inter Bold, -0.05em tracking, in a rounded square (corner radius about 19% of the side).
- Two variants only: **solid** (`#0E0E0E` square, `#F6F6F4` letters) and **outline** (`#F6F6F4` square, 6px `#0E0E0E` stroke, black letters). Light backgrounds only.
- Clear space equal to half the mark's width on every side. Minimum size 24px.
- Never: recolour, add gradients or shadows, rotate, stretch, add a tagline inside the mark, put it on a photo.
- Wordmark when needed: "Bhavy Ladani" in Inter Bold, -0.04em, followed by the faint full stop.
- SVGs use outlined glyph paths, so no font install is needed.

### 8.2 Profile photo
- A real photograph. No AI-generated, illustrated, cartoon or heavily filtered avatars.
- Head and shoulders, face fills about 55-65% of the frame, eyes in the upper third, centred for the circular crop.
- Plain, light, neutral background (off-white or light grey, close to `--bg`). Soft, even, natural light. No gradient or coloured backdrops, no bokeh effects.
- Natural colour grading. Mild exposure and crop corrections only. No beauty filters, no heavy retouching, no borders, rings or badges.
- Same photo across LinkedIn, GitHub, X and the blog.

### 8.3 Covers (LinkedIn, X, GitHub profile)
- Same frame as the cards. Content is the name, one role line, optionally the BL mark.
- **LinkedIn safe zone:** the profile photo overlaps the lower-left on desktop and mobile crops the edges. Keep text between x = 480 and x = 1440 and vertically centred. Leave the left third empty.
- No photos, patterns, skill lists or tech-logo rows in the cover.

### 8.4 Blog covers
- Layout: category label (top-left), title (large, up to 3 lines), author row at the bottom (mark, name, hairline rule, reading time).
- The title must be the real post title or a tight version of it. Don't write a different, "catchier" headline just for the image.
- One cover per post, same template, only the text changes. No illustrations or stock art.

### 8.5 Diagrams
- Canvas: `--bg` with the hairline frame. Label top-left in the mono caps style.
- Nodes: white rounded rectangles (14px radius, 1.8px `--border-strong` stroke). **One focal node** is solid `--ink` with light text; use it for the thing the diagram is about.
- Node labels: role first in Inter 600, technology second in mono, `--ink-muted`.
- Connectors: 1.8px `--ink-body`, open arrowheads, smooth curves or straight lines. Flow left to right, top to bottom.
- Align everything to a grid. Equal gaps between nodes. No overlapping lines. Avoid crossing connectors.
- Maximum about 8 nodes per diagram. If you need more, split it.
- Monochrome only. Distinguish with fill (white vs black), stroke style (solid vs dashed) and labels, never colour.
- No clip-art icons, no cloud-provider logos, no 3D, no shadows.
- A short plain-language caption beneath is allowed. Never a paragraph.

### 8.6 Post graphics and carousels
- Square or portrait. Same frame, label top-left, headline, one supporting sentence or a small black code block, URL pill or hairline at the bottom.
- Carousel: slide counter (`02 / 06`) in the top-right mono label, one point per slide, a consistent layout across all slides. First slide is the hook (headline only). Last slide is a plain takeaway and the URL pill.
- Code blocks: black `--ink` background, light mono text, comments in `--ink-faint`, 16px radius. Maximum about 6 lines. Real, correct code only.
- Charts, if ever needed: greyscale bars/lines, one black series for emphasis, direct labels instead of legends, no gridline clutter.

### 8.7 Screenshots and mockups
- Show the real product. No fake device frames with glossy reflections.
- Put the screenshot on a `--bg` canvas inside a 1.5px `--border` outline with a 12px radius. No drop shadows.
- Crop to the relevant area. Blur or remove private data.

## 9. Workflow

1. Copy the matching block from [`templates/featured-cards.html`](templates/featured-cards.html) or [`templates/assets.html`](templates/assets.html) and change the text.
2. Render with `node templates/render.js` (requires Playwright) or screenshot the element at 1x.
3. View it at full size and at ~185px wide. Fix anything illegible.
4. Run the slop test above.
5. Export PNG.

When using Claude, point it at [`skills/brand-visuals/SKILL.md`](skills/brand-visuals/SKILL.md) for visuals and [`skills/brand-content/SKILL.md`](skills/brand-content/SKILL.md) for writing and post ideas.

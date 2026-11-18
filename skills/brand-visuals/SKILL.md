---
name: brand-visuals
description: Create any visual for Bhavy Ladani in his monochrome, light, minimalist style: logo, profile photo guidance, LinkedIn/X/GitHub covers, featured cards, blog covers, diagrams, post graphics, carousels, screenshots. Enforces the anti-AI-slop rules.
---

# Brand Visuals

Produce graphics in the visual system defined in `DESIGN_RULES.md` and `tokens/tokens.css`. Read both before designing.

## Process

1. **Clarify only what's missing**: platform and size, the one headline, the one supporting line, the URL or CTA. If these are known, don't ask.
2. **Start from the template** for the asset type: `templates/featured-cards.html` (link cards) or `templates/assets.html` (cover, blog cover, square post, carousel slide, diagram). Logo files are in `assets/logo/`. Per-asset rules are in `DESIGN_RULES.md` section 8. Reuse the frame, label, headline and tokens. Do not redesign the system.
3. **Write copy first.** One headline (max 3 lines), one subtitle (max 2 lines), one URL. Use only facts the user has confirmed. Never invent numbers, counts, years or claims.
4. **Choose one abstract mark** in the established grammar (outlines in `--border-strong`, one or two solid `--ink` shapes, at most about 8 elements). Don't draw literal illustrations.
5. **Render** at exact size with Playwright (`deviceScaleFactor: 1` for exact pixels) using `node templates/render.js` after adding a job. Export PNG (SVG for logos and diagrams when possible).
6. **Verify**: view full size and at ~185px wide. Check that nothing is cropped, all text shares one left edge, and the headline is readable at thumbnail size.
7. **Run the slop test** (below). Fix before delivering.

## Asset notes

- **Logo:** the BL monogram in `assets/logo/` only. Solid or outline variant, light backgrounds. Never recolour or decorate.
- **Profile photo:** cannot be generated. Real photo, plain light neutral background, natural light, no filters or AI avatars. Give crop and background guidance only.
- **Diagrams:** one black focal node, everything else outlined, role-first labels, at most about 8 nodes, no colour, no icons.
- **Covers:** respect the LinkedIn safe zone (keep the left third empty).
- **Blog covers:** use the real post title.
- **Writing on graphics:** follow `CONTENT_RULES.md`.

## Non-negotiables

- Monochrome only: `#F6F6F4` background, `#0E0E0E` ink, greys from the tokens. No accent colour.
- Light theme. Dark text on light background.
- Inter for text, monospace for labels and URLs.
- Headline ends with a full stop in `--ink-faint`.
- One idea, one CTA per canvas.

## Anti-slop rules

Refuse these even if they look "polished":

- Gradients, glows, glass effects, shadows stacks, blurred blobs, neon, purple/blue AI palette.
- Robots, brains, circuits, sparkles, rockets, floating code windows, stock imagery, particles, noise, decorative grids.
- Tech-logo walls, icon tiles for every bullet, emoji.
- Buzzwords: cutting-edge, next-gen, revolutionize, supercharge, unlock, game-changing, seamless, leverage, empower, passionate, dive into.
- Invented metrics or claims. Triple-tagline filler. Exclamation marks. Rhetorical questions. "It's not X, it's Y" phrasing.
- Centred-everything layouts, tiny text, more than one CTA.

Exception: a photo or generated image for a LinkedIn post follows `linkedin/images.md` and the `linkedin-post` skill instead. Brand graphics themselves never use generated imagery.

If the request pushes toward any of these, keep the system and say why in one sentence. Offer the minimal alternative.

## Slop test

1. Could this belong to anyone? If so, make it more specific or simpler.
2. Does any element exist only to look impressive? Remove it.
3. Does it hold up in greyscale at 185px wide?
4. Is every word and number true?
5. Does it feel like a calm, human-made editorial layout, not a template?

## Delivery

Deliver PNG at the exact requested size. Name files `<platform>-<purpose>-<n>.png`. Mention anything you couldn't verify.

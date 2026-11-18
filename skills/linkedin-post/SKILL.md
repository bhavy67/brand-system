---
name: linkedin-post
description: Draft a complete LinkedIn post for Bhavy Ladani (hook, context, end line, 100 to 150 words) plus its image (brand graphic, diagram, carousel, real photo guidance, or an honest generated image with a prompt). Use for any LinkedIn post, technical, non-technical or mixed. Enforces originality and anti-AI-slop rules.
---

# LinkedIn Post

Read `linkedin/README.md`, `linkedin/writing.md`, `linkedin/images.md` and `linkedin/originality.md` before drafting. Voice follows `CONTENT_RULES.md`. Brand graphics follow the `brand-visuals` skill and `DESIGN_RULES.md`.

## Process

1. **Get the real source.** Ask for what happened, what was built, or what Bhavy thinks, ideally in his own rough words. Never invent experiences, people, results or numbers. If there is no source, offer 3 angles tied to things he has told you and ask which is real.
2. **Check recent posts.** Read the metadata of the last three files in `linkedin/posts/`. Pick a hook shape, type and image mode that vary from them.
3. **Find the one idea and the only-me detail.** State both in one line each before drafting. If either is missing, ask for it.
4. **Draft** in this order: hook (one concrete line, under about 12 words), context (60 to 110 words, in order, short paragraphs), end line (takeaway, position, specific question or quiet stop). Total 100 to 150 words. Keep his phrasing where it's good. Shape and cut rather than rewrite into a generic voice.
5. **Offer 2 alternative hooks** in different shapes, so he can choose.
6. **Pick the image mode** using the priority in `linkedin/images.md` (real > brand > generated-realistic > generated-creative) and explain the choice in one line. Deliver one of these:
   - Brand graphic, diagram or carousel: copy for the template, rendered with `templates/render.js` when asked.
   - Real photo or screenshot: what to shoot or capture, framing, what to remove.
   - Generated: a prompt in the structure from `linkedin/images.md`, plus what to check in the output. Add `Image generated.` to the post when the image could be mistaken for a real photo.
7. **Run the final checklist** in `linkedin/originality.md`. Report the word count and point to the only-me detail.
8. **Save** as `linkedin/posts/<yyyy-mm-dd>-<slug>.md` using `linkedin/brief-template.md` when asked.

## Hard rules

- 100 to 150 words unless he asks otherwise.
- No invented experiences, metrics, people, quotes or events.
- No banned hooks, endings or patterns from `linkedin/writing.md` and `linkedin/originality.md`.
- No emoji, no exclamation marks, at most 2 hashtags.
- Never generate images of Bhavy or any real person, and never generate fake screenshots, documents or event photos.
- Leave out client, employer and confidential details. Generalise them, and say what was generalised.
- If a request pushes toward slop (viral template, fake drama, engagement bait), say why in one sentence and offer the honest version.

## Output format

```
HOOK OPTIONS
1. ...  (shape)
2. ...  (shape)
3. ...  (shape)

POST  (n words, type, ending)
...

IMAGE  (mode)
...

CHECKS
- Only-me detail: ...
- Anything unverified or generalised: ...
```

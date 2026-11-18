# Images for LinkedIn posts

Every post gets one image (or one carousel). The image carries the **same single idea** as the post. It isn't decoration and it isn't a second message.

## Scope

- **Brand graphics** (typographic cards, code cards, diagrams, carousels) follow [`DESIGN_RULES.md`](../DESIGN_RULES.md) exactly: monochrome, light, the frame and tokens.
- **Photos and generated images** for LinkedIn posts are a deliberate, limited exception to the "no generated imagery" rule in `DESIGN_RULES.md`. They follow this file. The logo, covers, featured cards, blog covers and diagrams do not get this exception.

## 1. Image modes

Choose by asking: what would show this idea most honestly and most specifically?

| Mode | Use for | Notes |
|---|---|---|
| **A. Brand graphic** | Concept, decision, correction, opinion posts. Anything where the words or code are the point. | Templates in `templates/assets.html`. Square 1080x1080 or portrait 1080x1350. |
| **B. Diagram** | Architecture, data flow, before/after of a system. | `DESIGN_RULES.md` section 8.5. Max about 8 nodes. |
| **C. Carousel** | An idea with 3 to 7 real steps. | 1080x1350 slides. First slide is the hook, last is the takeaway. |
| **D. Real photo** | Human, non-technical, build log, events, places, my desk, a whiteboard, a notebook page. | Best option when it exists. A real phone photo beats a perfect generated one. |
| **E. Real screenshot** | Build log, debug story, a tool I built. | `DESIGN_RULES.md` section 8.7. Remove private and client data. |
| **F. Generated, realistic** | When the scene is real or plausible but I have no photo of it: an object, a setting, a metaphor made physical. | Rules below. Never a fake record of something that happened. |
| **G. Generated, creative** | An idea that is easier to show as a made-up but visually honest image: a physical metaphor, a still life, a conceptual scene. | Rules below. It should look intentionally made, not like a stock poster. |

Priority when several fit: **D or E (real) > A, B, C (brand) > F > G.** Generate only when nothing real or typographic does the job better.

## 2. Pairing the image with the post

- **Same idea, different angle.** The image shows; the post explains. Don't repeat the hook word for word in the image.
- **Specific, not generic.** A post about a date-boundary bug gets a wall calendar with the 31st circled. It doesn't get "a developer at a laptop at night".
- **One subject.** One object, one scene, one diagram. If the image needs a caption to be understood, it's either too clever or too busy.
- **Readable at feed size.** LinkedIn shows images small on mobile. One subject, strong shape, little or no text.

## 3. Rules for generated images (modes F and G)

### Honesty (non-negotiable)

- **Never generate me.** No AI portraits, avatars or "me at a conference". My face only appears in real photos.
- **Never generate real people**, colleagues, clients, interviewers, or anyone presented as a real person in the story.
- **Never fake a record:** no generated screenshots, dashboards, code editors, error messages, certificates, offer letters, office photos, event photos, whiteboards "from the meeting", or anything that looks like evidence.
- **Never fake a brand:** no company logos, product UI, or trademarked characters.
- If a realistic generated image could reasonably be mistaken for a photo of what the post describes, say so in one plain line at the end of the post, for example `Image generated.` LinkedIn may also show its own content-credentials label on AI images. Don't strip that metadata to hide it.

### What makes it look real (mode F)

Generated images look fake because they look too perfect. Aim for a photo a person could have taken.

- **Ordinary camera, ordinary light.** Phone or 35mm-equivalent framing, eye level or slightly above, window light or one practical lamp. Not "cinematic", not "studio".
- **Imperfection.** A bit of clutter, a cable, a coffee ring, a slightly crooked angle, uneven light, real wear on objects.
- **Natural colour.** Neutral or muted, true to life. No teal-and-orange grade, no oversaturation, no HDR glow.
- **Real-world scale and physics.** Check hands, keyboards (key count and layout), text, reflections, shadows, cables that go somewhere.
- **No text from the generator.** Generated text is usually garbled. Add any text later in the brand template, or keep the image text-free.
- **Indian context when it fits.** If the scene is my life, it should look like it: real homes, offices, streets, objects. Not a generic Silicon Valley loft.

### What makes it creative without slop (mode G)

- **A physical metaphor with one exact mapping.** A queue of identical paper cups for a message queue; one cup tipped over for a failed job. The mapping should be obvious in under 3 seconds.
- **Made-by-hand feel.** Still life, paper, clay, wood, ink, chalk, a model on a table. Things that look like someone arranged them.
- **Restrained palette.** Muted, natural or close to monochrome. A creative image can have colour; it shouldn't look like a neon poster.
- **Negative space.** Leave room. One subject, plain background.

### Never (any generated image)

- Robots, brains, glowing circuits, neural meshes, holograms, floating code, binary rain, sparkles, rockets, light trails.
- Purple-blue gradients, neon, glassmorphism, lens flares, bokeh orbs, "8k ultra-detailed masterpiece" gloss.
- Faceless hooded hackers, people pointing at transparent screens, handshakes, people in suits high-fiving, lightbulb-over-head.
- Generic "developer at laptop at night with blue glow".
- Images copied or closely imitated from other creators' posts, or "in the style of" a named living artist.

## 4. Prompt structure (modes F and G)

Write prompts as a description of a photo or a made object, not a list of quality keywords.

```
Subject:      the one thing in the frame, specific and physical
Setting:      where it is, with 2 or 3 real details
Camera:       phone / 35mm, distance, angle
Light:        source and time of day
Mood/colour:  natural, muted, neutral
Imperfection: one or two real-world flaws
Exclude:      text, logos, people's faces, glow, gradients
```

Example (for a post about a stale cache value):

```
A yellow sticky note on the edge of a computer monitor with a handwritten
price that has been crossed out and rewritten once. Ordinary office desk in
India, a steel tumbler and a phone charger cable in soft focus behind.
Shot on a phone at desk height, slightly off-centre. Afternoon window light
from the left, mild shadows. Natural, muted colours. The note's corner is
slightly curled. No readable text other than the price, no logos, no people.
```

Avoid in prompts: `hyper-realistic`, `8k`, `masterpiece`, `cinematic`, `epic`, `award-winning`, `trending on artstation`, `stunning`. They push the output toward the gloss that reads as AI.

## 5. Image check

1. Does it show the same single idea as the post?
2. Could this image sit on anyone else's post? If yes, make it more specific.
3. Is it real (D/E), on-system (A/B/C), or honest about being generated (F/G)?
4. Zoom to 100%: hands, text, keyboards, edges, shadows. Anything wrong? Regenerate or crop.
5. Does it hold up at feed size on a phone?
6. Is there any private, client or confidential detail in it? Remove it.

## 6. Sizes and files

| Use | Size |
|---|---|
| Single image, square | 1080 x 1080 |
| Single image, portrait (more feed space on mobile) | 1080 x 1350 |
| Carousel slide (uploaded as PDF) | 1080 x 1350 per slide |
| Landscape, only when the subject needs it | 1200 x 627 |

Name files `post-<yyyy-mm-dd>-<slug>.png` and keep them next to the post file in `posts/`.

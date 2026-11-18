# LinkedIn posts

How I write and illustrate LinkedIn posts. This extends [`CONTENT_RULES.md`](../CONTENT_RULES.md) (voice) and [`DESIGN_RULES.md`](../DESIGN_RULES.md) (brand graphics). Where this folder is more specific, it wins for LinkedIn posts.

The goal: posts that sound like one specific engineer, come from real work and real thinking, and could not have been written by anyone else or by a prompt alone.

## The format

Every post, any type:

| Part | Job | Length |
|---|---|---|
| **Hook** | Make the right reader stop. One concrete line. | 1 line, ideally under 12 words |
| **Context** | The situation, the idea, what happened or how it works. | 60 to 110 words |
| **End line** | Where it lands: a takeaway, a position, or one honest question. | 1 to 2 lines |
| **Image** | Carries the same single idea visually. | 1 image (or a carousel) |

Total: **100 to 150 words.** Under 100 is fine if nothing is missing. Over 150 needs a reason.

## Files

- [`writing.md`](writing.md): post types, hooks, context, end lines, formatting.
- [`images.md`](images.md): image modes, generation rules, prompt structure, realism and honesty.
- [`originality.md`](originality.md): what makes a post mine, and the anti-slop checks.
- [`brief-template.md`](brief-template.md): fill this in before drafting.
- [`posts/`](posts): drafts and published posts, one file each, with metadata to keep variety.

With Claude: use the `linkedin-post` skill in [`../skills/linkedin-post/SKILL.md`](../skills/linkedin-post/SKILL.md).

## The process, short version

1. Start from something real: a note, a bug, a decision, a moment, an opinion I actually hold.
2. Fill the brief. Write a rough version in my own words first, even if it's bad.
3. Shape it: hook, context, end line. Cut to 100 to 150 words.
4. Choose the image mode and make the image.
5. Run the checks in `originality.md`. Read it out loud once.
6. Save it in `posts/` with its metadata.

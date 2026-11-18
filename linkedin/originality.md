# Originality and anti-slop

AI slop is writing that could have come from anyone: correct, smooth, and empty. Avoiding banned words isn't enough. A post is original when it contains things only I could have put there.

## 1. Where originality comes from

- **Real source material.** Every post starts from something that happened, something I built, or something I think. Not from "give me a LinkedIn post about React".
- **The only-me detail.** At least one detail per post that nobody else could write: the actual constraint, the odd field, the time it broke, what I tried first, what I'd do differently. Change details only to protect confidential information, never to make it more dramatic.
- **My own first draft.** Write or voice-note the rough version myself first. Claude shapes, cuts and checks it; it doesn't invent the substance. A post that started from a prompt reads like one.
- **A real position.** Say what I think and why, including where I'm unsure. Balanced "it depends" posts with nothing at stake are filler.
- **My context.** Enterprise workflows, Indian work life, learning while working full-time, interviews, the domains I actually work in. These are specific, so use them.

## 2. Anti-slop checks for writing

All rules in [`CONTENT_RULES.md`](../CONTENT_RULES.md) apply. On top of those, for LinkedIn:

**Patterns that read as machine-written or as a LinkedIn template:**

- `It's not X. It's Y.` / `X isn't about Y. It's about Z.`
- Rule-of-three rhythm (`Fast. Simple. Reliable.`), and lists of three wherever two or four would be true.
- One-sentence-per-line drama formatting for the whole post.
- `Here's the thing:` / `Here's what I learned:` / `The lesson?` / `The result?` used as a reveal.
- Arrow bullets, emoji bullets, checkmark lists.
- The tidy final line that restates the whole post.
- `In a world where...`, `Let's be honest`, `The truth is`, `Spoiler:`, `Plot twist:`.
- Fake humility: `I'm humbled`, `Honoured to share`.
- Lessons that would fit any topic: `Consistency is key`, `Never stop learning`, `Communication matters`.

**Copy-paste and trend signals:**

- Reusing a viral post's structure with my topic swapped in.
- Generic "X things I learned in Y years" lists.
- Reposting a concept that's everywhere this week without anything of my own added.
- Advice I haven't followed myself.

## 3. Variety rules

Keep the feed from feeling templated:

- Don't use the same **hook shape** twice in a row.
- Don't use the same **post type** more than twice in a row.
- Don't use the same **image mode** more than twice in a row, and use generated images (F/G) in at most about one in three posts.
- Vary the **ending**: not every post ends in a lesson.

The metadata in each `posts/` file makes this easy to check.

## 4. Final checklist (run on every post)

1. **Real:** is everything in it true, and could I defend every line in an interview?
2. **Mine:** is there at least one detail only I could write? Point to it.
3. **One idea:** can I say the point in one sentence?
4. **Hook:** concrete, under about 12 words, readable before "see more", not on the banned list?
5. **Length:** 100 to 150 words (count them)?
6. **Ending:** takeaway, position, specific question, or quiet stop, and not a restatement?
7. **Spoken test:** read it out loud. Does it sound like me talking to a colleague? Anything I'd be embarrassed to say out loud, cut.
8. **Slop scan:** no banned phrases, emoji, exclamation marks, hashtag walls or invented numbers?
9. **Image:** passes the image check in [`images.md`](images.md), and is labelled if it's a realistic generated image?
10. **Variety:** different hook shape from the last post?

# Writing LinkedIn posts

Voice is in [`CONTENT_RULES.md`](../CONTENT_RULES.md): plain, specific, calm, engineer to colleague. This file covers the shape of a post.

## 1. Post types

Posts don't have to be technical. They do have to be real. Pick the type from the material, not the other way round.

| Type | What it is | Source material it needs |
|---|---|---|
| **Concept** | One idea explained from first principles. | A concept I understand well enough to explain simply, plus a small correct example. |
| **Debug story** | Symptom, wrong guesses, cause, fix. | A real bug I worked on. Details changed only to protect confidential info. |
| **Decision** | Options, constraint, what I chose, what it cost. | A real trade-off I made or argued for. |
| **Build log** | Something I built or changed and why it's shaped the way it is. | The project, the constraint, the honest current state. |
| **Correction** | Something I believed that turned out wrong. | The old belief, what changed my mind. |
| **Observation** | A pattern I keep seeing at work, in code reviews, in interviews, in teams. | Several real instances, not one anecdote stretched. |
| **Career / learning** | A decision about growth, a study method, a switch in direction. | What I actually did, and what happened. No advice I haven't followed. |
| **Opinion** | A position I hold and can defend. | The reasoning, and the strongest counter-argument. |
| **Human / non-technical** | A moment, a person, a place, a habit, something outside the screen. | A specific, true detail. Ties back to work only if it genuinely does. |
| **Mixed** | A non-technical moment that maps onto an engineering idea, or the reverse. | Both halves must be real. The link must be earned, not forced. |

### The mixed type, done right

The risk with mixed posts is the forced metaphor ("my chai stall taught me about microservices"). Use one only when the mapping is exact enough that a reader learns something about both sides. If the link needs a sentence of explaining, drop the metaphor and write the technical post straight.

## 2. Hooks

The hook is the first line, and roughly the first two lines are all that show before "...see more". It has one job: make the right reader stop. Not every reader.

### What a good hook does

- **Concrete.** A specific thing, moment, line of code, number (real), or claim.
- **Says something.** A reader who stops at the hook still gets a piece of information.
- **Sounds like me.** Something I would say to a colleague across the desk.
- **Short.** Ideally under 12 words. Never more than 2 lines.

### Hook shapes

Rotate these. Don't use the same shape in two consecutive posts (check `posts/`).

| Shape | Pattern | Shape example (illustrative, not content to reuse) |
|---|---|---|
| **The moment** | A precise point in time or place. | `The bug only showed up on the last day of the month.` |
| **The plain claim** | A direct statement I can defend. | `Most pagination bugs are off-by-one bugs in disguise.` |
| **The wrong belief** | What I used to think. | `I used to think useMemo made components faster.` |
| **The detail** | One odd, specific fact. | `One tax field was a string in one API and a number in another.` |
| **The constraint** | The limit that shaped everything. | `We couldn't change the API, so the fix had to live in the UI.` |
| **The result** | A real outcome, stated plainly. Needs a real number or none. | `The report page went from timing out to loading in one request.` |
| **The code** | One line of code as the first line. | `setTimeout(fn, 0) runs later than most people expect.` |
| **The small admission** | Something honest and unglamorous. | `I spent a full afternoon on a bug caused by a trailing space.` |
| **The question I was asked** | A real question from a review, interview or colleague. | `A junior dev asked me why we don't just store everything in Redux.` |

### Hooks to never write

- `Most developers don't know this.` / `Nobody talks about this.` / `Here's what nobody tells you.`
- `Stop doing X.` / `Unpopular opinion:` / `Hot take:`
- Rhetorical questions: `Ever wondered why...?`, `What if I told you...?`
- Fake drama: `I almost quit.`, `I got rejected 47 times.` (unless literally true and the post is about that)
- Numbered promises: `7 lessons from 4 years of...`
- `I'm thrilled to announce` / `Excited to share`.
- Anything that needs the reader to click "see more" before it means anything.

## 3. Context

The middle 60 to 110 words. One idea, told in the order a reader needs it.

- **Tell it in order.** For stories: situation, what went wrong or what I noticed, what I did. For concepts: the misconception, how it actually works, a tiny example.
- **One concrete detail per few lines.** A real field name type, a real constraint, a real error message (sanitised), a real time of day. Details are what make a post believable and mine.
- **Short paragraphs.** 1 to 3 sentences each, a blank line between. No wall of text, and no one-word-per-line drama formatting either.
- **Code.** At most one small block or a single inline line. LinkedIn doesn't render code formatting, so keep it to 1 to 4 lines, or put the code in the image.
- **Lists.** Only when the content really is a list. Plain hyphens or numbers. No emoji bullets, no arrow bullets.
- **Name what I don't know.** "I haven't measured this at scale" is a stronger line than a fake certainty.

## 4. End lines

The last 1 to 2 lines. Pick one:

| Ending | When | Shape example |
|---|---|---|
| **The takeaway** | The post taught something. State it once, in new words, not a summary. | `Now I check the date boundaries before I check the code.` |
| **The position** | Opinion or decision posts. Say where I stand. | `I'd still choose the boring option. It's the one I can debug at 2am.` |
| **The open question** | Only if I genuinely want answers and the question is specific. | `If you've solved this without a second request, I'd like to know how.` |
| **The quiet stop** | Human posts. End on the detail, no lesson. | `The note is still stuck to my monitor.` |

Never end with: `Thoughts?`, `Agree?`, `What do you think?`, `Follow for more`, `Repost if this helped`, `Let that sink in.`, or a line that restates the hook.

Hashtags: 0 to 2, only if they're accurate topic labels. On their own line at the end.

## 5. Word budget

| Part | Words |
|---|---|
| Hook | 6 to 15 |
| Context | 60 to 110 |
| End line | 8 to 25 |
| **Total** | **100 to 150** |

To cut: delete the first sentence of the context (it's usually warm-up), delete adjectives, delete any sentence that explains the point a second time.

## 6. Worked example (concept type)

A format example. It uses a general concept, not an invented experience.

> setTimeout(fn, 0) runs later than most people expect.
>
> It waits for the current script to finish, then for every queued microtask.
>
> Promise callbacks are microtasks. The event loop drains that whole queue before it picks the next task, and a timer callback is a task.
>
> So this logs A, C, B:
>
> console.log("A")
> setTimeout(() => console.log("B"), 0)
> Promise.resolve().then(() => console.log("C"))
>
> This matters in UI code. If a long chain of promise work keeps adding microtasks, your timer, and the browser's chance to render, waits behind it.
>
> When ordering matters, I don't rely on timing. I make the dependency explicit.

About 100 words. Hook shape: the code. Ending: the position. Image: brand graphic with the three-line snippet and the output order.

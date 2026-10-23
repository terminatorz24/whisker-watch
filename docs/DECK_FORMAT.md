# Study deck contract — JSON only
Contract: deckFormat 1, deckType multiple_choice, UTF-8 .json. Authoritative structure: schema/deck.schema.json. File validation checks syntax and shape, NOT factual accuracy. The supplied answer string is the answer key.

## Fields
Root required: deckFormat=1, deckType="multiple_choice", deckId (stable lowercase slug), questions (1..5000 entries). Optional: title, notes (strings). Question required: id (stable unique string), question (nonblank string), answer (nonblank string), wrong (exactly 3 nonblank distinct strings). Optional: explanation (string, including empty), topic, tier (integer 1..5), reviewStats.
Explanations are optional in the schema, formatter, templates and UI. If absent/empty, play is allowed and UI omits the explanation area. No source-citation requirements or factual verifier. Do not block a deck because the game cannot verify its statements.
reviewStats, when exported, contains nonnegative integer correct/incorrect/skipped/seen counters. The same format can reimport a study report. A new run ignores these counters by default and may explicitly import them as historical review only; never award money, alter current streak, or treat a deck as a resumable save.

## Limits and repetition
One valid question is sufficient for either run length. Warn below recommended 20 for Quick / 100 for Full. Questions repeat automatically; never ask users to clone source questions to reach a quota. Empty decks block play. Max 5000 questions and 5 MiB UTF-8 file. Max question 4000 characters, correct/wrong option 2000 each, explanation 8000, topic/title 200. The browser checks bytes before parsing. These safety ceilings are not factual tests.
Reject duplicate IDs, answer equal to a wrong choice or duplicate wrong choices after Unicode NFC + trim + case-insensitive comparison. Duplicate content with different IDs is only a warning. Preserve plain text, line breaks and Unicode; never execute/import text as HTML or code. Unknown keys produce a warning and are not merged into internal prototypes/state. Reject prototype-pollution keys during normalization. JSON duplicate object keys should be rejected or explicitly diagnosed by the parser, not silently reinterpreted.

## Revision behavior
Stable deckId + stable question IDs match revisions. Preserve stats only when canonical question/answer/distractor content is unchanged; topic/explanation-only edits may retain stats. Material changes show a reset/archive preview; removals archive old stats, additions start at zero. Apply only after current study set and pending answer reward have completed. A different deckId starts a new run or requires an explicit deck-switch action, never silent replacement. The save always embeds the exact active revision.

## User workflow
Download Template / Copy AI Instructions -> external AI produces JSON -> Upload File or Paste JSON -> Validate -> preview/fix -> Play. Same file rules for both input routes. Copy a malformed-file error report for repair; no general PDF/CSV/Markdown importer. A JSON filename in a Google Doc does not change its file format; users can copy the raw JSON text from a document and paste it into the game's JSON input.
The three-question template is playable with a small-deck warning. The 30- and 120-question synthetic demo files are for development and an optional Demo button, never hardcoded replacements for player content.

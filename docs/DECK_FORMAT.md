# ONE STUDY DECK FORMAT — MULTIPLE CHOICE JSON
Version: deckFormat 1, UTF-8 .json. Users can upload a local JSON file OR paste raw JSON directly into the game's import panel. Source PDFs/notes never go directly into the game; an external AI converts the user's source into this valid file. The SAVE format also uses .json but is a separately versioned, self-contained object with a different root identifier.

## Canonical structure
{
  "deckFormat": 1,
  "deckType": "multiple_choice",
  "deckId": "biology-exam-1",
  "title": "Biology Exam One",
  "questions": [
    {
      "id": "q001",
      "topic": "Cell biology",
      "question": "Which structure is responsible for most ATP production in a eukaryotic cell?",
      "answer": "Mitochondrion",
      "wrong": ["Lysosome", "Golgi apparatus", "Nucleolus"],
      "explanation": "The source material identifies mitochondria as the main site of aerobic ATP production."
    }
  ]
}

## Required fields
At root: deckFormat exact 1, deckType exact multiple_choice, deckId (stable slug), questions array. Title is recommended.
Per item: stable unique id, substantive question, nonempty answer, wrong array of exactly 3 nonempty, mutually distinct distractors all different from answer. Brief explanation is recommended and should be present only where supported by the user's source; blank explanation and warning are preferable to invented facts. Topic optional. Difficulty tier optional, no fabricated tier. All fields plain text only, no HTML execution.

## Limits and repetition
Provisional play minimum: Quick 20 entries; Full 100 entries. Technical upper bound proposal 5000 questions or 5 MiB per deck; benchmark memory and files before treating final.
A deck with 30 unique source questions can deliberately contain repeated formulations to meet Full's entry minimum, but repetitions must reuse the source truth, remain explicitly authorized by the deck maker, and have distinct question IDs. Near-duplicates should be warned about rather than automatically deleted. The selector should avoid duplicates during a single break when possible. Aggregate the same concept's outcomes intelligently for reports, and always preserve individual stable IDs for save-revision matching.
If an external AI cannot make 3 clearly wrong alternatives safely for a question from the supplied material, it omits that question and lists the missing input in its companion response. Never invent supporting facts, answers, statistics or explanations. No silent auto-padding unless repetition was requested.
Questions can be updated or removed between waves through a simple in-game editor or AI-regenerated revised deck. Keep unchanged-ID statistics; when the prompt or answer changes materially under an existing ID, warn and safely reset that question's statistics by default, archiving previous ones so the user understands the change. Keep the active study break immutable until completed; apply revisions at a safe boundary.

## Validator
Reject wrong root, invalid JSON, wrong deckType, missing fields, duplicate IDs, under-minimum for selected run length, over-max file/question count, invalid options, repeated answer as wrong option. Warn on duplicate or near-duplicate content, unusually long text, empty explanation or missing topic, answer-choice giveaways, unsupported characters/control codes, and suspicious markup. Provide per-question line/index and corrective wording.
Preview a summary, allow row editing, Show Valid Questions, Copy Fix Report and Export Validated Deck JSON. A blocked file must not start combat. Use real schema validation and tests of malformed text, Unicode, escaped quotes, BOM, newlines, correct/incorrect answers and boundary sizes.
Never render user-provided content as executable HTML. Use actual text rendering and escape untrusted data.

## Accessibility and file handling
Give Download Sample JSON, Copy Formatting Instructions, Upload Deck File, Paste JSON, Import/Validate and Download Edited Deck. Explain copy/paste workflow in a single short screen. Do not tell users that putting JSON into a word processor and saving an ordinary document makes a playable file; they can paste the raw text directly into the game or download the original AI-generated .json.
Questions appear as four shuffled A-D options; seeded questions RNG ensures stable save/replay, and the answer reveal shows the correct answer and any source-grounded explanation.

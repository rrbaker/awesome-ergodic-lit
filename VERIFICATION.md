# Verification checklist

What still needs a human check before launch. Delete items as they're done; flip `verified: true` in the YAML once an entry is fully checked. URL checks below were run with `curl` on 2026-10-03.

## Works

Every work is `verified: false`. For each one, confirm the year of first publication, original language, mechanics (dominant first), `needs_physical`, and summary. All works link to Wikipedia (each returned 200); most still need a publisher link.

- [ ] **House of Leaves**: confirm 2000 (full first edition) vs. earlier online circulation.
- [ ] **Only Revolutions**: confirm the "eight pages at a time" reading suggestion.
- [ ] **Pale Fire**: confirm `needs_physical: false` (cross-referencing works in an ebook).
- [ ] **Hopscotch (Rayuela)**: confirm the second reading starts at chapter 73. Decide on title style (see "Decisions" below).
- [ ] **Dictionary of the Khazars**: confirm the male/female editions differ by "one paragraph" (it may be a longer passage).
- [ ] **If on a winter's night a traveler**: the reading order is fixed and linear. `multiple-paths` is a stretch; decide whether it qualifies, needs another mechanic, or should be dropped.
- [ ] **Composition No. 1**: confirm page count (~150) and year (1962 French, 1963 English).
- [ ] **The Unfortunates**: confirm 27 sections.
- [ ] **Cent mille milliards de poèmes**: Wikipedia link is the English article ("Hundred Thousand Billion Poems").
- [ ] **Tree of Codes**: add a publisher link (Visual Editions); I couldn't find a live page.
- [ ] **S.**: confirm inserts and ink-color layering description.
- [ ] **Building Stories**: confirm fourteen pieces.
- [ ] **253**: 1996 web, 1998 print remix. The original domain `ryman-novel.com` is now an unrelated squatted site, so the entry links to the 1997 Wayback Machine copy instead. Never link the live domain.
- [ ] **afternoon, a story**: 1987 (first shown) vs. 1990 (Eastgate release); pick one and note it.
- [ ] **Dictionary of the Khazars** and **253**: Goodreads gives 1983 and 1998; this list has 1984 and 1996.

## Works added from the Goodreads list (2026-10-04)

The 53 books from the [Goodreads "Ergodic Literature" list](https://www.goodreads.com/list/show/90232.Ergodic_Literature) not already here were added on request. Years come from each book's Goodreads page; summaries and mechanics were written from general knowledge and, for the less-known books, web searches. Each links only to its Goodreads page.

### Read front to back: keep or drop?

These are on the Goodreads list, but their traversal is essentially linear. Each has the closest mechanic, and its summary says "Read in order" where that applies.

- [ ] **Lolita**, **Oryx and Crake**, **The Wind-Up Bird Chronicle**: no mechanic really fits.
- [ ] **The Quincunx**, **Night Film**, **Ella Minnow Pea**, **The Supernatural Enhancements**, **Unflattening**, **We Used to Live Here**: ergodic touches (genealogies, documents, ciphers, hidden messages) in a linear read.
- [ ] **Ada, or Ardor**: the back-of-book notes are a stronger case than the others.

### Mechanic is a stretch

- [ ] **You Are Reading These Words** and **Multiple Choice**: tagged `gamebook`, but they set exercises or questions without branching. Consider a new mechanic for books that instruct the reader to do things.
- [ ] **Chasing Homer**: tagged `typographic` and `hybrid`; its real mechanic is reading to accompanying music.
- [ ] **Here**, **Betrayals**, **Parabola**, **Follow This Thread**: confirm `typographic` is the best fit.
- [ ] **The Strange Library**: the summary describes Chip Kidd's 2014 English edition, but the year (2005) is the Japanese original.

### Facts to confirm

- [ ] **Nibiru**: 2019 is the complete edition; the original came out about 20 years earlier. Confirm the year, author, and original language.
- [ ] **You Are Reading These Words**: confirm the 2026 date and original language.
- [ ] **Codex Unfertho**: self-published July 2026; Goodreads has no year.
- [ ] **Viljevo (August After Midnight)**: Goodreads lists the Hungarian edition, *Titkosírás*. The entry uses the Croatian title; decide the title style along with Hopscotch's.
- [ ] **Cain's Jawbone**: confirm how the 2019 edition presents its pages (loose or bound) to settle `needs_physical`.
- [ ] **Tristano** and **Subcutanean**: every printed copy is unique. Decide whether that makes `needs_physical` true.
- [ ] Spot-check specific claims: the flip-book sequence in **The Raw Shark Texts**, the sealed envelope in **Bats of the Republic**, the parallel columns in **Dhalgren**, the shaped poems in **Voices**, the split pages in **Milo and the Magical Stones**, the endnote count in **Infinite Jest**.

## Resources

| Resource | URL check | Status |
| --- | --- | --- |
| Cybertext: Perspectives on Ergodic Literature | Internet Archive page, 200 | Ready to flip after a look |
| Electronic Literature Directory | 200 | Confirmed (`verified: true`) |
| ELO Glossary | 200 | Confirmed (`verified: true`) |
| ELMCIP Knowledge Base | 403 (Cloudflare challenge) | **Open in a browser and confirm** |
| Goodreads: ergodic-literature shelf | 200 | Confirmed (`verified: true`) |
| Goodreads: Ergodic Literature list | 200; title "Ergodic Literature (69 books)" | URL found: `/list/show/90232.Ergodic_Literature`; ready to flip after a look |
| Pagebound: Ergodic Literature | 200; page text matches | Confirmed (`verified: true`) |

## GitHub repository settings

awesome-lint also checks the repo itself, so the `awesome-lint` CI job will fail until these are set:

- [ ] Repository description
- [ ] Topics: `awesome` and `awesome-list`
- [ ] License detected by GitHub (it should pick up `LICENSE` as CC0 automatically)

## Before submitting to sindresorhus/awesome

- [ ] The repo is at least 30 days old (awesome's submission rule; the lint check for it is currently disabled).
- [ ] Every entry verified.

# Contributing

Thanks for helping. This list exists to describe works by what the reader has to *do*, so the structured fields matter more than anything else.

## What belongs here

A work belongs on the list if reading it takes nontrivial effort beyond turning pages in order, such as following notes, choosing a route, shuffling pages, or manipulating the object. Print works are the focus; digital and hybrid works are welcome when they help show where a mechanic comes from.

## Suggest a work

[Email a suggestion](https://ergodic.rrbaker.com/about/#suggest) through the website. Include the title and author, and a sentence or two about what the reader has to do. (The address is kept off GitHub to avoid spam.)

## Add a work with a pull request

1. Add an entry to [`_data/works.yml`](_data/works.yml). Copy an existing entry and follow the field notes at the top of the file.
2. Use mechanics from the vocabulary below, and list the dominant one first. The README groups each work under its first mechanic.
3. Write the `summary` as one or two sentences on what the reader must do, not on the plot.
4. Set `verified: false`.
5. Run `scripts/build-readme` to regenerate the README, and commit both files. CI fails if the README doesn't match the data.

Resources (databases, scholarship, communities, other lists) go in [`_data/resources.yml`](_data/resources.yml) the same way.

## Mechanics vocabulary

<!-- mechanics:start -->

| Mechanic | Use when |
| --- | --- |
| `footnote-maze` | The reading path splits across notes, appendices, and apparatus. |
| `multiple-paths` | Author-defined alternate orders or reading routes. |
| `reader-assembled` | Loose-leaf, boxed, shuffleable, or unbound. |
| `permutational` | Combinatorial text, such as cut strips or generated combinations. |
| `lexicon` | Dictionary or encyclopedia structure, read in any order. |
| `typographic` | Layout, rotation, color, or spacing is part of the traversal. |
| `physical-intervention` | Die-cut pages, inserts, objects, or ephemera. |
| `gamebook` | Branching choices with explicit instructions to the reader. |
| `hypertext` | Linked nodes, digital or simulated in print. |
| `annotated-dialogue` | Multiple readers' annotations form a parallel narrative. |

<!-- mechanics:end -->

The vocabulary lives in [`_data/mechanics.yml`](_data/mechanics.yml). Extend it deliberately: suggest a new mechanic by email only when none of the existing ones describe what the reader does.

## Verification rule

Every new entry starts as `verified: false`. A maintainer sets it to `true` only after checking:

- the year of first publication and the original language against a reliable source;
- that the mechanics and `needs_physical` match the work itself (from a copy or a detailed description);
- that every link resolves to the right page.

Unverified entries are labeled as such on the website.

## Working on the site locally

You need Ruby (the version is in `.ruby-version`) and Bundler.

```sh
bundle install
scripts/dev
```

`scripts/dev` downloads the pinned Tailwind CLI on first run, then watches the CSS and serves the site at <http://localhost:4000/>.

## License

By contributing, you agree to release list content under [CC0](LICENSE) and code under the [MIT License](LICENSE-CODE).

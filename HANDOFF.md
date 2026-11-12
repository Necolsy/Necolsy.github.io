# Subin Lin Personal Website — Handoff

## Project

- Public website: <https://necolsy.github.io>
- Stack: [al-folio](https://github.com/alshedivat/al-folio), Jekyll, SCSS, and vanilla JavaScript
- Deployment: GitHub Actions builds `_site` from `main` and deploys it to GitHub Pages.

## Site structure

The home page (`/`) is a newspaper: a rack of folded papers at the top, and the chosen section is pulled out and unfolds. The inner pages (Publications, Academic Journey, Interests, News) are ordinary al-folio pages wearing a matching newsprint skin. The previous home page is kept at `/classic/`.

### Newspaper home page

| What | Where |
| --- | --- |
| All text, links and picture names | `_data/newspaper.yml` |
| Travel-map markers (shared with the Interests page) | `_data/places.yml` |
| Markup | `_pages/newspaper.html` |
| Document shell (head, fonts, metadata) | `_layouts/newspaper.liquid` |
| Styles | `assets/css/newspaper.css` |
| Behaviour (pull-out, address fragment, copy e-mail) | `assets/js/newspaper.js` |
| Pictures and logos (resized, web-ready) | `assets/img/newspaper/` |

To change wording, a link, a date or a picture on the home page, edit `_data/newspaper.yml` only. To add a section, add an entry under `sections` there and a matching `{% when %}` block in `_pages/newspaper.html`. Each section's `id` is also its address fragment (`/#journey`).

### Inner pages

- `assets/css/newsprint.css` — the newsprint skin. It is loaded after `main.css` and `portfolio.css` on every page except `/classic/` (see `_includes/head.liquid`), and only restyles; page content and structure are untouched. Removing that one `<link>` restores the original look.
- `_layouts/default.liquid` adds the `newsprint` body class on the same condition (`page.classic_home` switches it off).

## Key source locations

- `_pages/about.md` — the classic home page, now at `/classic/`: short bio, research interests, strengths, and news.
- `_pages/publications.md` — Publications page.
- `_pages/journey.md` — Academic Journey timeline.
- `_pages/interests.md` — Travel, gaming, modelling, and photography page.
- `_bibliography/papers.bib` — Publication metadata, selected/co-authored grouping, links, and image previews.
- `_news/` — News entries.
- `assets/css/main.scss` — Site-wide visual treatment, backgrounds, typography, navigation, cards, maps, and responsive styles.
- `assets/js/about-motion.js` — About-page reveal, tilt, and motion effects.
- `assets/js/zoom.js` — Full-screen, opaque publication-image preview.
- `assets/img/` — Personal images, institutional marks, and visual assets.
- `assets/img/publication_preview/` — High-resolution publication figures.
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment workflow. Ruby is pinned to the 3.3 series (the runner image no longer provides individual patch releases).
- `_config.yml` — Site identity, navigation/theme behaviour, Jekyll options, and the public URL.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Open the address printed by Jekyll (normally `http://localhost:4000`). For a production-style build:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The CI workflow also installs ImageMagick and runs PurgeCSS before publishing.

## Publishing

Push changes to the `main` branch. GitHub Actions runs `.github/workflows/deploy.yml` and publishes the generated `_site` to GitHub Pages. The public site uses a light theme by design (`enable_darkmode: false` in `_config.yml`).

## Handoff notes

- This machine has no Ruby/Jekyll, so changes are verified on the deployed site after the Actions build. Pushing to `main` deploys.
- The home page is a standalone document (it does not use `default.liquid`), so `main.scss` and `portfolio.css` do not apply to it.

- The archive intentionally includes Git history and untracked project files so another agent can continue without reconstructing the working tree.
- Build artefacts and dependency directories are not present in this checkout and can be regenerated from `Gemfile.lock` / `package-lock.json`.
- The current design uses only assets already inside this project; no external private storage is required for the visible images.

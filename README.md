# IDSV Tentaplugg

Revision for the IDSV exam: a condensed compendium of the course, 448 drill
questions with a mock-exam mode, and a Python primer for the programming
assignment.

It is a plain static site — HTML, three JavaScript data files and some PNGs.
There is no build step, no server, no database and no accounts.

## Putting it online with GitHub Pages

You do not need to know git. The web interface is enough.

1. Go to <https://github.com/new>. Name the repository something like
   `idsv-tentaplugg` and create it.
2. On the new repository's page click **uploading an existing file**.
3. Drag in **everything from this folder** — `index.html`, the three `.js`
   files, `sw.js`, `manifest.webmanifest`, the icons, and the whole `fig`
   folder. Keep `fig` as a folder; don't flatten it.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Build and deployment* set
   **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**,
   and press Save.
6. Wait a minute or two and reload that page. GitHub shows the address, which
   looks like `https://<your-username>.github.io/idsv-tentaplugg/`.

That link is what you send people.

To update it later, upload the changed files the same way — the app notices the
new version and replaces its offline copy.

## Other hosts

Anything that serves static files works, with no changes: Netlify Drop
(drag the folder onto <https://app.netlify.com/drop>), Cloudflare Pages,
Vercel, or a university web space. Every path in the site is relative, so it
works from a subfolder as well as from a domain root.

You can also just open `index.html` from the folder — everything works except
the offline cache, which browsers only allow on a real address.

## What it does on someone else's device

- **Progress is theirs alone.** Marks are kept in their own browser's local
  storage. Nobody sees anyone else's, and there is nothing to sign in to.
- **It works offline.** On the first visit the browser stores the whole app.
  After that it opens instantly and keeps working with no signal — on a train,
  in a basement lecture hall, on a plane.
- **It installs.** On a phone, *Add to Home Screen* gives it an icon and a
  full screen, with no browser chrome.
- **Moving progress between devices**: Drill → Options → Sync devices →
  *Save my progress to a file*, then load that file on the other device. The
  two are merged, newest mark per question winning. Nothing is uploaded.

## A note on sharing it publicly

The compendium text and the diagrams were written for this app, but the
question bank comes from the course's own *frågor och svar* sheet and the
material is condensed from the course slides and from Brookshear,
*Computer Science: An Overview*, 13th ed. That is fine to pass around a cohort
that already has access to it; publishing it as a public, indexed website is a
different thing.

The site ships with `robots.txt` and a `noindex` tag so search engines leave it
alone, but a GitHub Pages URL on a free account is still publicly reachable by
anyone who has it. If that matters, either send people the folder itself
instead of a link, or host it somewhere you can put a password on.

## The answer key has mistakes in it

Seven, found by recomputing every arithmetic answer. The app shows the sheet's
answer and the correction side by side wherever they differ, rather than
silently picking one — check the *Watch out* box under those questions.

## Files

| | |
|---|---|
| `index.html` | the whole app: markup, styles and logic |
| `questions.js` | the 448-question bank, the exam blueprint, the machine-language appendices |
| `context.js` | the after-answer explanations, keyed by subject |
| `compendium.js` | the compendium text, per topic |
| `python.js` | the 20 Python cards |
| `fig/` | 19 diagrams, a light and a dark version of each |
| `sw.js` | the offline cache |

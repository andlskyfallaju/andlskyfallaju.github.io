# Skyfall // Portfolio

A dark, terminal-themed portfolio site. Pure HTML/CSS + a tiny bit of vanilla JS
(no build step, no frameworks) — ready for GitHub Pages.

## Structure

```
index.html      Home — boot-sequence intro
projects.html   Projects — man-page style entries
about.html      About — education, work, extracurriculars
contact.html    Contact — links + mailto form
style.css       Shared design system
script.js       Homepage typing effect
```

## Before you publish

1. **Contact info** — open `contact.html` and swap the placeholder
   `your.email@example.com`, GitHub, and LinkedIn links for your real ones.
   Also update the `mailto:` in the `<form action="...">`.
2. **Repo links** — if you want direct links to each project's repo, add an
   `<a>` under the relevant `.entry` in `projects.html` (there's already a
   `.entry-links` style ready for this — just add
   `<div class="entry-links"><a href="...">source →</a></div>`).
3. **Favicon / meta image** — optional, add if you want one.

## Deploying to GitHub Pages

1. Create a new repo (or use an existing one), e.g. `your-username.github.io`
   for a root-level personal site, or any repo name for a project site.
2. Push these files to the repo root (or to a `docs/` folder — see step 4).
3. On GitHub: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**,
   pick `main` (or `master`) and the `/ (root)` folder — or `/docs` if you
   put the files there.
5. Save. GitHub gives you a URL like `https://your-username.github.io/repo-name/`
   within a minute or two.

If you named the repo exactly `your-username.github.io`, it'll be live at
`https://your-username.github.io/` directly.

## Local preview

Just open `index.html` in a browser — no server needed. (If the typing
effect looks off, it's because some browsers throttle timers on non-visible
tabs — reload while the tab is focused.)

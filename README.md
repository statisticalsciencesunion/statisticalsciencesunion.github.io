# SSU · Statistical Sciences Union

The official website for the Statistical Sciences Union at the University of Toronto.

Built as a static site with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## Live site

https://[your-github-username].github.io/ssu-website/

Once a custom domain is set up, this will redirect to https://ssu-uoft.ca (or similar).

## Project structure

```
ssu-website/
├── index.html              Homepage
├── assets/
│   ├── css/
│   │   └── main.css        Design system and all styles
│   ├── js/
│   │   └── main.js         Mobile menu, form, smooth scroll
│   └── images/             Logos, photos, illustrations
├── pages/                  Future pages (events, blog, etc.)
└── README.md
```

## Design system

The site uses an editorial, magazine-style aesthetic with:

- **Type pairing**: Fraunces (serif headings, italic accents) and Inter (sans body)
- **Palette**: warm cream paper (#FAF7F0), deep ink (#2C2C2A), coral accent (#D85A30)
- **Layout**: two-column editorial grid with a sticky section sidebar
- **Touches**: dropcaps, section numerals (§ 01), small-caps eyebrows, dashed rules

All design tokens live as CSS custom properties at the top of `assets/css/main.css`. Change them there and the rest of the site follows.

## Running locally

No build step. Just open the file or serve the folder.

```bash
# Option 1: open directly
open index.html

# Option 2: serve with Python (better for testing relative paths)
python3 -m http.server 8000
# then visit http://localhost:8000

# Option 3: serve with Node
npx serve .
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose `main` branch and `/ (root)` folder. Save.
5. Wait a minute. Your site will be live at `https://[username].github.io/ssu-website/`.

### Custom domain (optional)

If you have a domain like `ssu-uoft.ca`:

1. Add a file called `CNAME` at the root containing only your domain.
2. In your DNS provider, add a CNAME record pointing your domain to `[username].github.io`.
3. In GitHub Pages settings, enter the custom domain and tick **Enforce HTTPS**.

## Adding content

### A new page

Create the file in `pages/`, link to it from the navigation in `index.html`. Reuse the same masthead, footer, and CSS class structure for consistency.

### Editing team members

In `index.html`, find the section with `id="team"`. Each member is a `<figure class="member">` block. Replace placeholder portraits by swapping the `member__portrait--placeholder` div for an `<img>` tag pointing to a photo in `assets/images/`.

### Hooking up the newsletter form

The form in the join section currently fakes success. To wire it up to a real service:

- Open `assets/js/main.js`
- Find the `form.addEventListener('submit', ...)` block
- Replace the "thanks for subscribing" line with a `fetch()` to your provider (Mailchimp, Buttondown, ConvertKit, etc.)

## Contributing

If you're a member helping maintain the site:

1. Fork the repo or create a branch.
2. Make your changes.
3. Test locally.
4. Open a pull request describing what you changed and why.

For small fixes (typos, link updates), commits straight to `main` are fine.

## License

Content (text, photos) is © Statistical Sciences Union.
Code is MIT licensed. See LICENSE.

## Credits

Site design and build: Lisa Yuen, with help from the SSU exec team.
Typography: Fraunces by Undercase Type, Inter by Rasmus Andersson.

# Leads Glazing website

Your own code website for leadsglazing.com, rebuilt from the Framer design. It's built with Astro and makes a plain static site: fast, free to host, and nothing locks you in.

## Where things are

| What you want to change | File |
|---|---|
| Phone, email, addresses, CEO name, services, projects, process steps, values | `src/data/site.js` (edit this one file and every page updates) |
| Colours, fonts, buttons, header, footer styles | `src/styles/global.css` |
| Header, menu, footer, WhatsApp button | `src/layouts/Base.astro` |
| Pages | `src/pages/` (`index`, `services`, `projects`, `about`, `contact`, `404`) |
| Logo and photos | `public/images/` |

To add a project: put the photo in `public/images/`, then add a line to `projects` in `src/data/site.js`.

## Run it on your laptop

You need Node.js 18 or newer (https://nodejs.org).

```
cd C:\AgentOps\leads-glazing\website
npm install
npm run dev
```

Then open http://localhost:4321 in your browser. Changes show up as soon as you save a file.

## How it's published

The site is hosted free on **GitHub Pages** from the repository **github.com/abdulfatahfez/leadsglazing-website**.

- Every change saved to the `main` branch rebuilds and republishes the site automatically, usually within a minute or two. The build is in `.github/workflows/deploy.yml`.
- The domain is set in the repository's Settings, under Pages, as `leadsglazing.com`. `public/CNAME` holds the same name.
- DNS is at Namecheap (Advanced DNS): four A records for `@` (185.199.108.153, .109.153, .110.153, .111.153) and a CNAME for `www` pointing to `abdulfatahfez.github.io`.
- **Don't touch the Zoho email records** (the three MX records, the `v=spf1 include:zohomail.com ~all` TXT record and the `zoho-verification` TXT record). Mail to @leadsglazing.com depends on them.

To update the site: edit the files (usually `src/data/site.js` and `public/images/`), commit, and push to `main`.

## Before going live: check these

- The contact form doesn't need a server. It opens WhatsApp or the visitor's email app with their message already filled in.

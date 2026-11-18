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

## Publish it

```
npm run build
```

This makes a `dist/` folder: that folder is the whole website.

Free hosting options (pick one):
- **Cloudflare Pages** or **Netlify**: connect a GitHub repository, set the build command to `npm run build` and the output folder to `dist`.
- Or drag the `dist` folder onto Netlify Drop (app.netlify.com/drop).

Then point leadsglazing.com at it from your Namecheap account (Domain List, then Manage, then Advanced DNS). The host shows you the exact records to add.

## Before going live: check these

- `src/data/site.js`: lines marked `CHECK` (the exact wording of the Bida address, and project names and years).
- The contact form doesn't need a server. It opens WhatsApp or the visitor's email app with their message already filled in.

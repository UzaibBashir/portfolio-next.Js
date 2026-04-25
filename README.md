# Portfolio (Next.js)

A personal portfolio built with Next.js App Router, React, Tailwind CSS v4, and react-icons.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- ESLint 9
- react-icons

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production build
- `npm run lint` - run ESLint

## Current Page Sections

- Fixed responsive navbar
- Hero section with CTA buttons
- Skills cards
- Contact section
- Footer

## Project Structure

```text
app/
	layout.js
	page.js
	globals.css
	components/
public/
```

## Notes

- Main UI is composed in `app/page.js`.
- `app/components/Experience.js`, `app/components/About.js`, and `app/components/pr.js` exist but are not currently rendered on the home page.
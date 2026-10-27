# Portfolio

Single-page portfolio built with Next.js (static export, no UI libraries, plain CSS).

## Edit your content
Everything — name, text, skills, projects, and **all links** — lives in `data/profile.ts`.
Set any `href` to `""` to hide that button.

Put your résumé at `public/resume.pdf` (or set `resume` to a Google Drive link).

## Run
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out — deploy to Vercel, Netlify or GitHub Pages

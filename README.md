# Jyoti Bhushan Tripathi — Executive Portfolio

Production-ready React + Vite portfolio for Jyoti Bhushan Tripathi, telecom network planning executive.

## Local development

```bash
npm install
npm run dev
```

`npm install` creates `package-lock.json`. Commit that file to Git; never commit `node_modules/` or `dist/`.

## Production build

```bash
npm run build
npm run preview
```

## GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jyoti-bhushan-tripathi-portfolio.git
git push -u origin main
```

## Netlify

The repository is preconfigured with `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 22

Import the GitHub repository in Netlify and deploy.

## LinkedIn

Set this Netlify environment variable to the actual profile URL:

`VITE_LINKEDIN_URL=https://www.linkedin.com/in/YOUR-PROFILE/`

## Custom domain

After deployment, add the purchased domain in Netlify → Domain management. Replace the example canonical/Open Graph URL in `index.html` with the final domain.

## Included CV

`public/Jyoti-Bhushan-Tripathi-Executive-CV.pdf`

The Download CV buttons use this local PDF, so the download continues to work after deployment.

# Arakash Portfolio

A responsive dark portfolio website built with React, Vite, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Before publishing

1. In `src/App.jsx`, replace `YOUR_EMAIL@example.com` with your real email address.
2. Update the project links in the `projects` array to point to the exact repositories.
3. Edit the descriptions and skill list so they accurately reflect your experience.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Commit and push the included workflow in `.github/workflows/deploy.yml`.
5. Wait for the workflow to finish, then open the Pages URL shown in Settings → Pages.

The Vite config uses a relative base path so it can work on a GitHub Pages project site.

# test-github-pages

Small Vite site for testing GitHub Pages.

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # outputs dist/
npm run preview  # preview the build
```

## Publishing

1. Create a repo on GitHub and push `main`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml`,
   which builds the site and publishes it to `https://<user>.github.io/<repo>/`.

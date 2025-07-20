# Presentation Generator

A modern React application for creating beautiful presentations with shadcn/ui components.

## Getting Started

```bash
npm install
npm run dev
```

## Features

- React + Vite + TypeScript
- Tailwind CSS
- [shadcn-ui](https://github.com/shadcn-ui/ui/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Custom theme with professional color palette
- Responsive design with sidebar navigation

## Project Structure

```md
presentation-generator/
├── public/            # Public assets
├── src/               # Application source code
│   ├── components/    # React components
│   ├── context/       # contexts components
│   ├── config/        # Config data
│   ├── hook/          # Custom hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # pages/features components
│   ├── App.tsx        # Application entry point
│   ├── index.css      # Main css and tailwind configuration
│   ├── main.tsx       # Main rendering file
│   └── Router.tsx     # Routes component
├── index.html         # HTML entry point
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Deploy to GitHub Pages

- Update `basenameProd` in `/vite.config.ts` if needed
- Create deploy key `GITHUB_TOKEN` in github `/settings/keys`
- Commit and push changes
- Setup github pages to branch `gh-pages`
- Run action `Build & Deploy`

### Auto Deploy

To enable automatic deployment on push to main branch, update `.github/workflows/build-and-deploy.yml`:

```yaml
# on:
#   workflow_dispatch:
on:
  push:
    branches: ["main"]
```

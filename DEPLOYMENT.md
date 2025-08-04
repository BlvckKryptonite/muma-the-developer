# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

### Setup:
1. Push your code to a GitHub repository
2. Go to your repository settings → Pages
3. Set source to "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to main

### Repository Name:
The deployment assumes your repository name is `muma-kalobwe-portfolio`. If different, update the base path in the GitHub Actions workflow.

## Manual Deployment

### Option 1: Using the build script
```bash
# Update the repository name in build-gh-pages.sh first
./build-gh-pages.sh
```

### Option 2: Manual build
```bash
# Build for GitHub Pages (replace 'your-repo-name' with actual repo name)
npx vite build --outDir docs --base=/your-repo-name/

# Copy public assets
cp -r client/public/* docs/
```

## GitHub Pages Settings
1. Go to your repository → Settings → Pages
2. Set source to "Deploy from a branch"
3. Select "main" branch and "/docs" folder
4. Save

## Important Notes
- All your images and assets in `client/public/` will be copied to the docs folder
- The base path is automatically set based on your repository name
- GitHub Pages serves from the `docs` folder
- Make sure to push the `docs` folder to your repository

## File Structure After Build
```
docs/
├── index.html
├── assets/
│   ├── profile.jpg (your photo)
│   ├── featured-projects.png (your icon)
│   └── ... (other assets)
├── icons/
│   └── ... (project icons)
└── ... (built files)
```

## Troubleshooting
- If only README shows: Make sure the `docs` folder is committed and pushed
- If assets don't load: Check the base path matches your repository name
- If site doesn't work: Check browser console for errors and verify all paths are correct
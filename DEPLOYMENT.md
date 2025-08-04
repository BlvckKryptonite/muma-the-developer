# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

### Setup:
1. Push your code to a GitHub repository
2. Go to your repository settings → Pages
3. Set source to "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to main

### Repository Name:
No repository-specific configuration needed - the build process creates a static site that works with any repository name.

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
- **White screen issue**: Fixed! Asset paths are now relative (./assets/) instead of absolute (/assets/)
- If only README shows: Make sure the `docs` folder is committed and pushed
- If assets don't load: Rebuild using the updated scripts - they automatically fix path issues
- If site doesn't work: Check browser console for errors and verify all paths are correct

## Quick Fix for White Screen
The white screen was caused by absolute asset paths. The updated build process automatically converts:
- `/assets/file.js` → `./assets/file.js`
- `/assets/file.css` → `./assets/file.css`

This makes your site work on GitHub Pages regardless of repository name.
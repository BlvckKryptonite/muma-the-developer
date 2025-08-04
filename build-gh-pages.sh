#!/bin/bash

# Build for GitHub Pages
echo "Building for GitHub Pages..."

# Clean up previous build
rm -rf docs

# Build the Vite app (this creates dist/public)
npm run build

# Copy the built files to docs directory for GitHub Pages
cp -r dist/public docs

echo "Build complete! Files are ready in the 'docs' directory."
echo "Make sure to:"
echo "1. Replace 'your-repo-name' in this script with your actual GitHub repository name"
echo "2. Push these files to your main branch"
echo "3. Enable GitHub Pages in your repository settings, set source to 'Deploy from a branch' and select 'main' branch and '/docs' folder"
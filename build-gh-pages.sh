#!/bin/bash

# Build for GitHub Pages
echo "Building for GitHub Pages..."

# Create docs directory (GitHub Pages will serve from here)
rm -rf docs
mkdir -p docs

# Build the Vite app with the correct base path
# Replace 'your-repo-name' with your actual GitHub repository name
npx vite build --outDir docs --base=/your-repo-name/

# Copy additional assets if needed
if [ -d "client/public" ]; then
    cp -r client/public/* docs/
fi

echo "Build complete! Files are ready in the 'docs' directory."
echo "Make sure to:"
echo "1. Replace 'your-repo-name' in this script with your actual GitHub repository name"
echo "2. Push these files to your main branch"
echo "3. Enable GitHub Pages in your repository settings, set source to 'Deploy from a branch' and select 'main' branch and '/docs' folder"
const fs = require('fs');
const path = require('path');

// Define both URLs
const rootHomepage = 'https://clinton-fezeu.github.io';
const subdirHomepage = 'https://clinton-fezeu.github.io/my-portfolio';

// Get the target from the command line (e.g., "root" or "subdir")
const target = process.argv[2];
let homepage = rootHomepage;

if (target === 'subdir') {
  homepage = subdirHomepage;
}

// Read package.json
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update the homepage field
packageJson.homepage = homepage;

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated homepage to: ${homepage}`);

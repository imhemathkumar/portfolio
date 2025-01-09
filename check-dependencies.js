const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(process.cwd(), 'package.json');

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Dependencies:', packageJson.dependencies);
} catch (error) {
  console.error('Error reading package.json:', error);
}
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Verifying Villa Specification & Data Architecture ---');

const requiredFiles = [
  'Villa.txt',
  'public/Villa.txt',
  'public/llms.txt',
  'public/llms-full.txt',
  'src/data/villaData.ts',
  'src/data/propertyData.ts'
];

let allPassed = true;

for (const relPath of requiredFiles) {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`✓ ${relPath} (${stats.size} bytes)`);
  } else {
    console.error(`✗ Missing required file: ${relPath}`);
    allPassed = false;
  }
}

// Check key ground truth content in Villa.txt
const villaTxtContent = fs.readFileSync(path.join(rootDir, 'Villa.txt'), 'utf8');
const canonicalChecks = [
  'The Mukteshwar Bungalow',
  '263132',
  '+91 90278 44424',
  'The Himalayan Suite',
  'The Imperial Suite',
  'The Signature Himalayan',
  'The Veranda Lounge',
  'Dausapani, Kasialekh Village - Chaukhuta'
];

console.log('\n--- Checking Canonical Ground Truth in Villa.txt ---');
for (const check of canonicalChecks) {
  if (villaTxtContent.includes(check)) {
    console.log(`✓ Found canonical item: "${check}"`);
  } else {
    console.error(`✗ Missing canonical item: "${check}"`);
    allPassed = false;
  }
}

// Check llms.txt content
const llmsTxtContent = fs.readFileSync(path.join(rootDir, 'public/llms.txt'), 'utf8');
if (llmsTxtContent.includes('The Mukteshwar Bungalow') && llmsTxtContent.includes('SYSTEM DIRECTIVE')) {
  console.log('✓ public/llms.txt verified with System Directives');
} else {
  console.error('✗ public/llms.txt content check failed');
  allPassed = false;
}

if (!allPassed) {
  console.error('\nVerification FAILED');
  process.exit(1);
} else {
  console.log('\nALL CHECKS PASSED: Villa specification and ground-truth hub is 100% verified!\n');
}

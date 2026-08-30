import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function getFiles(dir) {
  const subdirs = await fs.promises.readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await fs.promises.stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

async function optimize() {
  console.log('Scanning images in:', imagesDir);
  const allFiles = await getFiles(imagesDir);
  const imageFiles = allFiles.filter(f => /\.(jpe?g|png)$/i.test(f));
  
  console.log(`Found ${imageFiles.length} images to optimize...`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const origStat = await fs.promises.stat(file);
    totalOriginal += origStat.size;
    
    const tempFile = file + '.tmp';
    
    await sharp(file)
      .resize({ width: 2048, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tempFile);
      
    await fs.promises.unlink(file);
    await fs.promises.rename(tempFile, file);
    
    const newStat = await fs.promises.stat(file);
    totalOptimized += newStat.size;
    
    console.log(`Optimized ${path.basename(file)}: ${(origStat.size / 1024 / 1024).toFixed(2)}MB -> ${(newStat.size / 1024).toFixed(1)}KB`);
  }

  console.log(`\nOptimization Complete!`);
  console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Bandwidth saved: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});

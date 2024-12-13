import fs from 'fs';
import path from 'path';

export const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const moveFile = (sourcePath, targetPath) => {
  if (fs.existsSync(sourcePath)) {
    const targetDir = path.dirname(targetPath);
    ensureDirectoryExists(targetDir);
    fs.renameSync(sourcePath, targetPath);
  }
};
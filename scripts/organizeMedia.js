import { ensureDirectoryExists, moveFile } from '../src/utils/fileSystem.js';
import path from 'path';

const mediaDir = path.join(process.cwd(), 'public', 'media');
const videosDir = path.join(mediaDir, 'videos');

// Ensure videos directory exists
ensureDirectoryExists(videosDir);

// Move video files
const videoFiles = [
  'sebbedj partyfilm.mp4',
  'sebbedj setup.mp4'
];

videoFiles.forEach(filename => {
  const sourcePath = path.join(mediaDir, 'images', 'video', filename);
  const targetPath = path.join(videosDir, filename);
  moveFile(sourcePath, targetPath);
});

console.log('Video files organized successfully!');
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const mediaDir = path.join(__dirname, "public", "media", "images");

const targets = [
  // Partners (max width 240 for rectangular, 160 for square-ish)
  { relPath: "partners/burger-king.webp", width: 160 },
  { relPath: "partners/wing-stop.webp", width: 240 },
  { relPath: "partners/bowie.webp", width: 160 },
  { relPath: "partners/the-halal-guys.webp", width: 160 },
  { relPath: "partners/amazon.webp", width: 240 },
  { relPath: "partners/ruth-chris.webp", width: 240 },
  { relPath: "partners/subway.webp", width: 240 },
  { relPath: "partners/hilton.webp", width: 160 },
  { relPath: "partners/ihg-hotels.webp", width: 160 },
  { relPath: "partners/omni.webp", width: 160 },
  
  // Emblems (max width 160)
  { relPath: "emblem1.webp", width: 160 },
  { relPath: "emblem2.webp", width: 160 },
  { relPath: "emblem3.webp", width: 160 },
  
  // Logos (max width 240)
  { relPath: "logo.webp", width: 240 },
  { relPath: "logowhite.webp", width: 240 }
];

async function run() {
  console.log("Starting logo and emblem resizing process...");

  for (const target of targets) {
    const filePath = path.join(mediaDir, target.relPath);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    const tempPath = filePath + ".temp.webp";
    const stats = fs.statSync(filePath);

    try {
      const buffer = fs.readFileSync(filePath);
      const outputBuffer = await sharp(buffer)
        .resize({ width: target.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      fs.writeFileSync(filePath, outputBuffer);

      const newStats = fs.statSync(filePath);
      console.log(`Optimized ${target.relPath}:`);
      console.log(`  Size: ${(newStats.size / 1024).toFixed(1)} KB (was ${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error resizing ${target.relPath}:`, err);
    }
  }

  console.log("Logo and emblem resizing completed successfully.");
}

run().catch(console.error);

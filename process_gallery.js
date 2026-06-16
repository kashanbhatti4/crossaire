const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = "C:\\Users\\pc\\Downloads\\Images";
const destDir = path.join(__dirname, "public", "media", "images", "gallery");

const categoryMap = {
  "grease-trap-cleaning": "Grease Trap Cleaning",
  "kitchen-exhaust-duct-repair-&-access-panel-installation": "Kitchen Exhaust Duct Repair & Access Panel Installation",
  "kitchen-exhaust-fan-installation": "Kitchen Exhaust Fan Installation",
  "kitchen-exhaust-fan-repairs": "Kitchen Exhaust Fan Repairs",
  "kitchen-hood-cleaning": "Kitchen Hood Cleaning",
  "kitchen-hood-inspections": "Kitchen Hood Inspections",
  "kitchen-hood-startups-and-commissioning": "Kitchen Hood Startups and Commissioning",
  "pollution-control-systems-maintenance": "Pollution Control Systems Maintenance",
  "restaurant-hood-filter-cleaning-&-exchange": "Restaurant Hood Filter Cleaning & Exchange",
  "restaurant-kitchen-exhaust-system-cleaning": "Restaurant Kitchen Exhaust System Cleaning",
  "roof-grease-containment-systems-installation": "Roof Grease Containment Systems Installations"
};

async function processGallery() {
  console.log("Starting gallery processing...");
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created destination directory: ${destDir}`);
  }

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith(".jpg") || f.endsWith(".png") || f.endsWith(".jpeg"));
  console.log(`Found ${files.length} images to process.`);

  const items = [];
  let id = 1;

  for (const file of files) {
    const filePath = path.join(srcDir, file);
    
    // Determine category from filename prefix
    let category = "Kitchen Hood Cleaning"; // default fallback
    let matchedPrefix = "";
    
    for (const prefix of Object.keys(categoryMap)) {
      if (file.toLowerCase().startsWith(prefix)) {
        category = categoryMap[prefix];
        matchedPrefix = prefix;
        break;
      }
    }

    const outputFilename = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(destDir, outputFilename);

    try {
      const buffer = fs.readFileSync(filePath);
      const outputBuffer = await sharp(buffer)
        .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      fs.writeFileSync(outputPath, outputBuffer);
      
      const metadata = await sharp(outputPath).metadata();
      
      items.push({
        id: id++,
        image: `/media/images/gallery/${outputFilename}`,
        category: category,
        width: metadata.width,
        height: metadata.height
      });
      
      console.log(`Processed: ${file} -> ${outputFilename} (${metadata.width}x${metadata.height})`);
    } catch (err) {
      console.error(`Error processing file ${file}:`, err);
    }
  }

  // Output JSON payload to console and file
  const jsonOutput = JSON.stringify(items, null, 2);
  const dataFilePath = path.join(__dirname, "gallery_data.json");
  fs.writeFileSync(dataFilePath, jsonOutput, "utf8");
  
  console.log("\nGallery processing completed successfully!");
  console.log(`Data JSON saved to: ${dataFilePath}`);
}

processGallery().catch(console.error);

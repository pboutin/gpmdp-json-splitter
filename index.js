const fs = require('fs');
const path = require('path');
const https = require('https');

const GPMDP_JSON = process.env.GPMDP_JSON;
const OUTPUT_DIR = './';
const OUTPUT_FILE = `${OUTPUT_DIR}/current_song.txt`;

if (!GPMDP_JSON) {
  console.error(`You must declare "GPMDP_JSON" in your env.`);
  process.exit();
}

jsonFilePath = path.normalize(GPMDP_JSON);

let timeoutRef;

fs.watchFile(jsonFilePath, function() {
  const {song: {title, artist}} = JSON.parse(fs.readFileSync(jsonFilePath));
  const output = `${title} - ${artist}`
  console.log(`Updating : ${output}`);
  fs.writeFileSync(OUTPUT_FILE, output);

  clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => fs.writeFileSync(OUTPUT_FILE, ''), 10000);
});

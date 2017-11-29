const fs = require('fs');
const path = require('path');
const https = require('https');

const GPMDP_JSON = process.env.GPMDP_JSON;
const OUTPUT_DIR = './';

if (!GPMDP_JSON) {
  console.error(`You must declare "GPMDP_JSON" in your env.`);
  process.exit();
}

jsonFilePath = path.normalize(GPMDP_JSON);

fs.watchFile(jsonFilePath, function() {
  const {song: {title, artist}} = JSON.parse(fs.readFileSync(jsonFilePath));
  const output = `${title} - ${artist}`
  console.log(`Updating : ${output}`);
  fs.writeFileSync(`${OUTPUT_DIR}/current_song.txt`, output);
});

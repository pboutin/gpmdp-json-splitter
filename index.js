const fs = require('fs');
const path = require('path');
const https = require('https');

const GPMDP_JSON = process.env.GPMDP_JSON;

const OUTPUT_DIR = './dist';

if (!GPMDP_JSON) {
  console.error(`You must declare "GPMDP_INPUT" in your env.`);
  process.exit();
}

jsonFilePath = path.normalize(GPMDP_JSON);

fs.watchFile(jsonFilePath, function() {
  const {title, artist, album} = JSON.parse(fs.readFileSync(jsonFilePath)).song;

  console.log(`Updating : ${title} - ${artist} - ${album}`);

  fs.writeFileSync(`${OUTPUT_DIR}/song_title.txt`, title);
  fs.writeFileSync(`${OUTPUT_DIR}/song_artist.txt`, artist);
  fs.writeFileSync(`${OUTPUT_DIR}/song_album.txt`, album);
});

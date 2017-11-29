# gpmdp-obs-formatter

The main idea here is to take the JSON data from (Google Play Music Desktop Player)[https://www.googleplaymusicdesktopplayer.com/] and extract the current song information into individual files that can be used by (OBS)[https://obsproject.com].

To run it, you need to specify the path to the JSON file into your env.

`export GPMDP_JSON=/path/to/the/file`

To locate yours, read this documentation : https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-/blob/master/docs/PlaybackAPI.md

And finally, run it

`node index.js`

There `current_song.txt` will be kept updated while the script runs.

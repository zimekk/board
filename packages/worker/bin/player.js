#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const file = path.resolve(process.argv[2]);
const player = require("play-sound")((opts = {}));

console.info(`cwd: ${process.cwd()}`);
console.info(player.players);

if (fs.existsSync(file)) {
  // var lame = require('lame');
  // var Speaker = require('speaker');

  // fs.createReadStream(file)
  //   .pipe(new lame.Decoder())
  //   .on('format', function (format) {
  //     this.pipe(new Speaker(format));
  //   });

  console.info(`Playing (${player.player}): ${file}`);

  // $ mplayer foo.mp3
  player.play(file, function (err) {
    if (err) throw err;
  });
} else {
  console.error("File not found!");
}

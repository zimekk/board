#!/usr/bin/env ts-node-dev

require("../bin").whisper.apply(null, process.argv.slice(2));

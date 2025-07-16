#!/usr/bin/env node

require("../bin").remote.apply(null, process.argv.slice(2));

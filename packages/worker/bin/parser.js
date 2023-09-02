#!/usr/bin/env node

require("../bin").parser.apply(null, process.argv.slice(2));

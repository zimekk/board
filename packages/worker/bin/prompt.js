#!/usr/bin/env node --import 'data:text/javascript,import{register}from\"node:module\";import{pathToFileURL}from\"node:url\";register(\"ts-node/esm\",pathToFileURL(\"./\"));'

// import { register } from "node:module";
// import { pathToFileURL } from "node:url";

// register("ts-node/esm", pathToFileURL("./"));

(await import("../src/prompt/index.ts")).prompt();

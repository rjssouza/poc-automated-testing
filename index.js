#!/usr/bin/env node
import cucumber from '@cucumber/cucumber/lib/cli/run.js'
import { config } from 'dotenv'
const { parsed } = config();

console.log(JSON.stringify(parsed));
console.log('Process env')
console.log(JSON.stringify(process.env));

global.testing = { env: process.env };

cucumber();
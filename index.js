#!/usr/bin/env node
import cucumber from '@cucumber/cucumber/lib/cli/run.js'
import { config } from 'dotenv'
config();

console.log(JSON.stringify(process.env));

global.testing = { env: process.env };

cucumber();
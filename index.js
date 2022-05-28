#!/usr/bin/env node
import cucumber from '@cucumber/cucumber/lib/cli/run.js'
import { config } from 'dotenv'
const { parsed } = config();

global.testing = { env: parsed };

cucumber();
#!/usr/bin/env node

import { Command } from 'commander'

const message = 'We have done it!'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')

program.parse()

console.log(message)

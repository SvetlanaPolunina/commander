#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')

program.parse()

const [path1, path2] = program.args
console.log(`format: ${program.opts().format ?? 'unknown'}`)
console.log(`filepaths: ${path1} ${path2}`)

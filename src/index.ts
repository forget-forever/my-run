#!/usr/bin/env node
require('module-alias/register')
require('tsconfig-paths/register')
import chalk from "chalk";
import { program } from "commander";
import { resolve } from "path";
import addShell from "./addShell";

program.version(require("@root/package.json").version, '-v --version').usage('<command> <command> [name]');

program.command('run [name]').description('run loading....').action((name) => {
  
});

program.command('addStr [str] [name]').action((str, name) => {
  addShell(str, name)
})

// program.command('add [str]')
//   .option('-dir')
//   .action((str, option) => {
//     console.log('aaa')
//     console.log({str, option})
//   })

program.parse(process.argv);
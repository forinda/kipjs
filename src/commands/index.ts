import { Command } from "commander";
// import chalk from "chalk";
import { kipJsHelp } from "./help";
import { kipJsVersion } from "./version";

const program = new Command()

program
    .name('--version')
    .description('Display version text')
    .action(kipJsVersion)
program
    .name('--help')
    .description('Display help text')
    .action(kipJsHelp)

program.parse()
import  chalk from "chalk"

export function kipJsHelp(){
    const helpText = `${chalk.yellowBright.bold('KipJS')} - CLI
    --help - Display help for this usage
    --version, -v, version - Display package version`
    console.log(helpText);
    
}
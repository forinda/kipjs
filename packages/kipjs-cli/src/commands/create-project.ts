import { Command } from "commander"


type Props={
    program:Command
}

export function createKipJsProject({program}:Props){
    program.name('create-project').summary('Create project').description('A command to bootstrap KipJS project')
}
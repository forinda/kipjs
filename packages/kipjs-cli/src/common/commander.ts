import { Command } from "commander"

export class KipJsCommand extends Command {
    private _program: Command
    constructor(name: string) {
        super(name)
        this._program = new Command(name)
    }

    get program() {
        return this._program
    }

}
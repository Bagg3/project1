import { MongoClass } from "./mongo.js";
import { VoiceHandlerClass } from "./voice.js";
import { makeRandomLizard, makeFieCommand, makeDotBotCommand, makeSmartcastCommand, makePandaCommand, makePrintCommands, makeBonkCommand, } from "./funtions.js";
export class Commands {
    constructor(c) {
        this.c = c;
        this.voiceHandler = new VoiceHandlerClass();
        this.mongo = new MongoClass();
        this.botCommandsMap = new Map([
            ["bagge", makeBonkCommand(c, this.voiceHandler)],
            ["ea", makeRandomLizard(c, this.voiceHandler)],
            ["smartcast", makeSmartcastCommand],
            ["e", makePandaCommand()],
            ["fie", makeFieCommand],
            [".bot", makeDotBotCommand],
            //["!leaderboard", makePrintCommands(this.mongo)],
        ]);
        this.botCommandsMap.set("!leaderboard", makePrintCommands(this.mongo));
    }
    // Function to return the map
    getBotCommandsMap() {
        return this.botCommandsMap;
    }
}
//# sourceMappingURL=commands.js.map
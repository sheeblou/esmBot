const Command = require("./command.js");
const soundPlayer = require("../utils/soundplayer.js");

class MusicCommand extends Command {
  constructor(client, cluster, ipc, message, args, content) {
    super(client, cluster, ipc, message, args, content);
    this.connection = soundPlayer.players.get(message.channel.guild.id);
  }

  static requires = ["sound"];
}

module.exports = MusicCommand;
const ImageCommand = require("../../classes/imageCommand.js");

class SpeedCommand extends ImageCommand {
  params(args) {
    const speed = parseInt(args[0]);
    return {
      speed: isNaN(speed) ? 2 : speed
    };
  }

  static description = "Makes an image sequence faster";
  static aliases = ["speedup", "fast", "gifspeed", "faster"];
  static arguments = ["{multiplier}"];

  static requiresGIF = true;
  static noImage = "You need to provide an image to speed up!";
  static command = "speed";
}

module.exports = SpeedCommand;
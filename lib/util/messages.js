var colors = require('colors');

module.exports = function(projectName) {
  return {
    hello: "Thanks for using Plumage for %s!",
    folderExists: "\nThere's already a folder named " + projectName.cyan + " here. Please use a different name or delete that folder.\n",
    downloadingTemplate: "\nDownloading the project template...".cyan,
    gitCloneError: "There was an issue running " + "git clone ".cyan,
    installingDependencies: "\nDone downloading!".green + "\n\nInstalling dependencies...".cyan + "\n",
    gitCloneSuccess: " \u2713 New project folder created.".green,
    installSuccess: "\nYou're all set!\n".cyan,
    installFail: "\nThere were some problems during the installation.\n".cyan,
    npmSuccess: " \u2713 Node modules installed.".green,
    npmFail: " \u2717 Node modules not installed.".red + " Try running " + "npm install".cyan + " manually.",
    installSuccessFinal: "Done!\n",
    installFailFinal: "\nWhoops something went wrong\n"
  }
}

module.exports.noRoot = [
  'Slow down there, friend!',
  '------------------------',
  'Running this installer as an administrator can cause problems.',
  'Try running this command again without "sudo" or administrator rights.'
];

module.exports.gitNotInstalled = "\nYou need Git installed to get started. Download it here: " + "http://git-scm.com/downloads".cyan + "\n";

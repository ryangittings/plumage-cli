var fs = require('fs');
var path = require('path');

module.exports = function(options) {
  var questions = [];

  questions.push({
    type: 'input',
    name: 'directory',
    message: 'What\'s the project called? (no spaces)',
    validate: function(input) {
      var folder = path.join(process.cwd(), input);

      if (fs.existsSync(folder)) {
        return 'There\'s already a folder with that name in this directory.';
      }
      if (input.indexOf(" ") != -1) {
        return "The project name should not contain any spaces.";
      }
      return true;
    },
    when: function () {
      if (!options.directory)
        return true;
    }
  });

  return questions;
}

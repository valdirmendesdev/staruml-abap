const { handleGenerate } = require('./handlers')

function init() {
  app.commands.register('abap:generate', handleGenerate)
}

exports.init = init
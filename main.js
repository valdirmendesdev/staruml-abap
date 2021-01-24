function handleShowMessage() {
  window.alert('Hello, world!')
}

function init() {
  app.commands.register('abap:generate', handleShowMessage)
}

exports.init = init
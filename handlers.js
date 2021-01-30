/**
 * Get the model
 * Get the path directory
 * Generate Files
 */
exports.handleGenerate = async () => {

  const { buttonId: clickedButton, returnValue: baseModel } = await app.elementPickerDialog.showDialog('Select a base model to generate codes', null, type.UMLPackage);

  if (clickedButton !== 'ok') {
    return
  }

  if (!baseModel) {
    app.dialogs.showAlertDialog('You must select a base model!');
    return
  }

  const filesPath = app.dialogs.showOpenDialog('Select a folder where generated codes to be located', null, null, { properties: ['openDirectory'] });
  if (!filesPath) {
    app.dialogs.showAlertDialog('You must select a folder for the files generation!');
    return
  }

}
/**
 * Get the model
 * Get the path directory
 * Generate Files
 */
exports.handleGenerate = async () => {

  const { buttonId, returnValue: base } = await app.elementPickerDialog.showDialog('Select a base model to generate codes', null, type.UMLPackage);

}
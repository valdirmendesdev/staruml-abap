const AbapClass = require('../../generators/abapClass.js')

describe('ABAP Class generator', () => {

  it('should generates an ABAP class basic structure', () => {
    const expectedResult = `CLASS test DEFINITION
.
    PUBLIC SECTION.
    PROTECTED SECTION.
    PRIVATE SECTION.
ENDCLASS.

CLASS test IMPLEMENTATION.
ENDCLASS.`;

    const sut = new AbapClass('test');
    const generatedCode = sut.generate();
    expect(generatedCode).toMatch(expectedResult);
  })

})
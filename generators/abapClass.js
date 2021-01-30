class AbapClass {
  constructor(classname) {
    this.classname = classname;
  }

  generate() {
    const lines = [];
    lines.push(`CLASS ${this.classname.trim()} DEFINITION`);
    lines.push('.');
    lines.push('    PUBLIC SECTION.');
    lines.push('    PROTECTED SECTION.');
    lines.push('    PRIVATE SECTION.');
    lines.push('ENDCLASS.\n');
    lines.push(`CLASS ${this.classname.trim()} IMPLEMENTATION.`);
    lines.push(`ENDCLASS.`);

    return lines.join('\n')
  }
}

module.exports = AbapClass;
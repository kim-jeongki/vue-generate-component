/**
 * DirectiveTpl
 */
class DirectiveTpl {
  /**
   *
   * @param name - the directive name
   */
  constructor( name, isDir ) {
    this.type = 'directive';
    this.name = name;
    this.isDir = isDir;
  }
}

export default DirectiveTpl
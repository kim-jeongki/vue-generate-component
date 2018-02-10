/**
 * FilterTpl
 */
class FilterTpl {
  /**
   *
   * @param name - the filter name
   */
  constructor( name, isDir ) {
    this.type = 'filter';
    this.name = name;
    this.isDir = isDir;
  }
}

export default FilterTpl
import ComponentTpl from './templates/ComponentTpl';
import DirectiveTpl from './templates/DirectiveTpl';
import FilterTpl from './templates/FilterTpl';
import SingleTpl from './templates/SingleTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {

    /**
     * Generate Vue 2 component
     */
    if( cli.component ) {
   
      return new TemplateGenerator(new ComponentTpl(cli.component));
    }

    /**
     * Generate Vue 2 directive
     */
    if( cli.directive ) {
      return new TemplateGenerator(new DirectiveTpl(cli.directive));
    }

    /**
     * Generate Vue 2 filter
     */
    if( cli.filter ) {
      return new TemplateGenerator(new FilterTpl(cli.filter));
    }

    /**
     * Generate Vue 2 single file component
     */
    if( cli.single ) {
      return new TemplateGenerator(new SingleTpl(cli.single, cli.folder));
    }

  }

}

export default TemplateFactory

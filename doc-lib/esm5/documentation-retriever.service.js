/**
 * @fileoverview added by tsickle
 * Generated from: documentation-retriever.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
/**
 * Represents the inputClass/outputClass properties of a component in compodoc generated documentation
 * @record
 */
export function ApiParameters() {}
if (false) {
  /**
   * Represents name of input/output property of a component
   * @type {?}
   */
  ApiParameters.prototype.name;
  /**
   * Represents Data type of input/output property
   * @type {?}
   */
  ApiParameters.prototype.type;
  /**
   * Represents JS doc of input/output property
   * @type {?}
   */
  ApiParameters.prototype.description;
}
/**
 * Service exposing methods for retrieving the documentation for a given component.
 * @abstract
 */
var /**
 * Service exposing methods for retrieving the documentation for a given component.
 * @abstract
 */
DocumentationRetrieverService = /** @class */ (function() {
  function DocumentationRetrieverService() {}
  return DocumentationRetrieverService;
})();
/**
 * Service exposing methods for retrieving the documentation for a given component.
 * @abstract
 */
export { DocumentationRetrieverService };
if (false) {
  /**
   * Returns the overview help documentation for the provided component
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getOverview = function(component) {};
  /**
   * Returns the typescript source code for the provided component
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getTypescriptSourceCode = function(component) {};
  /**
   * Returns the HTML source code for the provided component
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getHtmlSourceCode = function(component) {};
  /**
   * Returns the CSS source code for the provided component
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getCssSourceCode = function(component) {};
  /**
   * Returns the inputsClass property value of the provided component from the Compodoc generated JSON
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getInputParameters = function(component) {};
  /**
   * Returns the outputsClass property value of the provided component from the Compodoc generated JSON
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getOutputParameters = function(component) {};
  /**
   * The raw CompoDoc component
   * @abstract
   * @param {?} component
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getComponent = function(component) {};
  /**
   * The raw Compodoc module object
   * @abstract
   * @param {?} moduleName
   * @return {?}
   */
  DocumentationRetrieverService.prototype.getModule = function(moduleName) {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdBLG1DQWFDOzs7Ozs7SUFURyw2QkFBYTs7Ozs7SUFJYiw2QkFBYTs7Ozs7SUFJYixvQ0FBb0I7Ozs7OztBQU14Qjs7Ozs7SUFBQTtJQW9DQSxDQUFDO0lBQUQsb0NBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDOzs7Ozs7Ozs7Ozs7O0lBaENHLCtFQUEwRDs7Ozs7OztJQUsxRCwyRkFBc0U7Ozs7Ozs7SUFLdEUscUZBQWdFOzs7Ozs7O0lBS2hFLG9GQUErRDs7Ozs7OztJQUsvRCxzRkFBMEU7Ozs7Ozs7SUFLMUUsdUZBQTJFOzs7Ozs7O0lBRzNFLGdGQUFzRTs7Ozs7OztJQUd0RSw4RUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvZG9jQ29tcG9uZW50LCBDb21wb2RvY01vZHVsZSB9IGZyb20gJy4vY29tcG9kb2MvY29tcG9kb2Mtc2NoZW1hJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBpbnB1dENsYXNzL291dHB1dENsYXNzIHByb3BlcnRpZXMgb2YgYSBjb21wb25lbnQgaW4gY29tcG9kb2MgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGlQYXJhbWV0ZXJzIHtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIG5hbWUgb2YgaW5wdXQvb3V0cHV0IHByb3BlcnR5IG9mIGEgY29tcG9uZW50XG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgRGF0YSB0eXBlIG9mIGlucHV0L291dHB1dCBwcm9wZXJ0eVxuICAgICAqL1xuICAgIHR5cGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIEpTIGRvYyBvZiBpbnB1dC9vdXRwdXQgcHJvcGVydHlcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZXhwb3NpbmcgbWV0aG9kcyBmb3IgcmV0cmlldmluZyB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgYSBnaXZlbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb3ZlcnZpZXcgaGVscCBkb2N1bWVudGF0aW9uIGZvciB0aGUgcHJvdmlkZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldE92ZXJ2aWV3KGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdHlwZXNjcmlwdCBzb3VyY2UgY29kZSBmb3IgdGhlIHByb3ZpZGVkIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRUeXBlc2NyaXB0U291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIEhUTUwgc291cmNlIGNvZGUgZm9yIHRoZSBwcm92aWRlZCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0SHRtbFNvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBDU1Mgc291cmNlIGNvZGUgZm9yIHRoZSBwcm92aWRlZCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0Q3NzU291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGlucHV0c0NsYXNzIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBwcm92aWRlZCBjb21wb25lbnQgZnJvbSB0aGUgQ29tcG9kb2MgZ2VuZXJhdGVkIEpTT05cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0SW5wdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb3V0cHV0c0NsYXNzIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBwcm92aWRlZCBjb21wb25lbnQgZnJvbSB0aGUgQ29tcG9kb2MgZ2VuZXJhdGVkIEpTT05cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0T3V0cHV0UGFyYW1ldGVycyhjb21wb25lbnQ6IFR5cGU8YW55Pik6IEFwaVBhcmFtZXRlcnNbXTtcblxuICAgIC8qKiBUaGUgcmF3IENvbXBvRG9jIGNvbXBvbmVudCAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pOiBDb21wb2RvY0NvbXBvbmVudDtcblxuICAgIC8qKiBUaGUgcmF3IENvbXBvZG9jIG1vZHVsZSBvYmplY3QgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW9kdWxlKG1vZHVsZU5hbWU6IHN0cmluZyk6IENvbXBvZG9jTW9kdWxlO1xufVxuIl19

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
export function ApiParameters() { }
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
export class DocumentationRetrieverService {
}
if (false) {
    /**
     * Returns the overview help documentation for the provided component
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getOverview = function (component) { };
    /**
     * Returns the typescript source code for the provided component
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getTypescriptSourceCode = function (component) { };
    /**
     * Returns the HTML source code for the provided component
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getHtmlSourceCode = function (component) { };
    /**
     * Returns the CSS source code for the provided component
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getCssSourceCode = function (component) { };
    /**
     * Returns the inputsClass property value of the provided component from the Compodoc generated JSON
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getInputParameters = function (component) { };
    /**
     * Returns the outputsClass property value of the provided component from the Compodoc generated JSON
     * @abstract
     * @param {?} component
     * @return {?}
     */
    DocumentationRetrieverService.prototype.getOutputParameters = function (component) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLG1DQWFDOzs7Ozs7SUFURyw2QkFBYTs7Ozs7SUFJYiw2QkFBYTs7Ozs7SUFJYixvQ0FBb0I7Ozs7OztBQU14QixNQUFNLE9BQWdCLDZCQUE2QjtDQThCbEQ7Ozs7Ozs7O0lBMUJHLCtFQUEwRDs7Ozs7OztJQUsxRCwyRkFBc0U7Ozs7Ozs7SUFLdEUscUZBQWdFOzs7Ozs7O0lBS2hFLG9GQUErRDs7Ozs7OztJQUsvRCxzRkFBMEU7Ozs7Ozs7SUFLMUUsdUZBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgaW5wdXRDbGFzcy9vdXRwdXRDbGFzcyBwcm9wZXJ0aWVzIG9mIGEgY29tcG9uZW50IGluIGNvbXBvZG9jIGdlbmVyYXRlZCBkb2N1bWVudGF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBpUGFyYW1ldGVycyB7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBuYW1lIG9mIGlucHV0L291dHB1dCBwcm9wZXJ0eSBvZiBhIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIERhdGEgdHlwZSBvZiBpbnB1dC9vdXRwdXQgcHJvcGVydHlcbiAgICAgKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBKUyBkb2Mgb2YgaW5wdXQvb3V0cHV0IHByb3BlcnR5XG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIGV4cG9zaW5nIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgdGhlIGRvY3VtZW50YXRpb24gZm9yIGEgZ2l2ZW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG92ZXJ2aWV3IGhlbHAgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIHByb3ZpZGVkIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRPdmVydmlldyhjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHR5cGVzY3JpcHQgc291cmNlIGNvZGUgZm9yIHRoZSBwcm92aWRlZCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0VHlwZXNjcmlwdFNvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBIVE1MIHNvdXJjZSBjb2RlIGZvciB0aGUgcHJvdmlkZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldEh0bWxTb3VyY2VDb2RlKGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ1NTIHNvdXJjZSBjb2RlIGZvciB0aGUgcHJvdmlkZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldENzc1NvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbnB1dHNDbGFzcyBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIENvbXBvZG9jIGdlbmVyYXRlZCBKU09OXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldElucHV0UGFyYW1ldGVycyhjb21wb25lbnQ6IFR5cGU8YW55Pik6IEFwaVBhcmFtZXRlcnNbXTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG91dHB1dHNDbGFzcyBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIENvbXBvZG9jIGdlbmVyYXRlZCBKU09OXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldE91dHB1dFBhcmFtZXRlcnMoY29tcG9uZW50OiBUeXBlPGFueT4pOiBBcGlQYXJhbWV0ZXJzW107XG59XG4iXX0=
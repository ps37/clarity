/**
 * @fileoverview added by tsickle
 * Generated from: documentation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { DocumentationContainerComponent } from './documentation-container/documentation-container.component';
/**
 * Represents each entry in {\@link DocumentationEntry.examples}, that is an examples that shows a particular usage of a components
 * @record
 */
export function ExampleEntry() { }
if (false) {
    /**
     * Example component written to show usage of the component
     * @type {?}
     */
    ExampleEntry.prototype.component;
    /**
     * The component for which this example is written
     * @type {?}
     */
    ExampleEntry.prototype.forComponent;
    /**
     * The title of the section under which this example will be placed
     * @type {?}
     */
    ExampleEntry.prototype.title;
}
/**
 * Represents a component being showcased, along with the examples for it.
 * @record
 */
export function DocumentationEntry() { }
if (false) {
    /**
     * The display name that is going to be used for the component
     * @type {?}
     */
    DocumentationEntry.prototype.displayName;
    /**
     * The segment to be used in routing when displaying the documentation for this component.
     * @type {?}
     */
    DocumentationEntry.prototype.urlSegment;
    /**
     * The component for which the documentation is going to be generated
     * @type {?}
     */
    DocumentationEntry.prototype.component;
    /**
     * A list of examples that will show how the component may be used
     * @type {?|undefined}
     */
    DocumentationEntry.prototype.examples;
}
/**
 * To register a documentation entry as value for corresponding component
 * @type {?}
 */
var documentationEntryMap = new Map();
/**
 * Used in {\@link Documentation.registerDocumentationEntry} method to check if the input is a valid {\@link DocumentationEntry}
 * @param {?} documentationParams
 * @return {?}
 */
function validateDocumentationMetadata(documentationParams) {
    if (!documentationParams.urlSegment) {
        throw new Error('urlSegment should be specified and not empty');
    }
    /** @type {?} */
    var documentationEntry = Documentation.getAllEntries().find((/**
     * @param {?} entry
     * @return {?}
     */
    function (entry) { return entry.urlSegment === documentationParams.urlSegment; }));
    if (documentationEntry) {
        throw new Error("The specified urlSegment '" + documentationParams.urlSegment + "' for '" + documentationParams.displayName + "'" +
            ("was already defined for '" + documentationEntry.displayName + "'"));
    }
    if (!documentationParams.displayName) {
        throw new Error('displayName should be specified and not empty');
    }
}
/** @type {?} */
export var Documentation = {
    /**
     * Returns all the documentation entries registered into the framework
     */
    getAllEntries: /**
     * Returns all the documentation entries registered into the framework
     * @return {?}
     */
    function () {
        return Array.from(documentationEntryMap.values());
    },
    /**
     * Returns angular routes used when displaying the documentation/examples for the components.
     */
    getRoutes: /**
     * Returns angular routes used when displaying the documentation/examples for the components.
     * @return {?}
     */
    function () {
        return Documentation.getAllEntries().map((/**
         * @param {?} documentationEntry
         * @return {?}
         */
        function (documentationEntry) { return ({
            path: documentationEntry.urlSegment,
            component: DocumentationContainerComponent,
            data: { documentationEntry: documentationEntry },
        }); }));
    },
    /**
     * Used for manual registration of documentation entry with a corresponding component.
     */
    registerDocumentationEntry: /**
     * Used for manual registration of documentation entry with a corresponding component.
     * @param {?} documentationEntry
     * @return {?}
     */
    function (documentationEntry) {
        validateDocumentationMetadata(documentationEntry);
        documentationEntryMap.set(documentationEntry.component, documentationEntry);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7O0FBTTlHLGtDQWVDOzs7Ozs7SUFYRyxpQ0FBeUI7Ozs7O0lBS3pCLG9DQUE0Qjs7Ozs7SUFLNUIsNkJBQWM7Ozs7OztBQU1sQix3Q0FvQkM7Ozs7OztJQWhCRyx5Q0FBb0I7Ozs7O0lBS3BCLHdDQUFtQjs7Ozs7SUFLbkIsdUNBQXlCOzs7OztJQUt6QixzQ0FBMEI7Ozs7OztJQU14QixxQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBcUM7Ozs7OztBQUsxRSxTQUFTLDZCQUE2QixDQUFDLG1CQUF1QztJQUMxRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTs7UUFFSyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSTs7OztJQUN6RCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLEtBQUssbUJBQW1CLENBQUMsVUFBVSxFQUFuRCxDQUFtRCxFQUMvRDtJQUNELElBQUksa0JBQWtCLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FDWCwrQkFBNkIsbUJBQW1CLENBQUMsVUFBVSxlQUFVLG1CQUFtQixDQUFDLFdBQVcsTUFBRzthQUNuRyw4QkFBNEIsa0JBQWtCLENBQUMsV0FBVyxNQUFHLENBQUEsQ0FDcEUsQ0FBQztLQUNMO0lBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7S0FDcEU7QUFDTCxDQUFDOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBQUc7SUFDekI7O09BRUc7SUFDSCxhQUFhOzs7O0lBQWI7UUFDSSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTOzs7O0lBQVQ7UUFDSSxPQUFPLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxrQkFBc0MsSUFBSyxPQUFBLENBQUM7WUFDbEYsSUFBSSxFQUFFLGtCQUFrQixDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0Isb0JBQUEsRUFBRTtTQUMvQixDQUFDLEVBSm1GLENBSW5GLEVBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUEwQjs7Ozs7SUFBMUIsVUFBMkIsa0JBQXNDO1FBQzdELDZCQUE2QixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEQscUJBQXFCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBlYWNoIGVudHJ5IGluIHtAbGluayBEb2N1bWVudGF0aW9uRW50cnkuZXhhbXBsZXN9LCB0aGF0IGlzIGFuIGV4YW1wbGVzIHRoYXQgc2hvd3MgYSBwYXJ0aWN1bGFyIHVzYWdlIG9mIGEgY29tcG9uZW50c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVFbnRyeSB7XG4gICAgLyoqXG4gICAgICogRXhhbXBsZSBjb21wb25lbnQgd3JpdHRlbiB0byBzaG93IHVzYWdlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb21wb25lbnQ6IFR5cGU8dW5rbm93bj47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IGZvciB3aGljaCB0aGlzIGV4YW1wbGUgaXMgd3JpdHRlblxuICAgICAqL1xuICAgIGZvckNvbXBvbmVudDogVHlwZTx1bmtub3duPjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgc2VjdGlvbiB1bmRlciB3aGljaCB0aGlzIGV4YW1wbGUgd2lsbCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICB0aXRsZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb21wb25lbnQgYmVpbmcgc2hvd2Nhc2VkLCBhbG9uZyB3aXRoIHRoZSBleGFtcGxlcyBmb3IgaXQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRhdGlvbkVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSBuYW1lIHRoYXQgaXMgZ29pbmcgdG8gYmUgdXNlZCBmb3IgdGhlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VnbWVudCB0byBiZSB1c2VkIGluIHJvdXRpbmcgd2hlbiBkaXNwbGF5aW5nIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB1cmxTZWdtZW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IGZvciB3aGljaCB0aGUgZG9jdW1lbnRhdGlvbiBpcyBnb2luZyB0byBiZSBnZW5lcmF0ZWRcbiAgICAgKi9cbiAgICBjb21wb25lbnQ6IFR5cGU8dW5rbm93bj47XG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgZXhhbXBsZXMgdGhhdCB3aWxsIHNob3cgaG93IHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWRcbiAgICAgKi9cbiAgICBleGFtcGxlcz86IEV4YW1wbGVFbnRyeVtdO1xufVxuXG4vKipcbiAqIFRvIHJlZ2lzdGVyIGEgZG9jdW1lbnRhdGlvbiBlbnRyeSBhcyB2YWx1ZSBmb3IgY29ycmVzcG9uZGluZyBjb21wb25lbnRcbiAqL1xuY29uc3QgZG9jdW1lbnRhdGlvbkVudHJ5TWFwID0gbmV3IE1hcDxUeXBlPHVua25vd24+LCBEb2N1bWVudGF0aW9uRW50cnk+KCk7XG5cbi8qKlxuICogVXNlZCBpbiB7QGxpbmsgRG9jdW1lbnRhdGlvbi5yZWdpc3RlckRvY3VtZW50YXRpb25FbnRyeX0gbWV0aG9kIHRvIGNoZWNrIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIHtAbGluayBEb2N1bWVudGF0aW9uRW50cnl9XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRG9jdW1lbnRhdGlvbk1ldGFkYXRhKGRvY3VtZW50YXRpb25QYXJhbXM6IERvY3VtZW50YXRpb25FbnRyeSk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnRhdGlvblBhcmFtcy51cmxTZWdtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXJsU2VnbWVudCBzaG91bGQgYmUgc3BlY2lmaWVkIGFuZCBub3QgZW1wdHknKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2N1bWVudGF0aW9uRW50cnkgPSBEb2N1bWVudGF0aW9uLmdldEFsbEVudHJpZXMoKS5maW5kKFxuICAgICAgICBlbnRyeSA9PiBlbnRyeS51cmxTZWdtZW50ID09PSBkb2N1bWVudGF0aW9uUGFyYW1zLnVybFNlZ21lbnRcbiAgICApO1xuICAgIGlmIChkb2N1bWVudGF0aW9uRW50cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBzcGVjaWZpZWQgdXJsU2VnbWVudCAnJHtkb2N1bWVudGF0aW9uUGFyYW1zLnVybFNlZ21lbnR9JyBmb3IgJyR7ZG9jdW1lbnRhdGlvblBhcmFtcy5kaXNwbGF5TmFtZX0nYCArXG4gICAgICAgICAgICAgICAgYHdhcyBhbHJlYWR5IGRlZmluZWQgZm9yICcke2RvY3VtZW50YXRpb25FbnRyeS5kaXNwbGF5TmFtZX0nYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnRhdGlvblBhcmFtcy5kaXNwbGF5TmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rpc3BsYXlOYW1lIHNob3VsZCBiZSBzcGVjaWZpZWQgYW5kIG5vdCBlbXB0eScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IERvY3VtZW50YXRpb24gPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIGRvY3VtZW50YXRpb24gZW50cmllcyByZWdpc3RlcmVkIGludG8gdGhlIGZyYW1ld29ya1xuICAgICAqL1xuICAgIGdldEFsbEVudHJpZXMoKTogRG9jdW1lbnRhdGlvbkVudHJ5W10ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudGF0aW9uRW50cnlNYXAudmFsdWVzKCkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuZ3VsYXIgcm91dGVzIHVzZWQgd2hlbiBkaXNwbGF5aW5nIHRoZSBkb2N1bWVudGF0aW9uL2V4YW1wbGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBnZXRSb3V0ZXMoKTogUm91dGVzIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50YXRpb24uZ2V0QWxsRW50cmllcygpLm1hcCgoZG9jdW1lbnRhdGlvbkVudHJ5OiBEb2N1bWVudGF0aW9uRW50cnkpID0+ICh7XG4gICAgICAgICAgICBwYXRoOiBkb2N1bWVudGF0aW9uRW50cnkudXJsU2VnbWVudCxcbiAgICAgICAgICAgIGNvbXBvbmVudDogRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgICAgIGRhdGE6IHsgZG9jdW1lbnRhdGlvbkVudHJ5IH0sXG4gICAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWFudWFsIHJlZ2lzdHJhdGlvbiBvZiBkb2N1bWVudGF0aW9uIGVudHJ5IHdpdGggYSBjb3JyZXNwb25kaW5nIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZWdpc3RlckRvY3VtZW50YXRpb25FbnRyeShkb2N1bWVudGF0aW9uRW50cnk6IERvY3VtZW50YXRpb25FbnRyeSk6IHZvaWQge1xuICAgICAgICB2YWxpZGF0ZURvY3VtZW50YXRpb25NZXRhZGF0YShkb2N1bWVudGF0aW9uRW50cnkpO1xuICAgICAgICBkb2N1bWVudGF0aW9uRW50cnlNYXAuc2V0KGRvY3VtZW50YXRpb25FbnRyeS5jb21wb25lbnQsIGRvY3VtZW50YXRpb25FbnRyeSk7XG4gICAgfSxcbn07XG4iXX0=
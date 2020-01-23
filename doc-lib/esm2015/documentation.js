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
const documentationEntryMap = new Map();
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
    const documentationEntry = Documentation.getAllEntries().find((/**
     * @param {?} entry
     * @return {?}
     */
    entry => entry.urlSegment === documentationParams.urlSegment));
    if (documentationEntry) {
        throw new Error(`The specified urlSegment '${documentationParams.urlSegment}' for '${documentationParams.displayName}'` +
            `was already defined for '${documentationEntry.displayName}'`);
    }
    if (!documentationParams.displayName) {
        throw new Error('displayName should be specified and not empty');
    }
}
/** @type {?} */
export const Documentation = {
    /**
     * Returns all the documentation entries registered into the framework
     * @return {?}
     */
    getAllEntries() {
        return Array.from(documentationEntryMap.values());
    },
    /**
     * Returns angular routes used when displaying the documentation/examples for the components.
     * @return {?}
     */
    getRoutes() {
        return Documentation.getAllEntries().map((/**
         * @param {?} documentationEntry
         * @return {?}
         */
        (documentationEntry) => ({
            path: documentationEntry.urlSegment,
            component: DocumentationContainerComponent,
            data: { documentationEntry },
        })));
    },
    /**
     * Used for manual registration of documentation entry with a corresponding component.
     * @param {?} documentationEntry
     * @return {?}
     */
    registerDocumentationEntry(documentationEntry) {
        validateDocumentationMetadata(documentationEntry);
        documentationEntryMap.set(documentationEntry.component, documentationEntry);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkRBQTZELENBQUM7Ozs7O0FBTTlHLGtDQWVDOzs7Ozs7SUFYRyxpQ0FBeUI7Ozs7O0lBS3pCLG9DQUE0Qjs7Ozs7SUFLNUIsNkJBQWM7Ozs7OztBQU1sQix3Q0FvQkM7Ozs7OztJQWhCRyx5Q0FBb0I7Ozs7O0lBS3BCLHdDQUFtQjs7Ozs7SUFLbkIsdUNBQXlCOzs7OztJQUt6QixzQ0FBMEI7Ozs7OztNQU14QixxQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBcUM7Ozs7OztBQUsxRSxTQUFTLDZCQUE2QixDQUFDLG1CQUF1QztJQUMxRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTs7VUFFSyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSTs7OztJQUN6RCxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssbUJBQW1CLENBQUMsVUFBVSxFQUMvRDtJQUNELElBQUksa0JBQWtCLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FDWCw2QkFBNkIsbUJBQW1CLENBQUMsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFdBQVcsR0FBRztZQUNuRyw0QkFBNEIsa0JBQWtCLENBQUMsV0FBVyxHQUFHLENBQ3BFLENBQUM7S0FDTDtJQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0tBQ3BFO0FBQ0wsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUFHOzs7OztJQUl6QixhQUFhO1FBQ1QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFLRCxTQUFTO1FBQ0wsT0FBTyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRzs7OztRQUFDLENBQUMsa0JBQXNDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEYsSUFBSSxFQUFFLGtCQUFrQixDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRTtTQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUtELDBCQUEwQixDQUFDLGtCQUFzQztRQUM3RCw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tY29udGFpbmVyL2RvY3VtZW50YXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgZWFjaCBlbnRyeSBpbiB7QGxpbmsgRG9jdW1lbnRhdGlvbkVudHJ5LmV4YW1wbGVzfSwgdGhhdCBpcyBhbiBleGFtcGxlcyB0aGF0IHNob3dzIGEgcGFydGljdWxhciB1c2FnZSBvZiBhIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeGFtcGxlRW50cnkge1xuICAgIC8qKlxuICAgICAqIEV4YW1wbGUgY29tcG9uZW50IHdyaXR0ZW4gdG8gc2hvdyB1c2FnZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgY29tcG9uZW50OiBUeXBlPHVua25vd24+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCBmb3Igd2hpY2ggdGhpcyBleGFtcGxlIGlzIHdyaXR0ZW5cbiAgICAgKi9cbiAgICBmb3JDb21wb25lbnQ6IFR5cGU8dW5rbm93bj47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHNlY3Rpb24gdW5kZXIgd2hpY2ggdGhpcyBleGFtcGxlIHdpbGwgYmUgcGxhY2VkXG4gICAgICovXG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29tcG9uZW50IGJlaW5nIHNob3djYXNlZCwgYWxvbmcgd2l0aCB0aGUgZXhhbXBsZXMgZm9yIGl0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50YXRpb25FbnRyeSB7XG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgbmFtZSB0aGF0IGlzIGdvaW5nIHRvIGJlIHVzZWQgZm9yIHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlZ21lbnQgdG8gYmUgdXNlZCBpbiByb3V0aW5nIHdoZW4gZGlzcGxheWluZyB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgdXJsU2VnbWVudDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCBmb3Igd2hpY2ggdGhlIGRvY3VtZW50YXRpb24gaXMgZ29pbmcgdG8gYmUgZ2VuZXJhdGVkXG4gICAgICovXG4gICAgY29tcG9uZW50OiBUeXBlPHVua25vd24+O1xuXG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIGV4YW1wbGVzIHRoYXQgd2lsbCBzaG93IGhvdyB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkXG4gICAgICovXG4gICAgZXhhbXBsZXM/OiBFeGFtcGxlRW50cnlbXTtcbn1cblxuLyoqXG4gKiBUbyByZWdpc3RlciBhIGRvY3VtZW50YXRpb24gZW50cnkgYXMgdmFsdWUgZm9yIGNvcnJlc3BvbmRpbmcgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRvY3VtZW50YXRpb25FbnRyeU1hcCA9IG5ldyBNYXA8VHlwZTx1bmtub3duPiwgRG9jdW1lbnRhdGlvbkVudHJ5PigpO1xuXG4vKipcbiAqIFVzZWQgaW4ge0BsaW5rIERvY3VtZW50YXRpb24ucmVnaXN0ZXJEb2N1bWVudGF0aW9uRW50cnl9IG1ldGhvZCB0byBjaGVjayBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCB7QGxpbmsgRG9jdW1lbnRhdGlvbkVudHJ5fVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZURvY3VtZW50YXRpb25NZXRhZGF0YShkb2N1bWVudGF0aW9uUGFyYW1zOiBEb2N1bWVudGF0aW9uRW50cnkpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50YXRpb25QYXJhbXMudXJsU2VnbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybFNlZ21lbnQgc2hvdWxkIGJlIHNwZWNpZmllZCBhbmQgbm90IGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZG9jdW1lbnRhdGlvbkVudHJ5ID0gRG9jdW1lbnRhdGlvbi5nZXRBbGxFbnRyaWVzKCkuZmluZChcbiAgICAgICAgZW50cnkgPT4gZW50cnkudXJsU2VnbWVudCA9PT0gZG9jdW1lbnRhdGlvblBhcmFtcy51cmxTZWdtZW50XG4gICAgKTtcbiAgICBpZiAoZG9jdW1lbnRhdGlvbkVudHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgc3BlY2lmaWVkIHVybFNlZ21lbnQgJyR7ZG9jdW1lbnRhdGlvblBhcmFtcy51cmxTZWdtZW50fScgZm9yICcke2RvY3VtZW50YXRpb25QYXJhbXMuZGlzcGxheU5hbWV9J2AgK1xuICAgICAgICAgICAgICAgIGB3YXMgYWxyZWFkeSBkZWZpbmVkIGZvciAnJHtkb2N1bWVudGF0aW9uRW50cnkuZGlzcGxheU5hbWV9J2BcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50YXRpb25QYXJhbXMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXNwbGF5TmFtZSBzaG91bGQgYmUgc3BlY2lmaWVkIGFuZCBub3QgZW1wdHknKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudGF0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSBkb2N1bWVudGF0aW9uIGVudHJpZXMgcmVnaXN0ZXJlZCBpbnRvIHRoZSBmcmFtZXdvcmtcbiAgICAgKi9cbiAgICBnZXRBbGxFbnRyaWVzKCk6IERvY3VtZW50YXRpb25FbnRyeVtdIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnRhdGlvbkVudHJ5TWFwLnZhbHVlcygpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbmd1bGFyIHJvdXRlcyB1c2VkIHdoZW4gZGlzcGxheWluZyB0aGUgZG9jdW1lbnRhdGlvbi9leGFtcGxlcyBmb3IgdGhlIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgZ2V0Um91dGVzKCk6IFJvdXRlcyB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudGF0aW9uLmdldEFsbEVudHJpZXMoKS5tYXAoKGRvY3VtZW50YXRpb25FbnRyeTogRG9jdW1lbnRhdGlvbkVudHJ5KSA9PiAoe1xuICAgICAgICAgICAgcGF0aDogZG9jdW1lbnRhdGlvbkVudHJ5LnVybFNlZ21lbnQsXG4gICAgICAgICAgICBjb21wb25lbnQ6IERvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnQsXG4gICAgICAgICAgICBkYXRhOiB7IGRvY3VtZW50YXRpb25FbnRyeSB9LFxuICAgICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1hbnVhbCByZWdpc3RyYXRpb24gb2YgZG9jdW1lbnRhdGlvbiBlbnRyeSB3aXRoIGEgY29ycmVzcG9uZGluZyBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVnaXN0ZXJEb2N1bWVudGF0aW9uRW50cnkoZG9jdW1lbnRhdGlvbkVudHJ5OiBEb2N1bWVudGF0aW9uRW50cnkpOiB2b2lkIHtcbiAgICAgICAgdmFsaWRhdGVEb2N1bWVudGF0aW9uTWV0YWRhdGEoZG9jdW1lbnRhdGlvbkVudHJ5KTtcbiAgICAgICAgZG9jdW1lbnRhdGlvbkVudHJ5TWFwLnNldChkb2N1bWVudGF0aW9uRW50cnkuY29tcG9uZW50LCBkb2N1bWVudGF0aW9uRW50cnkpO1xuICAgIH0sXG59O1xuIl19
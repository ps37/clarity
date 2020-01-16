/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var DocumentationContainerComponent = /** @class */ (function () {
    function DocumentationContainerComponent(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    DocumentationContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.documentationEntry = data.documentationEntry;
        }));
    };
    DocumentationContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vcd-documentation-container',
                    template: "<clr-tabs>\n    <clr-tab>\n        <button clrTabLink>Documentation</button>\n        <clr-tab-content>\n            <vcd-overview-viewer [component]=\"documentationEntry?.component\"> </vcd-overview-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>API</button>\n        <clr-tab-content>\n            <vcd-api-viewer [component]=\"documentationEntry?.component\"> </vcd-api-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>Examples</button>\n        <clr-tab-content>\n            <vcd-example-viewer\n                *ngFor=\"let exampleDescriptor of documentationEntry?.examples\"\n                [exampleEntry]=\"exampleDescriptor\"\n            >\n            </vcd-example-viewer>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n",
                    styles: ["vcd-example-viewer{margin-top:1rem;display:block}"]
                }] }
    ];
    /** @nocollapse */
    DocumentationContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute }
    ]; };
    return DocumentationContainerComponent;
}());
export { DocumentationContainerComponent };
if (false) {
    /**
     * The documentation entry registered for a component is obtained here using the route data
     * {\@link Documentation.getRoutes} registered for that component using {\@link Documentation.registerDocumentationEntry}
     * @type {?}
     */
    DocumentationContainerComponent.prototype.documentationEntry;
    /**
     * @type {?}
     * @private
     */
    DocumentationContainerComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBR3ZEO0lBWUkseUNBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQzs7OztJQUU3QyxrREFBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVU7WUFDakMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQWxCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsczFCQUF1RDs7aUJBRTFEOzs7O2dCQVBRLGNBQWM7O0lBc0J2QixzQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBZFksK0JBQStCOzs7Ozs7O0lBS3hDLDZEQUF1Qzs7Ozs7SUFFM0IsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIERhdGEgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkVudHJ5IH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLWRvY3VtZW50YXRpb24tY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RvY3VtZW50YXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qKlxuICAgICAqIFRoZSBkb2N1bWVudGF0aW9uIGVudHJ5IHJlZ2lzdGVyZWQgZm9yIGEgY29tcG9uZW50IGlzIG9idGFpbmVkIGhlcmUgdXNpbmcgdGhlIHJvdXRlIGRhdGFcbiAgICAgKiB7QGxpbmsgRG9jdW1lbnRhdGlvbi5nZXRSb3V0ZXN9IHJlZ2lzdGVyZWQgZm9yIHRoYXQgY29tcG9uZW50IHVzaW5nIHtAbGluayBEb2N1bWVudGF0aW9uLnJlZ2lzdGVyRG9jdW1lbnRhdGlvbkVudHJ5fVxuICAgICAqL1xuICAgIGRvY3VtZW50YXRpb25FbnRyeTogRG9jdW1lbnRhdGlvbkVudHJ5O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YTogRGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uRW50cnkgPSBkYXRhLmRvY3VtZW50YXRpb25FbnRyeTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
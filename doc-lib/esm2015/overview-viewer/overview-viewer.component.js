/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Component, Input, Type } from '@angular/core';
import { DocumentationRetrieverService } from '../documentation-retriever.service';
export class OverviewViewerComponent {
    /**
     * @param {?} documentationRetriever
     */
    constructor(documentationRetriever) {
        this.documentationRetriever = documentationRetriever;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    set component(component) {
        if (!component) {
            return;
        }
        // TODO: externalize string literals
        this.overview = this.documentationRetriever.getOverview(component) || 'No Documentation found';
    }
}
OverviewViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'vcd-overview-viewer',
                template: "<div [innerHTML]=\"overview\"></div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
OverviewViewerComponent.ctorParameters = () => [
    { type: DocumentationRetrieverService }
];
OverviewViewerComponent.propDecorators = {
    component: [{ type: Input }]
};
if (false) {
    /**
     * The description of the component from Compodoc generated JSON. This is an HTML encoded string.
     * @type {?}
     */
    OverviewViewerComponent.prototype.overview;
    /**
     * @type {?}
     * @private
     */
    OverviewViewerComponent.prototype.documentationRetriever;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXZpZXdlci9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9uRixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2hDLFlBQW9CLHNCQUFxRDtRQUFyRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQStCO0lBQUcsQ0FBQzs7Ozs7SUFFN0UsSUFDSSxTQUFTLENBQUMsU0FBb0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU87U0FDVjtRQUNELG9DQUFvQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksd0JBQXdCLENBQUM7SUFDbkcsQ0FBQzs7O1lBbkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrREFBK0M7O2FBRWxEOzs7O1lBTlEsNkJBQTZCOzs7d0JBY2pDLEtBQUs7Ozs7Ozs7SUFITiwyQ0FBaUI7Ozs7O0lBQ0wseURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZjZC1vdmVydmlldy12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL292ZXJ2aWV3LXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVydmlld1ZpZXdlckNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb21wb25lbnQgZnJvbSBDb21wb2RvYyBnZW5lcmF0ZWQgSlNPTi4gVGhpcyBpcyBhbiBIVE1MIGVuY29kZWQgc3RyaW5nLlxuICAgICAqL1xuICAgIG92ZXJ2aWV3OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudGF0aW9uUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSkge31cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IGV4dGVybmFsaXplIHN0cmluZyBsaXRlcmFsc1xuICAgICAgICB0aGlzLm92ZXJ2aWV3ID0gdGhpcy5kb2N1bWVudGF0aW9uUmV0cmlldmVyLmdldE92ZXJ2aWV3KGNvbXBvbmVudCkgfHwgJ05vIERvY3VtZW50YXRpb24gZm91bmQnO1xuICAgIH1cbn1cbiJdfQ==
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
var OverviewViewerComponent = /** @class */ (function () {
    function OverviewViewerComponent(documentationRetriever) {
        this.documentationRetriever = documentationRetriever;
        this.isNoOverviewMessageShown = true;
    }
    Object.defineProperty(OverviewViewerComponent.prototype, "component", {
        set: /**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            if (!component) {
                return;
            }
            // TODO: externalize string literals
            this.overview =
                this.documentationRetriever.getOverview(component) ||
                    (this.isNoOverviewMessageShown ? 'No Documentation found' : '');
        },
        enumerable: true,
        configurable: true
    });
    OverviewViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vcd-overview-viewer',
                    template: "<div [innerHTML]=\"overview\"></div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OverviewViewerComponent.ctorParameters = function () { return [
        { type: DocumentationRetrieverService }
    ]; };
    OverviewViewerComponent.propDecorators = {
        isNoOverviewMessageShown: [{ type: Input }],
        component: [{ type: Input }]
    };
    return OverviewViewerComponent;
}());
export { OverviewViewerComponent };
if (false) {
    /**
     * The description of the component from Compodoc generated JSON. This is an HTML encoded string.
     * @type {?}
     */
    OverviewViewerComponent.prototype.overview;
    /** @type {?} */
    OverviewViewerComponent.prototype.isNoOverviewMessageShown;
    /**
     * @type {?}
     * @private
     */
    OverviewViewerComponent.prototype.documentationRetriever;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXZpZXdlci9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRjtJQVVJLGlDQUFvQixzQkFBcUQ7UUFBckQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUVoRSw2QkFBd0IsR0FBRyxJQUFJLENBQUM7SUFGbUMsQ0FBQztJQUk3RSxzQkFDSSw4Q0FBUzs7Ozs7UUFEYixVQUNjLFNBQW9CO1lBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ1osT0FBTzthQUNWO1lBQ0Qsb0NBQW9DO1lBQ3BDLElBQUksQ0FBQyxRQUFRO2dCQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO29CQUNsRCxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztPQUFBOztnQkF2QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGtEQUErQzs7aUJBRWxEOzs7O2dCQU5RLDZCQUE2Qjs7OzJDQWNqQyxLQUFLOzRCQUVMLEtBQUs7O0lBVVYsOEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQW5CWSx1QkFBdUI7Ozs7OztJQUloQywyQ0FBaUI7O0lBR2pCLDJEQUF5Qzs7Ozs7SUFGN0IseURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZjZC1vdmVydmlldy12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL292ZXJ2aWV3LXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVydmlld1ZpZXdlckNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb21wb25lbnQgZnJvbSBDb21wb2RvYyBnZW5lcmF0ZWQgSlNPTi4gVGhpcyBpcyBhbiBIVE1MIGVuY29kZWQgc3RyaW5nLlxuICAgICAqL1xuICAgIG92ZXJ2aWV3OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudGF0aW9uUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSkge31cblxuICAgIEBJbnB1dCgpIGlzTm9PdmVydmlld01lc3NhZ2VTaG93biA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBjb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBleHRlcm5hbGl6ZSBzdHJpbmcgbGl0ZXJhbHNcbiAgICAgICAgdGhpcy5vdmVydmlldyA9XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50YXRpb25SZXRyaWV2ZXIuZ2V0T3ZlcnZpZXcoY29tcG9uZW50KSB8fFxuICAgICAgICAgICAgKHRoaXMuaXNOb092ZXJ2aWV3TWVzc2FnZVNob3duID8gJ05vIERvY3VtZW50YXRpb24gZm91bmQnIDogJycpO1xuICAgIH1cbn1cbiJdfQ==
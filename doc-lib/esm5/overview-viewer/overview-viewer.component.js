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
            this.overview = this.documentationRetriever.getOverview(component) || 'No Documentation found';
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
    /**
     * @type {?}
     * @private
     */
    OverviewViewerComponent.prototype.documentationRetriever;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXZpZXdlci9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRjtJQVVJLGlDQUFvQixzQkFBcUQ7UUFBckQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtJQUFHLENBQUM7SUFFN0Usc0JBQ0ksOENBQVM7Ozs7O1FBRGIsVUFDYyxTQUFvQjtZQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNaLE9BQU87YUFDVjtZQUNELG9DQUFvQztZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksd0JBQXdCLENBQUM7UUFDbkcsQ0FBQzs7O09BQUE7O2dCQW5CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isa0RBQStDOztpQkFFbEQ7Ozs7Z0JBTlEsNkJBQTZCOzs7NEJBY2pDLEtBQUs7O0lBUVYsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHVCQUF1Qjs7Ozs7O0lBSWhDLDJDQUFpQjs7Ozs7SUFDTCx5REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLW92ZXJ2aWV3LXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL292ZXJ2aWV3LXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3Vmlld2VyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvbXBvbmVudCBmcm9tIENvbXBvZG9jIGdlbmVyYXRlZCBKU09OLiBUaGlzIGlzIGFuIEhUTUwgZW5jb2RlZCBzdHJpbmcuXG4gICAgICovXG4gICAgb3ZlcnZpZXc6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50YXRpb25SZXRyaWV2ZXI6IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlKSB7fVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgY29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KSB7XG4gICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogZXh0ZXJuYWxpemUgc3RyaW5nIGxpdGVyYWxzXG4gICAgICAgIHRoaXMub3ZlcnZpZXcgPSB0aGlzLmRvY3VtZW50YXRpb25SZXRyaWV2ZXIuZ2V0T3ZlcnZpZXcoY29tcG9uZW50KSB8fCAnTm8gRG9jdW1lbnRhdGlvbiBmb3VuZCc7XG4gICAgfVxufVxuIl19
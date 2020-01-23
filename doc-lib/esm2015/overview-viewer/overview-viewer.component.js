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
        this.isNoOverviewMessageShown = true;
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
        this.overview =
            this.documentationRetriever.getOverview(component) ||
                (this.isNoOverviewMessageShown ? 'No Documentation found' : '');
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
    isNoOverviewMessageShown: [{ type: Input }],
    component: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LXZpZXdlci9vdmVydmlldy12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9uRixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2hDLFlBQW9CLHNCQUFxRDtRQUFyRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQStCO1FBRWhFLDZCQUF3QixHQUFHLElBQUksQ0FBQztJQUZtQyxDQUFDOzs7OztJQUk3RSxJQUNJLFNBQVMsQ0FBQyxTQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0Qsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxRQUFRO1lBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xELENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrREFBK0M7O2FBRWxEOzs7O1lBTlEsNkJBQTZCOzs7dUNBY2pDLEtBQUs7d0JBRUwsS0FBSzs7Ozs7OztJQUxOLDJDQUFpQjs7SUFHakIsMkRBQXlDOzs7OztJQUY3Qix5REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLW92ZXJ2aWV3LXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL292ZXJ2aWV3LXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3ZlcnZpZXctdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3Vmlld2VyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvbXBvbmVudCBmcm9tIENvbXBvZG9jIGdlbmVyYXRlZCBKU09OLiBUaGlzIGlzIGFuIEhUTUwgZW5jb2RlZCBzdHJpbmcuXG4gICAgICovXG4gICAgb3ZlcnZpZXc6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50YXRpb25SZXRyaWV2ZXI6IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlKSB7fVxuXG4gICAgQElucHV0KCkgaXNOb092ZXJ2aWV3TWVzc2FnZVNob3duID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IGV4dGVybmFsaXplIHN0cmluZyBsaXRlcmFsc1xuICAgICAgICB0aGlzLm92ZXJ2aWV3ID1cbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRhdGlvblJldHJpZXZlci5nZXRPdmVydmlldyhjb21wb25lbnQpIHx8XG4gICAgICAgICAgICAodGhpcy5pc05vT3ZlcnZpZXdNZXNzYWdlU2hvd24gPyAnTm8gRG9jdW1lbnRhdGlvbiBmb3VuZCcgOiAnJyk7XG4gICAgfVxufVxuIl19
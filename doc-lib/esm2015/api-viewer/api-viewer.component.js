/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Component, Input, Type } from '@angular/core';
import { DocumentationRetrieverService } from '../documentation-retriever.service';
export class ApiViewerComponent {
    /**
     * @param {?} documentationRetriever
     */
    constructor(documentationRetriever) {
        this.documentationRetriever = documentationRetriever;
    }
    /**
     * Gets the input and output parameters from the Compodoc generated documentation json
     * @param {?} component
     * @return {?}
     */
    set component(component) {
        if (!component) {
            return;
        }
        this.inputParameters = this.documentationRetriever.getInputParameters(component);
        this.outputParameters = this.documentationRetriever.getOutputParameters(component);
    }
}
ApiViewerComponent.decorators = [
    { type: Component, args: [{
                selector: ' vcd-api-viewer',
                template: "<h6>Inputs</h6>\n<table class=\"table\" *ngIf=\"inputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of inputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!inputParameters?.length\">The component has no input parameters</p>\n\n<h6>Outputs</h6>\n<table class=\"table\" *ngIf=\"outputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of outputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!outputParameters?.length\">The component does not emit any values</p>\n",
                styles: ["::ng-deep body p{margin-top:0}"]
            }] }
];
/** @nocollapse */
ApiViewerComponent.ctorParameters = () => [
    { type: DocumentationRetrieverService }
];
ApiViewerComponent.propDecorators = {
    component: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ApiViewerComponent.prototype.inputParameters;
    /** @type {?} */
    ApiViewerComponent.prototype.outputParameters;
    /**
     * @type {?}
     * @private
     */
    ApiViewerComponent.prototype.documentationRetriever;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJhcGktdmlld2VyL2FwaS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWlCLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPbEcsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUkzQixZQUFvQixzQkFBcUQ7UUFBckQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtJQUFHLENBQUM7Ozs7OztJQUs3RSxJQUNJLFNBQVMsQ0FBQyxTQUFvQjtRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUFyQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJ4Q0FBMEM7O2FBRTdDOzs7O1lBTnVCLDZCQUE2Qjs7O3dCQWdCaEQsS0FBSzs7OztJQVJOLDZDQUFpQzs7SUFDakMsOENBQWtDOzs7OztJQUV0QixvREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVBhcmFtZXRlcnMsIERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnIHZjZC1hcGktdmlld2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBpLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBpLXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBcGlWaWV3ZXJDb21wb25lbnQge1xuICAgIGlucHV0UGFyYW1ldGVyczogQXBpUGFyYW1ldGVyc1tdO1xuICAgIG91dHB1dFBhcmFtZXRlcnM6IEFwaVBhcmFtZXRlcnNbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnRhdGlvblJldHJpZXZlcjogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UpIHt9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbnB1dCBhbmQgb3V0cHV0IHBhcmFtZXRlcnMgZnJvbSB0aGUgQ29tcG9kb2MgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb24ganNvblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGNvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRQYXJhbWV0ZXJzID0gdGhpcy5kb2N1bWVudGF0aW9uUmV0cmlldmVyLmdldElucHV0UGFyYW1ldGVycyhjb21wb25lbnQpO1xuICAgICAgICB0aGlzLm91dHB1dFBhcmFtZXRlcnMgPSB0aGlzLmRvY3VtZW50YXRpb25SZXRyaWV2ZXIuZ2V0T3V0cHV0UGFyYW1ldGVycyhjb21wb25lbnQpO1xuICAgIH1cbn1cbiJdfQ==
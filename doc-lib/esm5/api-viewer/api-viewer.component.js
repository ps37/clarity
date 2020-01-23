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
var ApiViewerComponent = /** @class */ (function () {
    function ApiViewerComponent(documentationRetriever) {
        this.documentationRetriever = documentationRetriever;
    }
    Object.defineProperty(ApiViewerComponent.prototype, "component", {
        /**
         * Gets the input and output parameters from the Compodoc generated documentation json
         */
        set: /**
         * Gets the input and output parameters from the Compodoc generated documentation json
         * @param {?} component
         * @return {?}
         */
        function (component) {
            if (!component) {
                return;
            }
            this.inputParameters = this.documentationRetriever.getInputParameters(component);
            this.outputParameters = this.documentationRetriever.getOutputParameters(component);
        },
        enumerable: true,
        configurable: true
    });
    ApiViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: ' vcd-api-viewer',
                    template: "<h6>Inputs</h6>\n<table class=\"table\" *ngIf=\"inputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of inputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!inputParameters?.length\">The component has no input parameters</p>\n\n<h6>Outputs</h6>\n<table class=\"table\" *ngIf=\"outputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of outputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!outputParameters?.length\">The component does not emit any values</p>\n",
                    styles: ["::ng-deep body p{margin-top:0}"]
                }] }
    ];
    /** @nocollapse */
    ApiViewerComponent.ctorParameters = function () { return [
        { type: DocumentationRetrieverService }
    ]; };
    ApiViewerComponent.propDecorators = {
        component: [{ type: Input }]
    };
    return ApiViewerComponent;
}());
export { ApiViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJhcGktdmlld2VyL2FwaS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWlCLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbEc7SUFTSSw0QkFBb0Isc0JBQXFEO1FBQXJELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBK0I7SUFBRyxDQUFDO0lBSzdFLHNCQUNJLHlDQUFTO1FBSmI7O1dBRUc7Ozs7OztRQUNILFVBQ2MsU0FBb0I7WUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7OztPQUFBOztnQkFyQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJ4Q0FBMEM7O2lCQUU3Qzs7OztnQkFOdUIsNkJBQTZCOzs7NEJBZ0JoRCxLQUFLOztJQVFWLHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksa0JBQWtCOzs7SUFDM0IsNkNBQWlDOztJQUNqQyw4Q0FBa0M7Ozs7O0lBRXRCLG9EQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpUGFyYW1ldGVycywgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudGF0aW9uLXJldHJpZXZlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICcgdmNkLWFwaS12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcGktdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcGktdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFwaVZpZXdlckNvbXBvbmVudCB7XG4gICAgaW5wdXRQYXJhbWV0ZXJzOiBBcGlQYXJhbWV0ZXJzW107XG4gICAgb3V0cHV0UGFyYW1ldGVyczogQXBpUGFyYW1ldGVyc1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudGF0aW9uUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSkge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlucHV0IGFuZCBvdXRwdXQgcGFyYW1ldGVycyBmcm9tIHRoZSBDb21wb2RvYyBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiBqc29uXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBzZXQgY29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KSB7XG4gICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFBhcmFtZXRlcnMgPSB0aGlzLmRvY3VtZW50YXRpb25SZXRyaWV2ZXIuZ2V0SW5wdXRQYXJhbWV0ZXJzKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMub3V0cHV0UGFyYW1ldGVycyA9IHRoaXMuZG9jdW1lbnRhdGlvblJldHJpZXZlci5nZXRPdXRwdXRQYXJhbWV0ZXJzKGNvbXBvbmVudCk7XG4gICAgfVxufVxuIl19
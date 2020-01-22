/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { DocumentationContainerComponent } from './documentation-container.component';
import { OverviewViewerModule } from '../overview-viewer/overview-viewer.module';
import { ExampleViewerModule } from '../example-viewer/example-viewer.module';
import { ApiViewerModule } from '../api-viewer/api-viewer.module';
/** @type {?} */
var declarations = [DocumentationContainerComponent];
var DocumentationContainerModule = /** @class */ (function () {
    function DocumentationContainerModule() {
    }
    DocumentationContainerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ClarityModule, CommonModule, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
                    declarations: tslib_1.__spread(declarations),
                    entryComponents: [DocumentationContainerComponent],
                    exports: tslib_1.__spread(declarations, [OverviewViewerModule, ApiViewerModule, ExampleViewerModule]),
                },] }
    ];
    return DocumentationContainerModule;
}());
export { DocumentationContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFFNUQsWUFBWSxHQUFHLENBQUMsK0JBQStCLENBQUM7QUFFdEQ7SUFBQTtJQU0yQyxDQUFDOztnQkFOM0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUNsRyxZQUFZLG1CQUFNLFlBQVksQ0FBQztvQkFDL0IsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELE9BQU8sbUJBQU0sWUFBWSxHQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQztpQkFDekY7O0lBQzBDLG1DQUFDO0NBQUEsQUFONUMsSUFNNEM7U0FBL0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xhcml0eU1vZHVsZSB9IGZyb20gJ0BjbHIvYW5ndWxhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJ2aWV3Vmlld2VyTW9kdWxlIH0gZnJvbSAnLi4vb3ZlcnZpZXctdmlld2VyL292ZXJ2aWV3LXZpZXdlci5tb2R1bGUnO1xuaW1wb3J0IHsgRXhhbXBsZVZpZXdlck1vZHVsZSB9IGZyb20gJy4uL2V4YW1wbGUtdmlld2VyL2V4YW1wbGUtdmlld2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBBcGlWaWV3ZXJNb2R1bGUgfSBmcm9tICcuLi9hcGktdmlld2VyL2FwaS12aWV3ZXIubW9kdWxlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW0RvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDbGFyaXR5TW9kdWxlLCBDb21tb25Nb2R1bGUsIE92ZXJ2aWV3Vmlld2VyTW9kdWxlLCBBcGlWaWV3ZXJNb2R1bGUsIEV4YW1wbGVWaWV3ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogWy4uLmRlY2xhcmF0aW9uc10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9ucywgT3ZlcnZpZXdWaWV3ZXJNb2R1bGUsIEFwaVZpZXdlck1vZHVsZSwgRXhhbXBsZVZpZXdlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50YXRpb25Db250YWluZXJNb2R1bGUge31cbiJdfQ==
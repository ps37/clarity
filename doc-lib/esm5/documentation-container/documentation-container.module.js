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
                    exports: tslib_1.__spread(declarations),
                },] }
    ];
    return DocumentationContainerModule;
}());
export { DocumentationContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFFNUQsWUFBWSxHQUFHLENBQUMsK0JBQStCLENBQUM7QUFFdEQ7SUFBQTtJQU0yQyxDQUFDOztnQkFOM0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUNsRyxZQUFZLG1CQUFNLFlBQVksQ0FBQztvQkFDL0IsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELE9BQU8sbUJBQU0sWUFBWSxDQUFDO2lCQUM3Qjs7SUFDMEMsbUNBQUM7Q0FBQSxBQU41QyxJQU00QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFyaXR5TW9kdWxlIH0gZnJvbSAnQGNsci9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcnZpZXdWaWV3ZXJNb2R1bGUgfSBmcm9tICcuLi9vdmVydmlldy12aWV3ZXIvb3ZlcnZpZXctdmlld2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBFeGFtcGxlVmlld2VyTW9kdWxlIH0gZnJvbSAnLi4vZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIubW9kdWxlJztcbmltcG9ydCB7IEFwaVZpZXdlck1vZHVsZSB9IGZyb20gJy4uL2FwaS12aWV3ZXIvYXBpLXZpZXdlci5tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NsYXJpdHlNb2R1bGUsIENvbW1vbk1vZHVsZSwgT3ZlcnZpZXdWaWV3ZXJNb2R1bGUsIEFwaVZpZXdlck1vZHVsZSwgRXhhbXBsZVZpZXdlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbLi4uZGVjbGFyYXRpb25zXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtEb2N1bWVudGF0aW9uQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRhdGlvbkNvbnRhaW5lck1vZHVsZSB7fVxuIl19
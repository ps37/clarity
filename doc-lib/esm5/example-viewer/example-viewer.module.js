/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.module.ts
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
import { ExampleViewerComponent } from './example-viewer.component';
import { SourceCodeViewerModule } from '../source-code-viewer/source-code-viewer.module';
import { OverviewViewerModule } from '../overview-viewer/overview-viewer.module';
/** @type {?} */
var declarations = [ExampleViewerComponent];
var ExampleViewerModule = /** @class */ (function () {
    function ExampleViewerModule() {
    }
    ExampleViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ClarityModule, CommonModule, SourceCodeViewerModule, OverviewViewerModule],
                    declarations: tslib_1.__spread(declarations),
                    exports: tslib_1.__spread(declarations),
                },] }
    ];
    return ExampleViewerModule;
}());
export { ExampleViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztJQUUzRSxZQUFZLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUU3QztJQUFBO0lBS2tDLENBQUM7O2dCQUxsQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDcEYsWUFBWSxtQkFBTSxZQUFZLENBQUM7b0JBQy9CLE9BQU8sbUJBQU0sWUFBWSxDQUFDO2lCQUM3Qjs7SUFDaUMsMEJBQUM7Q0FBQSxBQUxuQyxJQUttQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFyaXR5TW9kdWxlIH0gZnJvbSAnQGNsci9hbmd1bGFyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFeGFtcGxlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29kZVZpZXdlck1vZHVsZSB9IGZyb20gJy4uL3NvdXJjZS1jb2RlLXZpZXdlci9zb3VyY2UtY29kZS12aWV3ZXIubW9kdWxlJztcbmltcG9ydCB7IE92ZXJ2aWV3Vmlld2VyTW9kdWxlIH0gZnJvbSAnLi4vb3ZlcnZpZXctdmlld2VyL292ZXJ2aWV3LXZpZXdlci5tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbRXhhbXBsZVZpZXdlckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NsYXJpdHlNb2R1bGUsIENvbW1vbk1vZHVsZSwgU291cmNlQ29kZVZpZXdlck1vZHVsZSwgT3ZlcnZpZXdWaWV3ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogWy4uLmRlY2xhcmF0aW9uc10sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9uc10sXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVWaWV3ZXJNb2R1bGUge31cbiJdfQ==
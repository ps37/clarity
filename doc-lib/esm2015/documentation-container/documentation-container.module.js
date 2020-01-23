/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const declarations = [DocumentationContainerComponent];
export class DocumentationContainerModule {
}
DocumentationContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
                declarations: [...declarations],
                entryComponents: [DocumentationContainerComponent],
                exports: [...declarations, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztNQUU1RCxZQUFZLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztBQVF0RCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFOeEMsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNsRyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztnQkFDL0IsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQzthQUN6RiIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsYXJpdHlNb2R1bGUgfSBmcm9tICdAY2xyL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVydmlld1ZpZXdlck1vZHVsZSB9IGZyb20gJy4uL292ZXJ2aWV3LXZpZXdlci9vdmVydmlldy12aWV3ZXIubW9kdWxlJztcbmltcG9ydCB7IEV4YW1wbGVWaWV3ZXJNb2R1bGUgfSBmcm9tICcuLi9leGFtcGxlLXZpZXdlci9leGFtcGxlLXZpZXdlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXBpVmlld2VyTW9kdWxlIH0gZnJvbSAnLi4vYXBpLXZpZXdlci9hcGktdmlld2VyLm1vZHVsZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtEb2N1bWVudGF0aW9uQ29udGFpbmVyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ2xhcml0eU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBPdmVydmlld1ZpZXdlck1vZHVsZSwgQXBpVmlld2VyTW9kdWxlLCBFeGFtcGxlVmlld2VyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0RvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFsuLi5kZWNsYXJhdGlvbnMsIE92ZXJ2aWV3Vmlld2VyTW9kdWxlLCBBcGlWaWV3ZXJNb2R1bGUsIEV4YW1wbGVWaWV3ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudGF0aW9uQ29udGFpbmVyTW9kdWxlIHt9XG4iXX0=
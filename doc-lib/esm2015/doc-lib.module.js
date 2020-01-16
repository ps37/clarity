/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { NgModule } from '@angular/core';
import { DocumentationContainerComponent } from './documentation-container/documentation-container.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { DocumentationRetrieverService } from './documentation-retriever.service';
import { CompoDocRetrieverService } from './compodoc/compodoc-retriever.service';
import { OverviewViewerComponent } from './overview-viewer/overview-viewer.component';
import { ApiViewerComponent } from './api-viewer/api-viewer.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { SourceCodeViewerComponent } from './source-code-viewer/source-code-viewer.component';
import { HighlightService } from './highlight/highlight.service';
import { PrismHighlightService } from './highlight/prism/prism-highlight.service';
/** @type {?} */
const declarations = [
    DocumentationContainerComponent,
    OverviewViewerComponent,
    ApiViewerComponent,
    ExampleViewerComponent,
    SourceCodeViewerComponent,
];
export class DocLibModule {
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {\@link CompoDocRetrieverService}
     * @param {?} documentations
     * @return {?}
     */
    static forRoot(documentations) {
        return {
            ngModule: DocLibModule,
            providers: [
                { provide: DocumentationRetrieverService, useValue: new CompoDocRetrieverService(documentations) },
            ],
        };
    }
}
DocLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule],
                declarations: [...declarations],
                entryComponents: [DocumentationContainerComponent],
                exports: [...declarations],
                providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJkb2MtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7TUFFNUUsWUFBWSxHQUFHO0lBQ2pCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7Q0FDNUI7QUFTRCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUtkLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBZ0M7UUFDbEQsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsRUFBRTthQUNyRztTQUNKLENBQUM7SUFDTixDQUFDOzs7WUFuQkosUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3RDLFlBQVksRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2FBQzlFIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENsYXJpdHlNb2R1bGUgfSBmcm9tICdAY2xyL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvZG9jU2NoZW1hIH0gZnJvbSAnLi9jb21wb2RvYy9jb21wb2RvYy1zY2hlbWEnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPdmVydmlld1ZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcnZpZXctdmlld2VyL292ZXJ2aWV3LXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBpVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hcGktdmlld2VyL2FwaS12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV4YW1wbGVWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtdmlld2VyL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb2RlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UtY29kZS12aWV3ZXIvc291cmNlLWNvZGUtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdobGlnaHRTZXJ2aWNlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21IaWdobGlnaHRTZXJ2aWNlIH0gZnJvbSAnLi9oaWdobGlnaHQvcHJpc20vcHJpc20taGlnaGxpZ2h0LnNlcnZpY2UnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gICAgRG9jdW1lbnRhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBPdmVydmlld1ZpZXdlckNvbXBvbmVudCxcbiAgICBBcGlWaWV3ZXJDb21wb25lbnQsXG4gICAgRXhhbXBsZVZpZXdlckNvbXBvbmVudCxcbiAgICBTb3VyY2VDb2RlVmlld2VyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ2xhcml0eU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0RvY3VtZW50YXRpb25Db250YWluZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSGlnaGxpZ2h0U2VydmljZSwgdXNlQ2xhc3M6IFByaXNtSGlnaGxpZ2h0U2VydmljZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgRG9jTGliTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgaW4gdGhlIGhvc3QgcGFja2FnZSBpbXBvcnRpbmcgdGhpcyBkb2MgbGlicmFyeSBmb3IgcHJvdmlkaW5nIHRoZSBkb2N1bWVudGF0aW9uIEpTT05zIG5lZWRlZCBmb3JcbiAgICAgKiB7QGxpbmsgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChkb2N1bWVudGF0aW9uczogQ29tcG9kb2NTY2hlbWFbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IERvY0xpYk1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UsIHVzZVZhbHVlOiBuZXcgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlKGRvY3VtZW50YXRpb25zKSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
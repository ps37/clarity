/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { InjectionToken, NgModule } from '@angular/core';
import { DocumentationRetrieverService } from './documentation-retriever.service';
import { CompoDocRetrieverService } from './compodoc/compodoc-retriever.service';
import { PrismHighlightService } from './highlight/prism/prism-highlight.service';
import { HighlightService } from './highlight/highlight.service';
import { DocumentationContainerModule } from './documentation-container/documentation-container.module';
/** @type {?} */
var declarations = [];
/**
 * Token that makes the documentation jsons available to the following factory function.
 * @type {?}
 */
export var FOR_ROOT_DOCUMENTATIONS_TOKEN = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * @param {?} documentations
 * @return {?}
 */
export function getCompoDocRetrieverService(documentations) {
    return new CompoDocRetrieverService(documentations);
}
var DocLibModule = /** @class */ (function () {
    function DocLibModule() {
    }
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {@link CompoDocRetrieverService}
     */
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {\@link CompoDocRetrieverService}
     * @param {?} documentations
     * @return {?}
     */
    DocLibModule.forRoot = /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {\@link CompoDocRetrieverService}
     * @param {?} documentations
     * @return {?}
     */
    function (documentations) {
        return {
            ngModule: DocLibModule,
            providers: [
                // For injecting 'documentations' into factory function, we have to first provide them as injectable.
                {
                    provide: FOR_ROOT_DOCUMENTATIONS_TOKEN,
                    useValue: documentations,
                },
                {
                    provide: DocumentationRetrieverService,
                    useFactory: getCompoDocRetrieverService,
                    deps: [FOR_ROOT_DOCUMENTATIONS_TOKEN],
                },
            ],
        };
    };
    DocLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [DocumentationContainerModule],
                    declarations: tslib_1.__spread(declarations),
                    exports: tslib_1.__spread(declarations),
                    providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
                },] }
    ];
    return DocLibModule;
}());
export { DocLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJkb2MtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOztJQUVsRyxZQUFZLEdBQUcsRUFBRTs7Ozs7QUFRdkIsTUFBTSxLQUFPLDZCQUE2QixHQUFHLElBQUksY0FBYyxDQUMzRCw0REFBNEQsQ0FDL0Q7Ozs7O0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLGNBQWdDO0lBQ3hFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQ7SUFBQTtJQTRCQSxDQUFDO0lBckJHOzs7T0FHRzs7Ozs7OztJQUNXLG9CQUFPOzs7Ozs7SUFBckIsVUFBc0IsY0FBcUI7UUFDdkMsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxxR0FBcUc7Z0JBQ3JHO29CQUNJLE9BQU8sRUFBRSw2QkFBNkI7b0JBQ3RDLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxJQUFJLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDeEM7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOztnQkEzQkosUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN2QyxZQUFZLG1CQUFNLFlBQVksQ0FBQztvQkFDL0IsT0FBTyxtQkFBTSxZQUFZLENBQUM7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2lCQUM5RTs7SUF1QkQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXRCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvZG9jU2NoZW1hIH0gZnJvbSAnLi9jb21wb2RvYy9jb21wb2RvYy1zY2hlbWEnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbUhpZ2hsaWdodFNlcnZpY2UgfSBmcm9tICcuL2hpZ2hsaWdodC9wcmlzbS9wcmlzbS1oaWdobGlnaHQuc2VydmljZSc7XG5pbXBvcnQgeyBIaWdobGlnaHRTZXJ2aWNlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkNvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1jb250YWluZXIvZG9jdW1lbnRhdGlvbi1jb250YWluZXIubW9kdWxlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW107XG5cbi8qKlxuICogTk9URTogVGhlIGZvbGxvd2luZyB0d28gaGFzIHRvIGJlIGV4cG9ydGVkIG90aGVyd2lzZSB0aGUgQW9UIGNvbXBpbGVyIHdvbid0IHNlZSBpdC5cbiAqL1xuLyoqXG4gKiBUb2tlbiB0aGF0IG1ha2VzIHRoZSBkb2N1bWVudGF0aW9uIGpzb25zIGF2YWlsYWJsZSB0byB0aGUgZm9sbG93aW5nIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JfUk9PVF9ET0NVTUVOVEFUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb21wb2RvY1NjaGVtYVtdPihcbiAgICAnRG9jTGliTW9kdWxlLmZvclJvb3QoKSBDb21wb0RvY1JldHJpZXZlclNlcnZpY2UgZG9jIGpzb25zLidcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb0RvY1JldHJpZXZlclNlcnZpY2UoZG9jdW1lbnRhdGlvbnM6IENvbXBvZG9jU2NoZW1hW10pOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB7XG4gICAgcmV0dXJuIG5ldyBDb21wb0RvY1JldHJpZXZlclNlcnZpY2UoZG9jdW1lbnRhdGlvbnMpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEb2N1bWVudGF0aW9uQ29udGFpbmVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICAgIGV4cG9ydHM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSGlnaGxpZ2h0U2VydmljZSwgdXNlQ2xhc3M6IFByaXNtSGlnaGxpZ2h0U2VydmljZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgRG9jTGliTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgaW4gdGhlIGhvc3QgcGFja2FnZSBpbXBvcnRpbmcgdGhpcyBkb2MgbGlicmFyeSBmb3IgcHJvdmlkaW5nIHRoZSBkb2N1bWVudGF0aW9uIEpTT05zIG5lZWRlZCBmb3JcbiAgICAgKiB7QGxpbmsgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChkb2N1bWVudGF0aW9uczogYW55W10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEb2NMaWJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAvLyBGb3IgaW5qZWN0aW5nICdkb2N1bWVudGF0aW9ucycgaW50byBmYWN0b3J5IGZ1bmN0aW9uLCB3ZSBoYXZlIHRvIGZpcnN0IHByb3ZpZGUgdGhlbSBhcyBpbmplY3RhYmxlLlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRk9SX1JPT1RfRE9DVU1FTlRBVElPTlNfVE9LRU4sXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBkb2N1bWVudGF0aW9ucyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldENvbXBvRG9jUmV0cmlldmVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0ZPUl9ST09UX0RPQ1VNRU5UQVRJT05TX1RPS0VOXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
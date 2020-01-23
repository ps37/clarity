/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { StackBlitzWriterService } from './stack-blitz-writer.service';
/** @type {?} */
const declarations = [];
/**
 * Token that makes the documentation JSONs available to the following factory function.
 * @type {?}
 */
export const DOCUMENTATION_DATA = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * Token that makes Stqckblitz JSON data available to factory functions
 * @type {?}
 */
export const STACKBLITZ_DATA = new InjectionToken('DocLibModule.forRoot() StackBlitz template JSON data');
/**
 * @param {?} documentations
 * @return {?}
 */
export function getCompoDocRetrieverService(documentations) {
  return new CompoDocRetrieverService(documentations);
}
/**
 * @param {?} sbData
 * @param {?} docRetrieverService
 * @return {?}
 */
export function getStackBlitzWriter(sbData, docRetrieverService) {
  return new StackBlitzWriterService(sbData, docRetrieverService);
}
export class DocLibModule {
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */
  static forRoot(documentations, stackblitzData) {
    return {
      ngModule: DocLibModule,
      providers: [
        // For injecting 'documentations' into factory function, we have to first provide them as injectable.
        {
          provide: DOCUMENTATION_DATA,
          useValue: documentations,
        },
        {
          provide: STACKBLITZ_DATA,
          useValue: stackblitzData,
        },
        {
          provide: DocumentationRetrieverService,
          useFactory: getCompoDocRetrieverService,
          deps: [DOCUMENTATION_DATA],
        },
        {
          provide: StackBlitzWriterService,
          deps: [STACKBLITZ_DATA, DocumentationRetrieverService],
          useFactory: getStackBlitzWriter,
        },
      ],
    };
  }
}
DocLibModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [DocumentationContainerModule],
        declarations: [...declarations],
        exports: [...declarations, DocumentationContainerModule],
        providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
      },
    ],
  },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJkb2MtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFrQix1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztNQUVqRixZQUFZLEdBQUcsRUFBRTs7Ozs7QUFTdkIsTUFBTSxPQUFPLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNoRCw0REFBNEQsQ0FDL0Q7Ozs7O0FBS0QsTUFBTSxPQUFPLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FDN0Msc0RBQXNELENBQ3pEOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxjQUFnQztJQUN4RSxPQUFPLElBQUksd0JBQXdCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUMvQixNQUFzQixFQUN0QixtQkFBa0Q7SUFFbEQsT0FBTyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFRRCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFLZCxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWdDLEVBQUUsY0FBOEI7UUFDbEYsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxxR0FBcUc7Z0JBQ3JHO29CQUNJLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjtnQkFFRDtvQkFDSSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLGNBQWM7aUJBQzNCO2dCQUVEO29CQUNJLE9BQU8sRUFBRSw2QkFBNkI7b0JBQ3RDLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM3QjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsNkJBQTZCLENBQUM7b0JBQ3RELFVBQVUsRUFBRSxtQkFBbUI7aUJBQ2xDO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQzs7O1lBdENKLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDdkMsWUFBWSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLDRCQUE0QixDQUFDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsQ0FBQzthQUM5RSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb2RvY1NjaGVtYSB9IGZyb20gJy4vY29tcG9kb2MvY29tcG9kb2Mtc2NoZW1hJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLXJldHJpZXZlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvRG9jUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4vY29tcG9kb2MvY29tcG9kb2MtcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21IaWdobGlnaHRTZXJ2aWNlIH0gZnJvbSAnLi9oaWdobGlnaHQvcHJpc20vcHJpc20taGlnaGxpZ2h0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0U2VydmljZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5zZXJ2aWNlJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25Db250YWluZXJNb2R1bGUgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tY29udGFpbmVyL2RvY3VtZW50YXRpb24tY29udGFpbmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGFja0JsaXR6RGF0YSwgU3RhY2tCbGl0eldyaXRlclNlcnZpY2UgfSBmcm9tICcuL3N0YWNrLWJsaXR6LXdyaXRlci5zZXJ2aWNlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW107XG5cbi8qKlxuICogTk9URTogVGhlIGZvbGxvd2luZyB0d28gaGFzIHRvIGJlIGV4cG9ydGVkIG90aGVyd2lzZSB0aGUgQW9UIGNvbXBpbGVyIHdvbid0IHNlZSBpdC5cbiAqL1xuXG4vKipcbiAqIFRva2VuIHRoYXQgbWFrZXMgdGhlIGRvY3VtZW50YXRpb24gSlNPTnMgYXZhaWxhYmxlIHRvIHRoZSBmb2xsb3dpbmcgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IERPQ1VNRU5UQVRJT05fREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb21wb2RvY1NjaGVtYVtdPihcbiAgICAnRG9jTGliTW9kdWxlLmZvclJvb3QoKSBDb21wb0RvY1JldHJpZXZlclNlcnZpY2UgZG9jIGpzb25zLidcbik7XG5cbi8qKlxuICogVG9rZW4gdGhhdCBtYWtlcyBTdHFja2JsaXR6IEpTT04gZGF0YSBhdmFpbGFibGUgdG8gZmFjdG9yeSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IFNUQUNLQkxJVFpfREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdGFja0JsaXR6RGF0YT4oXG4gICAgJ0RvY0xpYk1vZHVsZS5mb3JSb290KCkgU3RhY2tCbGl0eiB0ZW1wbGF0ZSBKU09OIGRhdGEnXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlKGRvY3VtZW50YXRpb25zOiBDb21wb2RvY1NjaGVtYVtdKTogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2Uge1xuICAgIHJldHVybiBuZXcgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlKGRvY3VtZW50YXRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWNrQmxpdHpXcml0ZXIoXG4gICAgc2JEYXRhOiBTdGFja0JsaXR6RGF0YSxcbiAgICBkb2NSZXRyaWV2ZXJTZXJ2aWNlOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZVxuKTogU3RhY2tCbGl0eldyaXRlclNlcnZpY2Uge1xuICAgIHJldHVybiBuZXcgU3RhY2tCbGl0eldyaXRlclNlcnZpY2Uoc2JEYXRhLCBkb2NSZXRyaWV2ZXJTZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRG9jdW1lbnRhdGlvbkNvbnRhaW5lck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbLi4uZGVjbGFyYXRpb25zXSxcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zLCBEb2N1bWVudGF0aW9uQ29udGFpbmVyTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhpZ2hsaWdodFNlcnZpY2UsIHVzZUNsYXNzOiBQcmlzbUhpZ2hsaWdodFNlcnZpY2UgfV0sXG59KVxuZXhwb3J0IGNsYXNzIERvY0xpYk1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGluIHRoZSBob3N0IHBhY2thZ2UgaW1wb3J0aW5nIHRoaXMgZG9jIGxpYnJhcnkgZm9yIHByb3ZpZGluZyB0aGUgZG9jdW1lbnRhdGlvbiBKU09OcyBuZWVkZWQgZm9yXG4gICAgICoge0BsaW5rIENvbXBvRG9jUmV0cmlldmVyU2VydmljZX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZG9jdW1lbnRhdGlvbnM6IENvbXBvZG9jU2NoZW1hW10sIHN0YWNrYmxpdHpEYXRhOiBTdGFja0JsaXR6RGF0YSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IERvY0xpYk1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIC8vIEZvciBpbmplY3RpbmcgJ2RvY3VtZW50YXRpb25zJyBpbnRvIGZhY3RvcnkgZnVuY3Rpb24sIHdlIGhhdmUgdG8gZmlyc3QgcHJvdmlkZSB0aGVtIGFzIGluamVjdGFibGUuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBET0NVTUVOVEFUSU9OX0RBVEEsXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBkb2N1bWVudGF0aW9ucyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBTVEFDS0JMSVRaX0RBVEEsXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBzdGFja2JsaXR6RGF0YSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0Q29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbRE9DVU1FTlRBVElPTl9EQVRBXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogU3RhY2tCbGl0eldyaXRlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTVEFDS0JMSVRaX0RBVEEsIERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlXSxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RhY2tCbGl0eldyaXRlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=

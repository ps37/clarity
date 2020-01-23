/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from 'tslib';
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
var declarations = [];
/**
 * Token that makes the documentation JSONs available to the following factory function.
 * @type {?}
 */
export var DOCUMENTATION_DATA = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * Token that makes Stqckblitz JSON data available to factory functions
 * @type {?}
 */
export var STACKBLITZ_DATA = new InjectionToken('DocLibModule.forRoot() StackBlitz template JSON data');
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
var DocLibModule = /** @class */ (function() {
  function DocLibModule() {}
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {@link CompoDocRetrieverService}
   */
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */
  DocLibModule.forRoot /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */ = function(documentations, stackblitzData) {
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
  };
  DocLibModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [DocumentationContainerModule],
          declarations: tslib_1.__spread(declarations),
          exports: tslib_1.__spread(declarations, [DocumentationContainerModule]),
          providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
        },
      ],
    },
  ];
  return DocLibModule;
})();
export { DocLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJkb2MtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3hHLE9BQU8sRUFBa0IsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFakYsWUFBWSxHQUFHLEVBQUU7Ozs7O0FBU3ZCLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsNERBQTRELENBQy9EOzs7OztBQUtELE1BQU0sS0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQzdDLHNEQUFzRCxDQUN6RDs7Ozs7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsY0FBZ0M7SUFDeEUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FDL0IsTUFBc0IsRUFDdEIsbUJBQWtEO0lBRWxELE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQ7SUFBQTtJQXVDQSxDQUFDO0lBaENHOzs7T0FHRzs7Ozs7Ozs7SUFDVyxvQkFBTzs7Ozs7OztJQUFyQixVQUFzQixjQUFnQyxFQUFFLGNBQThCO1FBQ2xGLE9BQU87WUFDSCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1AscUdBQXFHO2dCQUNyRztvQkFDSSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixRQUFRLEVBQUUsY0FBYztpQkFDM0I7Z0JBRUQ7b0JBQ0ksT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjtnQkFFRDtvQkFDSSxPQUFPLEVBQUUsNkJBQTZCO29CQUN0QyxVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDN0I7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLDZCQUE2QixDQUFDO29CQUN0RCxVQUFVLEVBQUUsbUJBQW1CO2lCQUNsQzthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O2dCQXRDSixRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQ3ZDLFlBQVksbUJBQU0sWUFBWSxDQUFDO29CQUMvQixPQUFPLG1CQUFNLFlBQVksR0FBRSw0QkFBNEIsRUFBQztvQkFDeEQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7aUJBQzlFOztJQWtDRCxtQkFBQztDQUFBLEFBdkNELElBdUNDO1NBakNZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9kb2NTY2hlbWEgfSBmcm9tICcuL2NvbXBvZG9jL2NvbXBvZG9jLXNjaGVtYSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb0RvY1JldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvZG9jL2NvbXBvZG9jLXJldHJpZXZlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXNtSGlnaGxpZ2h0U2VydmljZSB9IGZyb20gJy4vaGlnaGxpZ2h0L3ByaXNtL3ByaXNtLWhpZ2hsaWdodC5zZXJ2aWNlJztcbmltcG9ydCB7IEhpZ2hsaWdodFNlcnZpY2UgfSBmcm9tICcuL2hpZ2hsaWdodC9oaWdobGlnaHQuc2VydmljZSc7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLWNvbnRhaW5lci9kb2N1bWVudGF0aW9uLWNvbnRhaW5lci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhY2tCbGl0ekRhdGEsIFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zdGFjay1ibGl0ei13cml0ZXIuc2VydmljZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdO1xuXG4vKipcbiAqIE5PVEU6IFRoZSBmb2xsb3dpbmcgdHdvIGhhcyB0byBiZSBleHBvcnRlZCBvdGhlcndpc2UgdGhlIEFvVCBjb21waWxlciB3b24ndCBzZWUgaXQuXG4gKi9cblxuLyoqXG4gKiBUb2tlbiB0aGF0IG1ha2VzIHRoZSBkb2N1bWVudGF0aW9uIEpTT05zIGF2YWlsYWJsZSB0byB0aGUgZm9sbG93aW5nIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBET0NVTUVOVEFUSU9OX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29tcG9kb2NTY2hlbWFbXT4oXG4gICAgJ0RvY0xpYk1vZHVsZS5mb3JSb290KCkgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlIGRvYyBqc29ucy4nXG4pO1xuXG4vKipcbiAqIFRva2VuIHRoYXQgbWFrZXMgU3RxY2tibGl0eiBKU09OIGRhdGEgYXZhaWxhYmxlIHRvIGZhY3RvcnkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBTVEFDS0JMSVRaX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48U3RhY2tCbGl0ekRhdGE+KFxuICAgICdEb2NMaWJNb2R1bGUuZm9yUm9vdCgpIFN0YWNrQmxpdHogdGVtcGxhdGUgSlNPTiBkYXRhJ1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvRG9jUmV0cmlldmVyU2VydmljZShkb2N1bWVudGF0aW9uczogQ29tcG9kb2NTY2hlbWFbXSk6IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIHtcbiAgICByZXR1cm4gbmV3IENvbXBvRG9jUmV0cmlldmVyU2VydmljZShkb2N1bWVudGF0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFja0JsaXR6V3JpdGVyKFxuICAgIHNiRGF0YTogU3RhY2tCbGl0ekRhdGEsXG4gICAgZG9jUmV0cmlldmVyU2VydmljZTogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2Vcbik6IFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlIHtcbiAgICByZXR1cm4gbmV3IFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlKHNiRGF0YSwgZG9jUmV0cmlldmVyU2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0RvY3VtZW50YXRpb25Db250YWluZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogWy4uLmRlY2xhcmF0aW9uc10sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9ucywgRG9jdW1lbnRhdGlvbkNvbnRhaW5lck1vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBIaWdobGlnaHRTZXJ2aWNlLCB1c2VDbGFzczogUHJpc21IaWdobGlnaHRTZXJ2aWNlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBEb2NMaWJNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIENhbGxlZCBpbiB0aGUgaG9zdCBwYWNrYWdlIGltcG9ydGluZyB0aGlzIGRvYyBsaWJyYXJ5IGZvciBwcm92aWRpbmcgdGhlIGRvY3VtZW50YXRpb24gSlNPTnMgbmVlZGVkIGZvclxuICAgICAqIHtAbGluayBDb21wb0RvY1JldHJpZXZlclNlcnZpY2V9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGRvY3VtZW50YXRpb25zOiBDb21wb2RvY1NjaGVtYVtdLCBzdGFja2JsaXR6RGF0YTogU3RhY2tCbGl0ekRhdGEpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEb2NMaWJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAvLyBGb3IgaW5qZWN0aW5nICdkb2N1bWVudGF0aW9ucycgaW50byBmYWN0b3J5IGZ1bmN0aW9uLCB3ZSBoYXZlIHRvIGZpcnN0IHByb3ZpZGUgdGhlbSBhcyBpbmplY3RhYmxlLlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRE9DVU1FTlRBVElPTl9EQVRBLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogZG9jdW1lbnRhdGlvbnMsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogU1RBQ0tCTElUWl9EQVRBLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogc3RhY2tibGl0ekRhdGEsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldENvbXBvRG9jUmV0cmlldmVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0RPQ1VNRU5UQVRJT05fREFUQV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbU1RBQ0tCTElUWl9EQVRBLCBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZV0sXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldFN0YWNrQmxpdHpXcml0ZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

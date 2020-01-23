/**
 * @fileoverview added by tsickle
 * Generated from: compodoc/compodoc-retriever.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
/**
 * This service retrieves specific properties from compodoc generated documentation
 */
export class CompoDocRetrieverService {
  /**
   * @param {?} documentationJson
   */
  constructor(documentationJson) {
    this.documentationJson = documentationJson;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getOverview(component) {
    return this.getComponent(component).description;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getTypescriptSourceCode(component) {
    return this.getComponent(component).sourceCode;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getHtmlSourceCode(component) {
    return this.getComponent(component).templateData;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getCssSourceCode(component) {
    /** @type {?} */
    const styleUrlsData = this.getComponent(component).styleUrlsData;
    if (!styleUrlsData) {
      return;
    }
    return styleUrlsData
      .map(
        /**
         * @param {?} styleUrl
         * @return {?}
         */
        styleUrl => styleUrl.data
      )
      .join('\n\n\n');
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getComponent(component) {
    for (const documentationJson of this.documentationJson) {
      /** @type {?} */
      const compodocComponent = documentationJson.components.find(
        /**
         * @param {?} c
         * @return {?}
         */
        c => c.name === component.name
      );
      if (compodocComponent) {
        return compodocComponent;
      }
    }
    return /** @type {?} */ ({ styleUrlsData: [] });
  }
  /**
   * @param {?} moduleName
   * @return {?}
   */
  getModule(moduleName) {
    for (const documentationJson of this.documentationJson) {
      /** @type {?} */
      const compodocComponent = documentationJson.modules.find(
        /**
         * @param {?} module
         * @return {?}
         */
        module => module.name === moduleName
      );
      if (compodocComponent) {
        return compodocComponent;
      }
    }
    return null;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getInputParameters(component) {
    /** @type {?} */
    const comp = this.getComponent(component);
    return comp.inputsClass || [];
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getOutputParameters(component) {
    /** @type {?} */
    const comp = this.getComponent(component);
    return comp.outputsClass || [];
  }
}
if (false) {
  /**
   * @type {?}
   * @private
   */
  CompoDocRetrieverService.prototype.documentationJson;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9kb2MtcmV0cmlldmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJjb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ2pDLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFcEQsV0FBVyxDQUFDLFNBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxTQUFvQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsU0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLFNBQW9COztjQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsT0FBTyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxTQUFvQjtRQUNwQyxLQUFLLE1BQU0saUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFOztrQkFDOUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksRUFBQztZQUMzRixJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixPQUFPLGlCQUFpQixDQUFDO2FBQzVCO1NBQ0o7UUFDRCxPQUFPLG1CQUFBLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFxQixDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFVBQWtCO1FBQy9CLEtBQUssTUFBTSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O2tCQUM5QyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUM7WUFDOUYsSUFBSSxpQkFBaUIsRUFBRTtnQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQzthQUM1QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxTQUFvQjs7Y0FDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxtQkFBbUIsQ0FBQyxTQUFvQjs7Y0FDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQztDQUNKOzs7Ozs7SUFuRGUscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlQYXJhbWV0ZXJzLCBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9kb2NDb21wb25lbnQsIENvbXBvZG9jTW9kdWxlLCBDb21wb2RvY1NjaGVtYSB9IGZyb20gJy4vY29tcG9kb2Mtc2NoZW1hJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcmV0cmlldmVzIHNwZWNpZmljIHByb3BlcnRpZXMgZnJvbSBjb21wb2RvYyBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlIGltcGxlbWVudHMgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnRhdGlvbkpzb246IENvbXBvZG9jU2NoZW1hW10pIHt9XG5cbiAgICBwdWJsaWMgZ2V0T3ZlcnZpZXcoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZXNjcmlwdFNvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS5zb3VyY2VDb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIdG1sU291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLnRlbXBsYXRlRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3NzU291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN0eWxlVXJsc0RhdGEgPSB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLnN0eWxlVXJsc0RhdGE7XG4gICAgICAgIGlmICghc3R5bGVVcmxzRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVVybHNEYXRhLm1hcChzdHlsZVVybCA9PiBzdHlsZVVybC5kYXRhKS5qb2luKCdcXG5cXG5cXG4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KTogQ29tcG9kb2NDb21wb25lbnQge1xuICAgICAgICBmb3IgKGNvbnN0IGRvY3VtZW50YXRpb25Kc29uIG9mIHRoaXMuZG9jdW1lbnRhdGlvbkpzb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvZG9jQ29tcG9uZW50ID0gZG9jdW1lbnRhdGlvbkpzb24uY29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9kb2NDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9kb2NDb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3R5bGVVcmxzRGF0YTogW10gfSBhcyBDb21wb2RvY0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kdWxlKG1vZHVsZU5hbWU6IHN0cmluZyk6IENvbXBvZG9jTW9kdWxlIHwgbnVsbCB7XG4gICAgICAgIGZvciAoY29uc3QgZG9jdW1lbnRhdGlvbkpzb24gb2YgdGhpcy5kb2N1bWVudGF0aW9uSnNvbikge1xuICAgICAgICAgICAgY29uc3QgY29tcG9kb2NDb21wb25lbnQgPSBkb2N1bWVudGF0aW9uSnNvbi5tb2R1bGVzLmZpbmQobW9kdWxlID0+IG1vZHVsZS5uYW1lID09PSBtb2R1bGVOYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wb2RvY0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb2RvY0NvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5wdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLmlucHV0c0NsYXNzIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRwdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLm91dHB1dHNDbGFzcyB8fCBbXTtcbiAgICB9XG59XG4iXX0=

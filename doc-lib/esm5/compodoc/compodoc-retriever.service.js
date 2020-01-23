/**
 * @fileoverview added by tsickle
 * Generated from: compodoc/compodoc-retriever.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from 'tslib';
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
/**
 * This service retrieves specific properties from compodoc generated documentation
 */
var /**
 * This service retrieves specific properties from compodoc generated documentation
 */
CompoDocRetrieverService = /** @class */ (function() {
  function CompoDocRetrieverService(documentationJson) {
    this.documentationJson = documentationJson;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getOverview /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).description;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getTypescriptSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).sourceCode;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getHtmlSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).templateData;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getCssSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var styleUrlsData = this.getComponent(component).styleUrlsData;
    if (!styleUrlsData) {
      return;
    }
    return styleUrlsData
      .map(
        /**
         * @param {?} styleUrl
         * @return {?}
         */
        function(styleUrl) {
          return styleUrl.data;
        }
      )
      .join('\n\n\n');
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getComponent /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    var e_1, _a;
    try {
      for (var _b = tslib_1.__values(this.documentationJson), _c = _b.next(); !_c.done; _c = _b.next()) {
        var documentationJson = _c.value;
        /** @type {?} */
        var compodocComponent = documentationJson.components.find(
          /**
           * @param {?} c
           * @return {?}
           */
          function(c) {
            return c.name === component.name;
          }
        );
        if (compodocComponent) {
          return compodocComponent;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return /** @type {?} */ ({ styleUrlsData: [] });
  };
  /**
   * @param {?} moduleName
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getModule /**
   * @param {?} moduleName
   * @return {?}
   */ = function(moduleName) {
    var e_2, _a;
    try {
      for (var _b = tslib_1.__values(this.documentationJson), _c = _b.next(); !_c.done; _c = _b.next()) {
        var documentationJson = _c.value;
        /** @type {?} */
        var compodocComponent = documentationJson.modules.find(
          /**
           * @param {?} module
           * @return {?}
           */
          function(module) {
            return module.name === moduleName;
          }
        );
        if (compodocComponent) {
          return compodocComponent;
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return null;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getInputParameters /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var comp = this.getComponent(component);
    return comp.inputsClass || [];
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getOutputParameters /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var comp = this.getComponent(component);
    return comp.outputsClass || [];
  };
  return CompoDocRetrieverService;
})();
/**
 * This service retrieves specific properties from compodoc generated documentation
 */
export { CompoDocRetrieverService };
if (false) {
  /**
   * @type {?}
   * @private
   */
  CompoDocRetrieverService.prototype.documentationJson;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9kb2MtcmV0cmlldmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJjb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7SUFDSSxrQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVwRCw4Q0FBVzs7OztJQUFsQixVQUFtQixTQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRU0sMERBQXVCOzs7O0lBQTlCLFVBQStCLFNBQW9CO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxvREFBaUI7Ozs7SUFBeEIsVUFBeUIsU0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVNLG1EQUFnQjs7OztJQUF2QixVQUF3QixTQUFvQjs7WUFDbEMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYTtRQUNoRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUNELE9BQU8sYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWIsQ0FBYSxFQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRU0sK0NBQVk7Ozs7SUFBbkIsVUFBb0IsU0FBb0I7OztZQUNwQyxLQUFnQyxJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUFuRCxJQUFNLGlCQUFpQixXQUFBOztvQkFDbEIsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQXpCLENBQXlCLEVBQUM7Z0JBQzNGLElBQUksaUJBQWlCLEVBQUU7b0JBQ25CLE9BQU8saUJBQWlCLENBQUM7aUJBQzVCO2FBQ0o7Ozs7Ozs7OztRQUNELE9BQU8sbUJBQUEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQXFCLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTSw0Q0FBUzs7OztJQUFoQixVQUFpQixVQUFrQjs7O1lBQy9CLEtBQWdDLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQW5ELElBQU0saUJBQWlCLFdBQUE7O29CQUNsQixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixFQUFDO2dCQUM5RixJQUFJLGlCQUFpQixFQUFFO29CQUNuQixPQUFPLGlCQUFpQixDQUFDO2lCQUM1QjthQUNKOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLHFEQUFrQjs7OztJQUF6QixVQUEwQixTQUFvQjs7WUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxzREFBbUI7Ozs7SUFBMUIsVUFBMkIsU0FBb0I7O1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7Ozs7Ozs7Ozs7SUFuRGUscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlQYXJhbWV0ZXJzLCBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9kb2NDb21wb25lbnQsIENvbXBvZG9jTW9kdWxlLCBDb21wb2RvY1NjaGVtYSB9IGZyb20gJy4vY29tcG9kb2Mtc2NoZW1hJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcmV0cmlldmVzIHNwZWNpZmljIHByb3BlcnRpZXMgZnJvbSBjb21wb2RvYyBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9Eb2NSZXRyaWV2ZXJTZXJ2aWNlIGltcGxlbWVudHMgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnRhdGlvbkpzb246IENvbXBvZG9jU2NoZW1hW10pIHt9XG5cbiAgICBwdWJsaWMgZ2V0T3ZlcnZpZXcoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHlwZXNjcmlwdFNvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS5zb3VyY2VDb2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIdG1sU291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLnRlbXBsYXRlRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3NzU291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN0eWxlVXJsc0RhdGEgPSB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLnN0eWxlVXJsc0RhdGE7XG4gICAgICAgIGlmICghc3R5bGVVcmxzRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVVybHNEYXRhLm1hcChzdHlsZVVybCA9PiBzdHlsZVVybC5kYXRhKS5qb2luKCdcXG5cXG5cXG4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KTogQ29tcG9kb2NDb21wb25lbnQge1xuICAgICAgICBmb3IgKGNvbnN0IGRvY3VtZW50YXRpb25Kc29uIG9mIHRoaXMuZG9jdW1lbnRhdGlvbkpzb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvZG9jQ29tcG9uZW50ID0gZG9jdW1lbnRhdGlvbkpzb24uY29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9kb2NDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9kb2NDb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3R5bGVVcmxzRGF0YTogW10gfSBhcyBDb21wb2RvY0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kdWxlKG1vZHVsZU5hbWU6IHN0cmluZyk6IENvbXBvZG9jTW9kdWxlIHwgbnVsbCB7XG4gICAgICAgIGZvciAoY29uc3QgZG9jdW1lbnRhdGlvbkpzb24gb2YgdGhpcy5kb2N1bWVudGF0aW9uSnNvbikge1xuICAgICAgICAgICAgY29uc3QgY29tcG9kb2NDb21wb25lbnQgPSBkb2N1bWVudGF0aW9uSnNvbi5tb2R1bGVzLmZpbmQobW9kdWxlID0+IG1vZHVsZS5uYW1lID09PSBtb2R1bGVOYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wb2RvY0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb2RvY0NvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5wdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLmlucHV0c0NsYXNzIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRwdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLm91dHB1dHNDbGFzcyB8fCBbXTtcbiAgICB9XG59XG4iXX0=

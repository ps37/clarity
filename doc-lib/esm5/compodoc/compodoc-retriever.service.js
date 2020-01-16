/**
 * @fileoverview added by tsickle
 * Generated from: compodoc/compodoc-retriever.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
CompoDocRetrieverService = /** @class */ (function () {
    function CompoDocRetrieverService(documentationJson) {
        this.documentationJson = documentationJson;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getOverview = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.getComponent(component).description;
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getTypescriptSourceCode = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.getComponent(component).sourceCode;
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getHtmlSourceCode = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.getComponent(component).templateData;
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getCssSourceCode = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var styleUrlsData = this.getComponent(component).styleUrlsData;
        if (!styleUrlsData) {
            return;
        }
        return styleUrlsData.map((/**
         * @param {?} styleUrl
         * @return {?}
         */
        function (styleUrl) { return styleUrl.data; })).join('\n\n\n');
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.documentationJson), _c = _b.next(); !_c.done; _c = _b.next()) {
                var documentationJson = _c.value;
                /** @type {?} */
                var compodocComponent = documentationJson.components.find((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.name === component.name; }));
                if (compodocComponent) {
                    return compodocComponent;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return (/** @type {?} */ ({ styleUrlsData: [] }));
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getInputParameters = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var comp = this.getComponent(component);
        return comp.inputsClass || [];
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CompoDocRetrieverService.prototype.getOutputParameters = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var comp = this.getComponent(component);
        return comp.outputsClass || [];
    };
    return CompoDocRetrieverService;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9kb2MtcmV0cmlldmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJjb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7SUFDSSxrQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVwRCw4Q0FBVzs7OztJQUFsQixVQUFtQixTQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRU0sMERBQXVCOzs7O0lBQTlCLFVBQStCLFNBQW9CO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxvREFBaUI7Ozs7SUFBeEIsVUFBeUIsU0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVNLG1EQUFnQjs7OztJQUF2QixVQUF3QixTQUFvQjs7WUFDbEMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYTtRQUNoRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUNELE9BQU8sYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWIsQ0FBYSxFQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVPLCtDQUFZOzs7OztJQUFwQixVQUFxQixTQUFvQjs7O1lBQ3JDLEtBQWdDLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQW5ELElBQU0saUJBQWlCLFdBQUE7O29CQUNsQixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksRUFBekIsQ0FBeUIsRUFBQztnQkFDM0YsSUFBSSxpQkFBaUIsRUFBRTtvQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQztpQkFDNUI7YUFDSjs7Ozs7Ozs7O1FBQ0QsT0FBTyxtQkFBQSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBcUIsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVNLHFEQUFrQjs7OztJQUF6QixVQUEwQixTQUFvQjs7WUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxzREFBbUI7Ozs7SUFBMUIsVUFBMkIsU0FBb0I7O1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7Ozs7Ozs7Ozs7SUF6Q2UscURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlQYXJhbWV0ZXJzLCBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9kb2NDb21wb25lbnQsIENvbXBvZG9jU2NoZW1hIH0gZnJvbSAnLi9jb21wb2RvYy1zY2hlbWEnO1xuXG4vKipcbiAqIFRoaXMgc2VydmljZSByZXRyaWV2ZXMgc3BlY2lmaWMgcHJvcGVydGllcyBmcm9tIGNvbXBvZG9jIGdlbmVyYXRlZCBkb2N1bWVudGF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb0RvY1JldHJpZXZlclNlcnZpY2UgaW1wbGVtZW50cyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudGF0aW9uSnNvbjogQ29tcG9kb2NTY2hlbWFbXSkge31cblxuICAgIHB1YmxpYyBnZXRPdmVydmlldyhjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUeXBlc2NyaXB0U291cmNlQ29kZShjb21wb25lbnQ6IFR5cGU8YW55Pik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudChjb21wb25lbnQpLnNvdXJjZUNvZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEh0bWxTb3VyY2VDb2RlKGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCkudGVtcGxhdGVEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDc3NTb3VyY2VDb2RlKGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3R5bGVVcmxzRGF0YSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCkuc3R5bGVVcmxzRGF0YTtcbiAgICAgICAgaWYgKCFzdHlsZVVybHNEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVXJsc0RhdGEubWFwKHN0eWxlVXJsID0+IHN0eWxlVXJsLmRhdGEpLmpvaW4oJ1xcblxcblxcbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxhbnk+KTogQ29tcG9kb2NDb21wb25lbnQge1xuICAgICAgICBmb3IgKGNvbnN0IGRvY3VtZW50YXRpb25Kc29uIG9mIHRoaXMuZG9jdW1lbnRhdGlvbkpzb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvZG9jQ29tcG9uZW50ID0gZG9jdW1lbnRhdGlvbkpzb24uY29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9kb2NDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9kb2NDb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3R5bGVVcmxzRGF0YTogW10gfSBhcyBDb21wb2RvY0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5wdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLmlucHV0c0NsYXNzIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRwdXRQYXJhbWV0ZXJzKGNvbXBvbmVudDogVHlwZTxhbnk+KTogQXBpUGFyYW1ldGVyc1tdIHtcbiAgICAgICAgY29uc3QgY29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBjb21wLm91dHB1dHNDbGFzcyB8fCBbXTtcbiAgICB9XG59XG4iXX0=
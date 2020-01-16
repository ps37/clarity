/**
 * @fileoverview added by tsickle
 * Generated from: highlight/prism/prism-highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Injectable } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { HighlightService } from '../highlight.service';
var PrismHighlightService = /** @class */ (function (_super) {
    tslib_1.__extends(PrismHighlightService, _super);
    function PrismHighlightService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    PrismHighlightService.prototype.highlightTypescript = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.highlight(code, Prism.languages.typescript);
    };
    /**
     * @param {?} code
     * @return {?}
     */
    PrismHighlightService.prototype.highlightHtml = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.highlight(code, Prism.languages.html);
    };
    /**
     * @param {?} code
     * @return {?}
     */
    PrismHighlightService.prototype.highlightScss = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.highlight(code, Prism.languages.scss);
    };
    /**
     * @private
     * @param {?} code
     * @param {?} lang
     * @return {?}
     */
    PrismHighlightService.prototype.highlight = /**
     * @private
     * @param {?} code
     * @param {?} lang
     * @return {?}
     */
    function (code, lang) {
        return Prism.highlight(code || '', lang);
    };
    PrismHighlightService.decorators = [
        { type: Injectable }
    ];
    return PrismHighlightService;
}(HighlightService));
export { PrismHighlightService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc20taGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJoaWdobGlnaHQvcHJpc20vcHJpc20taGlnaGxpZ2h0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8scUNBQXFDLENBQUM7QUFDN0MsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQUMyQyxpREFBZ0I7SUFEM0Q7O0lBZUEsQ0FBQzs7Ozs7SUFiRyxtREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFDRCw2Q0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFDRCw2Q0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7OztJQUVPLHlDQUFTOzs7Ozs7SUFBakIsVUFBa0IsSUFBWSxFQUFFLElBQUk7UUFDaEMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBZEosVUFBVTs7SUFlWCw0QkFBQztDQUFBLEFBZkQsQ0FDMkMsZ0JBQWdCLEdBYzFEO1NBZFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0U2VydmljZSB9IGZyb20gJy4uL2hpZ2hsaWdodC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXNtSGlnaGxpZ2h0U2VydmljZSBleHRlbmRzIEhpZ2hsaWdodFNlcnZpY2Uge1xuICAgIGhpZ2hsaWdodFR5cGVzY3JpcHQoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0KTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0SHRtbChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLmh0bWwpO1xuICAgIH1cbiAgICBoaWdobGlnaHRTY3NzKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMuc2Nzcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWdobGlnaHQoY29kZTogc3RyaW5nLCBsYW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFByaXNtLmhpZ2hsaWdodChjb2RlIHx8ICcnLCBsYW5nKTtcbiAgICB9XG59XG4iXX0=
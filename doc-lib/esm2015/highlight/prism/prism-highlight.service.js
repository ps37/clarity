/**
 * @fileoverview added by tsickle
 * Generated from: highlight/prism/prism-highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Injectable } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { HighlightService } from '../highlight.service';
export class PrismHighlightService extends HighlightService {
    /**
     * @param {?} code
     * @return {?}
     */
    highlightTypescript(code) {
        return this.highlight(code, Prism.languages.typescript);
    }
    /**
     * @param {?} code
     * @return {?}
     */
    highlightHtml(code) {
        return this.highlight(code, Prism.languages.html);
    }
    /**
     * @param {?} code
     * @return {?}
     */
    highlightScss(code) {
        return this.highlight(code, Prism.languages.scss);
    }
    /**
     * @private
     * @param {?} code
     * @param {?} lang
     * @return {?}
     */
    highlight(code, lang) {
        return Prism.highlight(code || '', lang);
    }
}
PrismHighlightService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc20taGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJoaWdobGlnaHQvcHJpc20vcHJpc20taGlnaGxpZ2h0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7Ozs7O0lBQ3ZELG1CQUFtQixDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsSUFBWSxFQUFFLElBQUk7UUFDaEMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBZEosVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zY3NzJztcbmltcG9ydCB7IEhpZ2hsaWdodFNlcnZpY2UgfSBmcm9tICcuLi9oaWdobGlnaHQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbUhpZ2hsaWdodFNlcnZpY2UgZXh0ZW5kcyBIaWdobGlnaHRTZXJ2aWNlIHtcbiAgICBoaWdobGlnaHRUeXBlc2NyaXB0KGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodChjb2RlLCBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdCk7XG4gICAgfVxuICAgIGhpZ2hsaWdodEh0bWwoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0KGNvZGUsIFByaXNtLmxhbmd1YWdlcy5odG1sKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0U2Nzcyhjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQoY29kZSwgUHJpc20ubGFuZ3VhZ2VzLnNjc3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvZGU6IHN0cmluZywgbGFuZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBQcmlzbS5oaWdobGlnaHQoY29kZSB8fCAnJywgbGFuZyk7XG4gICAgfVxufVxuIl19
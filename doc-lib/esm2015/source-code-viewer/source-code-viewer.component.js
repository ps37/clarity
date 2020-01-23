/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Component, Input, Type } from '@angular/core';
import { DocumentationRetrieverService } from '../documentation-retriever.service';
import { HighlightService } from '../highlight/highlight.service';
/**
 * To display the 3 code parts(TypeScript, HTML and CSS) of a component
 */
export class SourceCodeViewerComponent {
    /**
     * @param {?} documentationRetriever
     * @param {?} highlightService
     */
    constructor(documentationRetriever, highlightService) {
        this.documentationRetriever = documentationRetriever;
        this.highlightService = highlightService;
    }
    /**
     * The component which source (typescript, html, css) will be displayed
     * @param {?} component
     * @return {?}
     */
    set component(component) {
        if (!component) {
            return;
        }
        // TODO: externalize string literals
        this.typescriptSourceCode = this.highlightService.highlightTypescript(this.documentationRetriever.getTypescriptSourceCode(component));
        this.htmlSourceCode = this.highlightService.highlightHtml(this.documentationRetriever.getHtmlSourceCode(component) || 'No html found');
        this.cssSourceCode = this.highlightService.highlightScss(this.documentationRetriever.getCssSourceCode(component) || 'No CSS found');
    }
}
SourceCodeViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'vcd-source-code-viewer',
                template: "<clr-tabs>\n    <clr-tab>\n        <button clrTabLink>Typescript</button>\n        <clr-tab-content>\n            <pre class=\"language-ts\"><code [innerHTML]=\"typescriptSourceCode\"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>HTML</button>\n        <clr-tab-content>\n            <pre class=\"language-html\"><code [innerHTML]=\"htmlSourceCode\"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>CSS</button>\n        <clr-tab-content>\n            <pre class=\"language-scss\"><code [innerHTML]=\"cssSourceCode\"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n",
                styles: ["pre{height:15rem;max-height:15rem;border-radius:3px}"]
            }] }
];
/** @nocollapse */
SourceCodeViewerComponent.ctorParameters = () => [
    { type: DocumentationRetrieverService },
    { type: HighlightService }
];
SourceCodeViewerComponent.propDecorators = {
    component: [{ type: Input }]
};
if (false) {
    /**
     * Different source codes of the component
     * @type {?}
     */
    SourceCodeViewerComponent.prototype.typescriptSourceCode;
    /** @type {?} */
    SourceCodeViewerComponent.prototype.htmlSourceCode;
    /** @type {?} */
    SourceCodeViewerComponent.prototype.cssSourceCode;
    /**
     * @type {?}
     * @private
     */
    SourceCodeViewerComponent.prototype.documentationRetriever;
    /**
     * @type {?}
     * @private
     */
    SourceCodeViewerComponent.prototype.highlightService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvZGUtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2Y2QvdWktZG9jLWxpYi8iLCJzb3VyY2VzIjpbInNvdXJjZS1jb2RlLXZpZXdlci9zb3VyY2UtY29kZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQVVsRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQVFsQyxZQUNZLHNCQUFxRCxFQUNyRCxnQkFBa0M7UUFEbEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUErQjtRQUNyRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7Ozs7OztJQUtKLElBQ0ksU0FBUyxDQUFDLFNBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPO1NBQ1Y7UUFDRCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FDakUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNyRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksZUFBZSxDQUM5RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksY0FBYyxDQUM1RSxDQUFDO0lBQ04sQ0FBQzs7O1lBcENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx3c0JBQWtEOzthQUVyRDs7OztZQVZRLDZCQUE2QjtZQUM3QixnQkFBZ0I7Ozt3QkEwQnBCLEtBQUs7Ozs7Ozs7SUFaTix5REFBNkI7O0lBQzdCLG1EQUF1Qjs7SUFDdkIsa0RBQXNCOzs7OztJQUdsQiwyREFBNkQ7Ozs7O0lBQzdELHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudGF0aW9uLXJldHJpZXZlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhpZ2hsaWdodFNlcnZpY2UgfSBmcm9tICcuLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnNlcnZpY2UnO1xuXG4vKipcbiAqIFRvIGRpc3BsYXkgdGhlIDMgY29kZSBwYXJ0cyhUeXBlU2NyaXB0LCBIVE1MIGFuZCBDU1MpIG9mIGEgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLXNvdXJjZS1jb2RlLXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvdXJjZS1jb2RlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc291cmNlLWNvZGUtdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvZGVWaWV3ZXJDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIERpZmZlcmVudCBzb3VyY2UgY29kZXMgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHR5cGVzY3JpcHRTb3VyY2VDb2RlOiBzdHJpbmc7XG4gICAgaHRtbFNvdXJjZUNvZGU6IHN0cmluZztcbiAgICBjc3NTb3VyY2VDb2RlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkb2N1bWVudGF0aW9uUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBoaWdobGlnaHRTZXJ2aWNlOiBIaWdobGlnaHRTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB3aGljaCBzb3VyY2UgKHR5cGVzY3JpcHQsIGh0bWwsIGNzcykgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHNldCBjb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBleHRlcm5hbGl6ZSBzdHJpbmcgbGl0ZXJhbHNcbiAgICAgICAgdGhpcy50eXBlc2NyaXB0U291cmNlQ29kZSA9IHRoaXMuaGlnaGxpZ2h0U2VydmljZS5oaWdobGlnaHRUeXBlc2NyaXB0KFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uUmV0cmlldmVyLmdldFR5cGVzY3JpcHRTb3VyY2VDb2RlKGNvbXBvbmVudClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5odG1sU291cmNlQ29kZSA9IHRoaXMuaGlnaGxpZ2h0U2VydmljZS5oaWdobGlnaHRIdG1sKFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uUmV0cmlldmVyLmdldEh0bWxTb3VyY2VDb2RlKGNvbXBvbmVudCkgfHwgJ05vIGh0bWwgZm91bmQnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY3NzU291cmNlQ29kZSA9IHRoaXMuaGlnaGxpZ2h0U2VydmljZS5oaWdobGlnaHRTY3NzKFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudGF0aW9uUmV0cmlldmVyLmdldENzc1NvdXJjZUNvZGUoY29tcG9uZW50KSB8fCAnTm8gQ1NTIGZvdW5kJ1xuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==
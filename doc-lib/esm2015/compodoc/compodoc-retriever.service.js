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
        return styleUrlsData.map((/**
         * @param {?} styleUrl
         * @return {?}
         */
        styleUrl => styleUrl.data)).join('\n\n\n');
    }
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    getComponent(component) {
        for (const documentationJson of this.documentationJson) {
            /** @type {?} */
            const compodocComponent = documentationJson.components.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.name === component.name));
            if (compodocComponent) {
                return compodocComponent;
            }
        }
        return (/** @type {?} */ ({ styleUrlsData: [] }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9kb2MtcmV0cmlldmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJjb21wb2RvYy9jb21wb2RvYy1yZXRyaWV2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ2pDLFlBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFcEQsV0FBVyxDQUFDLFNBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSx1QkFBdUIsQ0FBQyxTQUFvQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsU0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLFNBQW9COztjQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsT0FBTyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsU0FBb0I7UUFDckMsS0FBSyxNQUFNLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7a0JBQzlDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUM7WUFDM0YsSUFBSSxpQkFBaUIsRUFBRTtnQkFDbkIsT0FBTyxpQkFBaUIsQ0FBQzthQUM1QjtTQUNKO1FBQ0QsT0FBTyxtQkFBQSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBcUIsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLFNBQW9COztjQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLFNBQW9COztjQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7Ozs7OztJQXpDZSxxREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvcHlyaWdodCAyMDE5IFZNd2FyZSwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0yLUNsYXVzZVxuICovXG5cbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVBhcmFtZXRlcnMsIERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbi1yZXRyaWV2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb2RvY0NvbXBvbmVudCwgQ29tcG9kb2NTY2hlbWEgfSBmcm9tICcuL2NvbXBvZG9jLXNjaGVtYSc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIHJldHJpZXZlcyBzcGVjaWZpYyBwcm9wZXJ0aWVzIGZyb20gY29tcG9kb2MgZ2VuZXJhdGVkIGRvY3VtZW50YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvRG9jUmV0cmlldmVyU2VydmljZSBpbXBsZW1lbnRzIERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50YXRpb25Kc29uOiBDb21wb2RvY1NjaGVtYVtdKSB7fVxuXG4gICAgcHVibGljIGdldE92ZXJ2aWV3KGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCkuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldFR5cGVzY3JpcHRTb3VyY2VDb2RlKGNvbXBvbmVudDogVHlwZTxhbnk+KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KGNvbXBvbmVudCkuc291cmNlQ29kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHRtbFNvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS50ZW1wbGF0ZURhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENzc1NvdXJjZUNvZGUoY29tcG9uZW50OiBUeXBlPGFueT4pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzdHlsZVVybHNEYXRhID0gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KS5zdHlsZVVybHNEYXRhO1xuICAgICAgICBpZiAoIXN0eWxlVXJsc0RhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVVcmxzRGF0YS5tYXAoc3R5bGVVcmwgPT4gc3R5bGVVcmwuZGF0YSkuam9pbignXFxuXFxuXFxuJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4pOiBDb21wb2RvY0NvbXBvbmVudCB7XG4gICAgICAgIGZvciAoY29uc3QgZG9jdW1lbnRhdGlvbkpzb24gb2YgdGhpcy5kb2N1bWVudGF0aW9uSnNvbikge1xuICAgICAgICAgICAgY29uc3QgY29tcG9kb2NDb21wb25lbnQgPSBkb2N1bWVudGF0aW9uSnNvbi5jb21wb25lbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wb2RvY0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb2RvY0NvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdHlsZVVybHNEYXRhOiBbXSB9IGFzIENvbXBvZG9jQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnB1dFBhcmFtZXRlcnMoY29tcG9uZW50OiBUeXBlPGFueT4pOiBBcGlQYXJhbWV0ZXJzW10ge1xuICAgICAgICBjb25zdCBjb21wID0gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXAuaW5wdXRzQ2xhc3MgfHwgW107XG4gICAgfVxuXG4gICAgcHVibGljIGdldE91dHB1dFBhcmFtZXRlcnMoY29tcG9uZW50OiBUeXBlPGFueT4pOiBBcGlQYXJhbWV0ZXJzW10ge1xuICAgICAgICBjb25zdCBjb21wID0gdGhpcy5nZXRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbXAub3V0cHV0c0NsYXNzIHx8IFtdO1xuICAgIH1cbn1cbiJdfQ==
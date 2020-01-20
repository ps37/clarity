/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
export class ExampleViewerComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        /**
         * For showing and hiding of {\@link SourceCodeViewerComponent} in the HTML
         */
        this.showSourceCode = false;
    }
    /**
     * @param {?} exampleEntry
     * @return {?}
     */
    set exampleEntry(exampleEntry) {
        this._exampleEntry = exampleEntry;
        this.createExample();
    }
    /**
     * @return {?}
     */
    get exampleEntry() {
        return this._exampleEntry;
    }
    /**
     * @private
     * @return {?}
     */
    createExample() {
        this.exampleContainer.clear();
        /** @type {?} */
        const exampleEntry = this.exampleEntry;
        if (!exampleEntry || !exampleEntry.component) {
            return;
        }
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(exampleEntry.component);
        this.exampleContainer.createComponent(factory);
    }
}
ExampleViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'vcd-example-viewer',
                template: "<div class=\"card\">\n    <div class=\"card-header-main\">\n        <div class=\"card-header\">\n            {{ exampleEntry?.title }}\n        </div>\n        <div class=\"example-button-container\" [ngClass]=\"{ 'example-shown': showSourceCode }\">\n            <clr-icon shape=\"code\" size=\"32\" (click)=\"showSourceCode = !showSourceCode\"> </clr-icon>\n        </div>\n    </div>\n\n    <div class=\"card-block source-code-container\" *ngIf=\"showSourceCode\">\n        <vcd-source-code-viewer [component]=\"exampleEntry?.component\"> </vcd-source-code-viewer>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"card-text\">\n            <template #exampleContainer> </template>\n        </div>\n    </div>\n</div>\n",
                styles: [".card-header-main{display:flex}.card-header-main .card-header{flex:1}.card-header-main .example-button-container{display:flex;margin:.5rem .5rem 0 0}.card-header-main .example-button-container.example-shown{border-radius:3px 3px 0 0;background-color:#d8e3e9}.card-header-main .example-button-container clr-icon{-ms-grid-row-align:center;align-self:center}.source-code-container{border-radius:3px 0 3px 3px;background-color:#d8e3e9;margin:0 .5rem}"]
            }] }
];
/** @nocollapse */
ExampleViewerComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
ExampleViewerComponent.propDecorators = {
    exampleEntry: [{ type: Input }],
    exampleContainer: [{ type: ViewChild, args: ['exampleContainer', { static: true, read: ViewContainerRef },] }]
};
if (false) {
    /**
     * For showing and hiding of {\@link SourceCodeViewerComponent} in the HTML
     * @type {?}
     */
    ExampleViewerComponent.prototype.showSourceCode;
    /**
     * Gets the example entry from documentation entry and renders the example component
     * @type {?}
     * @private
     */
    ExampleViewerComponent.prototype._exampleEntry;
    /**
     * Container for rendering the example component
     * @type {?}
     */
    ExampleViewerComponent.prototype.exampleContainer;
    /**
     * @type {?}
     * @private
     */
    ExampleViewerComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF4RyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTS9CLFlBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCOzs7O1FBRnRELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBRWtDLENBQUM7Ozs7O0lBTTFELElBQ0ksWUFBWSxDQUFDLFlBQTBCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBUU8sYUFBYTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O2NBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWTtRQUN0QyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUMxQyxPQUFPO1NBQ1Y7O2NBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQXhDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsOHVCQUE4Qzs7YUFFakQ7Ozs7WUFQbUIsd0JBQXdCOzs7MkJBb0J2QyxLQUFLOytCQVlMLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7Ozs7O0lBcEJ2RSxnREFBdUI7Ozs7OztJQU92QiwrQ0FBb0M7Ozs7O0lBYXBDLGtEQUNtQzs7Ozs7SUFuQnZCLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4YW1wbGVFbnRyeSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZjZC1leGFtcGxlLXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leGFtcGxlLXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlVmlld2VyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBGb3Igc2hvd2luZyBhbmQgaGlkaW5nIG9mIHtAbGluayBTb3VyY2VDb2RlVmlld2VyQ29tcG9uZW50fSBpbiB0aGUgSFRNTFxuICAgICAqL1xuICAgIHNob3dTb3VyY2VDb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBleGFtcGxlIGVudHJ5IGZyb20gZG9jdW1lbnRhdGlvbiBlbnRyeSBhbmQgcmVuZGVycyB0aGUgZXhhbXBsZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9leGFtcGxlRW50cnk6IEV4YW1wbGVFbnRyeTtcbiAgICBASW5wdXQoKVxuICAgIHNldCBleGFtcGxlRW50cnkoZXhhbXBsZUVudHJ5OiBFeGFtcGxlRW50cnkpIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZUVudHJ5ID0gZXhhbXBsZUVudHJ5O1xuICAgICAgICB0aGlzLmNyZWF0ZUV4YW1wbGUoKTtcbiAgICB9XG4gICAgZ2V0IGV4YW1wbGVFbnRyeSgpOiBFeGFtcGxlRW50cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhhbXBsZUVudHJ5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5lciBmb3IgcmVuZGVyaW5nIHRoZSBleGFtcGxlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGQoJ2V4YW1wbGVDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICAgIGV4YW1wbGVDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgICBwcml2YXRlIGNyZWF0ZUV4YW1wbGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXhhbXBsZUNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICBjb25zdCBleGFtcGxlRW50cnkgPSB0aGlzLmV4YW1wbGVFbnRyeTtcbiAgICAgICAgaWYgKCFleGFtcGxlRW50cnkgfHwgIWV4YW1wbGVFbnRyeS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShleGFtcGxlRW50cnkuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5leGFtcGxlQ29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICB9XG59XG4iXX0=
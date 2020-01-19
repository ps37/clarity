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
var ExampleViewerComponent = /** @class */ (function () {
    function ExampleViewerComponent(resolver) {
        this.resolver = resolver;
        /**
         * For showing and hiding of {\@link SourceCodeViewerComponent} in the HTML
         */
        this.showSourceCode = false;
    }
    Object.defineProperty(ExampleViewerComponent.prototype, "exampleEntry", {
        get: /**
         * @return {?}
         */
        function () {
            return this._exampleEntry;
        },
        set: /**
         * @param {?} exampleEntry
         * @return {?}
         */
        function (exampleEntry) {
            this._exampleEntry = exampleEntry;
            this.createExample();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ExampleViewerComponent.prototype.createExample = /**
     * @private
     * @return {?}
     */
    function () {
        this.exampleContainer.clear();
        /** @type {?} */
        var exampleEntry = this.exampleEntry;
        if (!exampleEntry || !exampleEntry.component) {
            return;
        }
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(exampleEntry.component);
        this.exampleContainer.createComponent(factory);
    };
    ExampleViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vcd-example-viewer',
                    template: "<div class=\"card\">\n    <div class=\"card-header-main\">\n        <div class=\"card-header\">\n            {{ exampleEntry?.title }}\n        </div>\n        <div class=\"example-button-container\" [ngClass]=\"{ 'example-shown': showSourceCode }\">\n            <clr-icon shape=\"code\" size=\"32\" (click)=\"showSourceCode = !showSourceCode\"> </clr-icon>\n        </div>\n    </div>\n\n    <div class=\"card-block source-code-container\" *ngIf=\"showSourceCode\">\n        <vcd-source-code-viewer [component]=\"exampleEntry?.component\"> </vcd-source-code-viewer>\n    </div>\n\n    <div class=\"card-block\">\n        <div class=\"card-text\">\n            <vcd-overview-viewer [isNoOverviewMessageShown]=\"false\" [component]=\"exampleEntry?.component\"> </vcd-overview-viewer>\n            <template #exampleContainer> </template>\n        </div>\n    </div>\n</div>\n",
                    styles: [".card-header-main{display:flex}.card-header-main .card-header{flex:1}.card-header-main .example-button-container{display:flex;margin:.5rem .5rem 0 0}.card-header-main .example-button-container.example-shown{border-radius:3px 3px 0 0;background-color:#d8e3e9}.card-header-main .example-button-container clr-icon{-ms-grid-row-align:center;align-self:center}.source-code-container{border-radius:3px 0 3px 3px;background-color:#d8e3e9;margin:0 .5rem}:host ::ng-deep vcd-overview-viewer>div>p{margin-bottom:10px}"]
                }] }
    ];
    /** @nocollapse */
    ExampleViewerComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    ExampleViewerComponent.propDecorators = {
        exampleEntry: [{ type: Input }],
        exampleContainer: [{ type: ViewChild, args: ['exampleContainer', { static: true, read: ViewContainerRef },] }]
    };
    return ExampleViewerComponent;
}());
export { ExampleViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RztJQVdJLGdDQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjs7OztRQUZ0RCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUVrQyxDQUFDO0lBTTFELHNCQUNJLGdEQUFZOzs7O1FBSWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBUEQsVUFDaUIsWUFBMEI7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBOzs7OztJQVdPLDhDQUFhOzs7O0lBQXJCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDdEMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDMUMsT0FBTztTQUNWOztZQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDN0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkF4Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHUzQkFBOEM7O2lCQUVqRDs7OztnQkFQbUIsd0JBQXdCOzs7K0JBb0J2QyxLQUFLO21DQVlMLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztJQVkzRSw2QkFBQztDQUFBLEFBekNELElBeUNDO1NBcENZLHNCQUFzQjs7Ozs7O0lBSS9CLGdEQUF1Qjs7Ozs7O0lBT3ZCLCtDQUFvQzs7Ozs7SUFhcEMsa0RBQ21DOzs7OztJQW5CdkIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhhbXBsZUVudHJ5IH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLWV4YW1wbGUtdmlld2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVWaWV3ZXJDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEZvciBzaG93aW5nIGFuZCBoaWRpbmcgb2Yge0BsaW5rIFNvdXJjZUNvZGVWaWV3ZXJDb21wb25lbnR9IGluIHRoZSBIVE1MXG4gICAgICovXG4gICAgc2hvd1NvdXJjZUNvZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGV4YW1wbGUgZW50cnkgZnJvbSBkb2N1bWVudGF0aW9uIGVudHJ5IGFuZCByZW5kZXJzIHRoZSBleGFtcGxlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgX2V4YW1wbGVFbnRyeTogRXhhbXBsZUVudHJ5O1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGV4YW1wbGVFbnRyeShleGFtcGxlRW50cnk6IEV4YW1wbGVFbnRyeSkge1xuICAgICAgICB0aGlzLl9leGFtcGxlRW50cnkgPSBleGFtcGxlRW50cnk7XG4gICAgICAgIHRoaXMuY3JlYXRlRXhhbXBsZSgpO1xuICAgIH1cbiAgICBnZXQgZXhhbXBsZUVudHJ5KCk6IEV4YW1wbGVFbnRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGFtcGxlRW50cnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udGFpbmVyIGZvciByZW5kZXJpbmcgdGhlIGV4YW1wbGUgY29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZXhhbXBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgZXhhbXBsZUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIHByaXZhdGUgY3JlYXRlRXhhbXBsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leGFtcGxlQ29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IGV4YW1wbGVFbnRyeSA9IHRoaXMuZXhhbXBsZUVudHJ5O1xuICAgICAgICBpZiAoIWV4YW1wbGVFbnRyeSB8fCAhZXhhbXBsZUVudHJ5LmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGV4YW1wbGVFbnRyeS5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmV4YW1wbGVDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIH1cbn1cbiJdfQ==
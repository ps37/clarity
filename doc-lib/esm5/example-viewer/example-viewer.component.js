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
import { DocumentationRetrieverService } from '../documentation-retriever.service';
import { StackBlitzWriterService } from '../stack-blitz-writer.service';
var ExampleViewerComponent = /** @class */ (function() {
  function ExampleViewerComponent(resolver, docRetriever, stackblitzWriter) {
    this.resolver = resolver;
    this.docRetriever = docRetriever;
    this.stackblitzWriter = stackblitzWriter;
    /**
     * For showing and hiding of {\@link SourceCodeViewerComponent} in the HTML
     */
    this.showSourceCode = false;
  }
  Object.defineProperty(ExampleViewerComponent.prototype, 'exampleEntry', {
    /**
     * @return {?}
     */
    get: function() {
      return this._exampleEntry;
    },
    /**
     * @param {?} exampleEntry
     * @return {?}
     */
    set: function(exampleEntry) {
      this._exampleEntry = exampleEntry;
      this.createExample();
    },
    enumerable: true,
    configurable: true,
  });
  /**
   * @private
   * @return {?}
   */
  ExampleViewerComponent.prototype.createExample /**
   * @private
   * @return {?}
   */ = function() {
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
  /**
   * @return {?}
   */
  ExampleViewerComponent.prototype.openStackBlitz /**
   * @return {?}
   */ = function() {
    this.stackblitzWriter.openStackBlitz(this.exampleEntry);
  };
  ExampleViewerComponent.decorators = [
    {
      type: Component,
      args: [
        {
          selector: 'vcd-example-viewer',
          template:
            '<div class="card">\n    <div class="card-header-main">\n        <div class="card-header">\n            {{ exampleEntry?.title }}\n        </div>\n\n        <div class="example-button-container" [ngClass]="{ \'example-shown\': showSourceCode }">\n            <clr-icon shape="play" size="32" class="is-solid" (click)="openStackBlitz()"></clr-icon>\n            <clr-icon shape="code" size="32" (click)="showSourceCode = !showSourceCode"> </clr-icon>\n        </div>\n    </div>\n\n    <div class="card-block source-code-container" *ngIf="showSourceCode">\n        <vcd-source-code-viewer [component]="exampleEntry?.component"> </vcd-source-code-viewer>\n    </div>\n    <div class="card-block">\n        <div class="card-text">\n            <vcd-overview-viewer\n                [isNoOverviewMessageShown]="false"\n                [component]="exampleEntry?.component"\n            ></vcd-overview-viewer>\n            <template #exampleContainer> </template>\n        </div>\n    </div>\n</div>\n',
          styles: [
            '.card-header-main{display:flex}.card-header-main .card-header{flex:1}.card-header-main .example-button-container{display:flex;margin:.5rem .5rem 0 0}.card-header-main .example-button-container.example-shown{border-radius:3px 3px 0 0;background-color:#d8e3e9}.card-header-main .example-button-container clr-icon{-ms-grid-row-align:center;align-self:center}.source-code-container{border-radius:3px 0 3px 3px;background-color:#d8e3e9;margin:0 .5rem}:host ::ng-deep vcd-overview-viewer>div>p{margin-bottom:10px}',
          ],
        },
      ],
    },
  ];
  /** @nocollapse */
  ExampleViewerComponent.ctorParameters = function() {
    return [
      { type: ComponentFactoryResolver },
      { type: DocumentationRetrieverService },
      { type: StackBlitzWriterService },
    ];
  };
  ExampleViewerComponent.propDecorators = {
    exampleEntry: [{ type: Input }],
    exampleContainer: [{ type: ViewChild, args: ['exampleContainer', { static: true, read: ViewContainerRef }] }],
  };
  return ExampleViewerComponent;
})();
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
  /**
   * @type {?}
   * @private
   */
  ExampleViewerComponent.prototype.docRetriever;
  /**
   * @type {?}
   * @private
   */
  ExampleViewerComponent.prototype.stackblitzWriter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV4RTtJQVdJLGdDQUNZLFFBQWtDLEVBQ2xDLFlBQTJDLEVBQzNDLGdCQUF5QztRQUZ6QyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBK0I7UUFDM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5Qjs7OztRQUxyRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQU1wQixDQUFDO0lBTUosc0JBQ0ksZ0RBQVk7Ozs7UUFLaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7Ozs7UUFSRCxVQUNpQixZQUEwQjtZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7O0lBWU8sOENBQWE7Ozs7SUFBckI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWTtRQUN0QyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUMxQyxPQUFPO1NBQ1Y7O1lBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCwrQ0FBYzs7O0lBQWQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFqREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9oQ0FBOEM7O2lCQUVqRDs7OztnQkFUbUIsd0JBQXdCO2dCQUVuQyw2QkFBNkI7Z0JBQzdCLHVCQUF1Qjs7OytCQXVCM0IsS0FBSzttQ0FhTCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUFnQjNFLDZCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksc0JBQXNCOzs7Ozs7SUFJL0IsZ0RBQXVCOzs7Ozs7SUFXdkIsK0NBQW9DOzs7OztJQWNwQyxrREFDbUM7Ozs7O0lBdkIvQiwwQ0FBMEM7Ozs7O0lBQzFDLDhDQUFtRDs7Ozs7SUFDbkQsa0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhhbXBsZUVudHJ5IH0gZnJvbSAnLi4vZG9jdW1lbnRhdGlvbic7XG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhY2tCbGl0eldyaXRlclNlcnZpY2UgfSBmcm9tICcuLi9zdGFjay1ibGl0ei13cml0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmNkLWV4YW1wbGUtdmlld2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVWaWV3ZXJDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEZvciBzaG93aW5nIGFuZCBoaWRpbmcgb2Yge0BsaW5rIFNvdXJjZUNvZGVWaWV3ZXJDb21wb25lbnR9IGluIHRoZSBIVE1MXG4gICAgICovXG4gICAgc2hvd1NvdXJjZUNvZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgIHByaXZhdGUgZG9jUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdGFja2JsaXR6V3JpdGVyOiBTdGFja0JsaXR6V3JpdGVyU2VydmljZVxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGV4YW1wbGUgZW50cnkgZnJvbSBkb2N1bWVudGF0aW9uIGVudHJ5IGFuZCByZW5kZXJzIHRoZSBleGFtcGxlIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgX2V4YW1wbGVFbnRyeTogRXhhbXBsZUVudHJ5O1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGV4YW1wbGVFbnRyeShleGFtcGxlRW50cnk6IEV4YW1wbGVFbnRyeSkge1xuICAgICAgICB0aGlzLl9leGFtcGxlRW50cnkgPSBleGFtcGxlRW50cnk7XG4gICAgICAgIHRoaXMuY3JlYXRlRXhhbXBsZSgpO1xuICAgIH1cblxuICAgIGdldCBleGFtcGxlRW50cnkoKTogRXhhbXBsZUVudHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4YW1wbGVFbnRyeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250YWluZXIgZm9yIHJlbmRlcmluZyB0aGUgZXhhbXBsZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkKCdleGFtcGxlQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgICBleGFtcGxlQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVFeGFtcGxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4YW1wbGVDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgZXhhbXBsZUVudHJ5ID0gdGhpcy5leGFtcGxlRW50cnk7XG4gICAgICAgIGlmICghZXhhbXBsZUVudHJ5IHx8ICFleGFtcGxlRW50cnkuY29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZXhhbXBsZUVudHJ5LmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZXhhbXBsZUNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgfVxuXG4gICAgb3BlblN0YWNrQmxpdHooKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhY2tibGl0eldyaXRlci5vcGVuU3RhY2tCbGl0eih0aGlzLmV4YW1wbGVFbnRyeSk7XG4gICAgfVxufVxuIl19

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
export class ExampleViewerComponent {
  /**
   * @param {?} resolver
   * @param {?} docRetriever
   * @param {?} stackblitzWriter
   */
  constructor(resolver, docRetriever, stackblitzWriter) {
    this.resolver = resolver;
    this.docRetriever = docRetriever;
    this.stackblitzWriter = stackblitzWriter;
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
  /**
   * @return {?}
   */
  openStackBlitz() {
    this.stackblitzWriter.openStackBlitz(this.exampleEntry);
  }
}
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
ExampleViewerComponent.ctorParameters = () => [
  { type: ComponentFactoryResolver },
  { type: DocumentationRetrieverService },
  { type: StackBlitzWriterService },
];
ExampleViewerComponent.propDecorators = {
  exampleEntry: [{ type: Input }],
  exampleContainer: [{ type: ViewChild, args: ['exampleContainer', { static: true, read: ViewContainerRef }] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZjZC91aS1kb2MtbGliLyIsInNvdXJjZXMiOlsiZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU94RSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFNL0IsWUFDWSxRQUFrQyxFQUNsQyxZQUEyQyxFQUMzQyxnQkFBeUM7UUFGekMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQStCO1FBQzNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7Ozs7UUFMckQsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFNcEIsQ0FBQzs7Ozs7SUFNSixJQUNJLFlBQVksQ0FBQyxZQUEwQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDOzs7OztJQVFPLGFBQWE7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztjQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDdEMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDMUMsT0FBTztTQUNWOztjQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDN0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQWpESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsb2hDQUE4Qzs7YUFFakQ7Ozs7WUFUbUIsd0JBQXdCO1lBRW5DLDZCQUE2QjtZQUM3Qix1QkFBdUI7OzsyQkF1QjNCLEtBQUs7K0JBYUwsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7Ozs7SUF6QnZFLGdEQUF1Qjs7Ozs7O0lBV3ZCLCtDQUFvQzs7Ozs7SUFjcEMsa0RBQ21DOzs7OztJQXZCL0IsMENBQTBDOzs7OztJQUMxQyw4Q0FBbUQ7Ozs7O0lBQ25ELGtEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4YW1wbGVFbnRyeSB9IGZyb20gJy4uL2RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudGF0aW9uLXJldHJpZXZlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RhY2stYmxpdHotd3JpdGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZjZC1leGFtcGxlLXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leGFtcGxlLXZpZXdlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlVmlld2VyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBGb3Igc2hvd2luZyBhbmQgaGlkaW5nIG9mIHtAbGluayBTb3VyY2VDb2RlVmlld2VyQ29tcG9uZW50fSBpbiB0aGUgSFRNTFxuICAgICAqL1xuICAgIHNob3dTb3VyY2VDb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICBwcml2YXRlIGRvY1JldHJpZXZlcjogRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc3RhY2tibGl0eldyaXRlcjogU3RhY2tCbGl0eldyaXRlclNlcnZpY2VcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBleGFtcGxlIGVudHJ5IGZyb20gZG9jdW1lbnRhdGlvbiBlbnRyeSBhbmQgcmVuZGVycyB0aGUgZXhhbXBsZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9leGFtcGxlRW50cnk6IEV4YW1wbGVFbnRyeTtcbiAgICBASW5wdXQoKVxuICAgIHNldCBleGFtcGxlRW50cnkoZXhhbXBsZUVudHJ5OiBFeGFtcGxlRW50cnkpIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZUVudHJ5ID0gZXhhbXBsZUVudHJ5O1xuICAgICAgICB0aGlzLmNyZWF0ZUV4YW1wbGUoKTtcbiAgICB9XG5cbiAgICBnZXQgZXhhbXBsZUVudHJ5KCk6IEV4YW1wbGVFbnRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leGFtcGxlRW50cnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udGFpbmVyIGZvciByZW5kZXJpbmcgdGhlIGV4YW1wbGUgY29tcG9uZW50XG4gICAgICovXG4gICAgQFZpZXdDaGlsZCgnZXhhbXBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gICAgZXhhbXBsZUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIHByaXZhdGUgY3JlYXRlRXhhbXBsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leGFtcGxlQ29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IGV4YW1wbGVFbnRyeSA9IHRoaXMuZXhhbXBsZUVudHJ5O1xuICAgICAgICBpZiAoIWV4YW1wbGVFbnRyeSB8fCAhZXhhbXBsZUVudHJ5LmNvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGV4YW1wbGVFbnRyeS5jb21wb25lbnQpO1xuICAgICAgICB0aGlzLmV4YW1wbGVDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIH1cblxuICAgIG9wZW5TdGFja0JsaXR6KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YWNrYmxpdHpXcml0ZXIub3BlblN0YWNrQmxpdHoodGhpcy5leGFtcGxlRW50cnkpO1xuICAgIH1cbn1cbiJdfQ==

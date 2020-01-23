/**
 * @fileoverview added by tsickle
 * Generated from: stack-blitz-writer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
/**
 * @record
 */
export function StackBlitzData() {}
/** @type {?} */
const STACKBLITZ_URL = 'https://stackblitz.com/run';
/**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
export class StackBlitzWriterService {
  /**
   * @param {?} stackBlitzData
   * @param {?} docRetriever
   */
  constructor(stackBlitzData, docRetriever) {
    this.stackBlitzData = stackBlitzData;
    this.docRetriever = docRetriever;
  }
  /**
   * We should add the ability to specify a form target instead of always doing a new window
   * @param {?} entry The example to be displayed in StackBlitz
   * @return {?}
   */
  openStackBlitz(entry) {
    /** @type {?} */
    const exampleComponent = this.docRetriever.getComponent(entry.component);
    /** @type {?} */
    const exampleModule = this.docRetriever.getModule(
      exampleComponent.name.replace('ExampleComponent', 'ExampleModule')
    );
    /** @type {?} */
    const moduleName = exampleModule.name;
    /** @type {?} */
    const moduleFileName = getFileName(exampleModule.path);
    /** @type {?} */
    const componentTagName = exampleComponent.selector;
    /** @type {?} */
    const componentFileName = getFileName(exampleComponent.file);
    /** @type {?} */
    const form = document.createElement('form');
    /** @type {?} */
    const encodedFile = encodeURIComponent(`src/app/${componentFileName}`);
    form.action = `${STACKBLITZ_URL}?file=${encodedFile}`;
    form.method = 'post';
    form.target = '_blank';
    // First replace the placeholders and add any other files created by the stackblitz writer
    Object.keys(this.stackBlitzData).forEach(
      /**
       * @param {?} key
       * @return {?}
       */
      key => {
        /** @type {?} */
        let data = this.stackBlitzData[key];
        if (key.includes('app.module.ts')) {
          data = data
            .replace(/__EXAMPLE_MODULE_FILE_IMPORT/g, moduleFileName.replace(/\.ts$/, ''))
            .replace(/__EXAMPLE_MODULE/g, moduleName);
        }
        if (key.includes('app.component.html')) {
          data = data.replace(/__EXAMPLE_TAG/g, componentTagName);
        }
        if (typeof data === 'object') {
          this._appendFormInput(form, key, JSON.stringify(data));
        } else {
          this._appendFormInput(form, key, data);
        }
      }
    );
    // Add the example components
    this._appendFormInput(form, `project[files][src/app/${componentFileName}]`, exampleComponent.sourceCode);
    if (exampleComponent.templateUrl && exampleComponent.templateUrl.length > 0) {
      /** @type {?} */
      const fileName = removeLeadingDotSlash(exampleComponent.templateUrl[0]);
      this._appendFormInput(form, `project[files][src/app/${fileName}]`, exampleComponent.templateData);
    }
    if (exampleComponent.styleUrlsData && exampleComponent.styleUrlsData.length > 0) {
      /** @type {?} */
      const styleData = exampleComponent.styleUrlsData[0];
      /** @type {?} */
      const fileName = removeLeadingDotSlash(styleData.styleUrl);
      this._appendFormInput(form, `project[files][src/app/${fileName}]`, styleData.data);
    }
    this._appendFormInput(form, `project[files][src/app/${moduleFileName}]`, exampleModule.sourceCode);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    /**
     *
     * @param {?} fileName a fileName path that may start with ./
     * @return {?} A filename, without a
     */
    function removeLeadingDotSlash(fileName) {
      if (fileName.startsWith('./')) {
        fileName = fileName.slice(2);
      }
      return fileName;
    }
    /**
     * Returns everything after the last slash
     * @param {?} path Path to be shortened to just its filename
     * @return {?}
     */
    function getFileName(path) {
      return path.slice(path.lastIndexOf('/') + 1);
    }
  }
  /**
   * Appends the name and value as an input to the form.
   * @param {?} form
   * @param {?} name
   * @param {?} value
   * @return {?}
   */
  _appendFormInput(form, name, value) {
    /** @type {?} */
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
}
if (false) {
  /**
   * @type {?}
   * @private
   */
  StackBlitzWriterService.prototype.stackBlitzData;
  /**
   * @type {?}
   * @private
   */
  StackBlitzWriterService.prototype.docRetriever;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmxpdHotd3JpdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJzdGFjay1ibGl0ei13cml0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxvQ0FFQzs7TUFFSyxjQUFjLEdBQUcsNEJBQTRCOzs7O0FBS25ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBQ2hDLFlBQW9CLGNBQThCLEVBQVUsWUFBMkM7UUFBbkYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQStCO0lBQUcsQ0FBQzs7Ozs7O0lBTTNHLGNBQWMsQ0FBQyxLQUFtQjs7Y0FDeEIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7Y0FDbEUsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUM3QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUNyRTs7Y0FFSyxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUk7O2NBQy9CLGNBQWMsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7Y0FDaEQsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsUUFBUTs7Y0FDNUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzs7Y0FFdEQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztjQUNyQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxjQUFjLFNBQVMsV0FBVyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFD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QUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxJQUFxQixFQUFFLElBQVksRUFBRSxLQUFhOztjQUN6RCxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0o7Ozs7OztJQTFGZSxpREFBc0M7Ozs7O0lBQUUsK0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb3B5cmlnaHQgMjAxOSBWTXdhcmUsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMi1DbGF1c2VcbiAqL1xuXG5pbXBvcnQgeyBFeGFtcGxlRW50cnkgfSBmcm9tICcuL2RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvblJldHJpZXZlclNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50YXRpb24tcmV0cmlldmVyLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrQmxpdHpEYXRhIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmNvbnN0IFNUQUNLQkxJVFpfVVJMID0gJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vcnVuJztcblxuLyoqXG4gKiBNZXJnZXMgdGhlIGdlbmVyYXRlZCB0ZW1wbGF0ZSBzdGFja2JsaXR6IGRhdGEgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBnaXZlbiBleGFtcGxlIGFuZCBzdWJtaXRzIHRoZSBmb3JtIHRvIGEgbmV3IHBhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrQmxpdHpXcml0ZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YWNrQmxpdHpEYXRhOiBTdGFja0JsaXR6RGF0YSwgcHJpdmF0ZSBkb2NSZXRyaWV2ZXI6IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlKSB7fVxuXG4gICAgLyoqXG4gICAgICogV2Ugc2hvdWxkIGFkZCB0aGUgYWJpbGl0eSB0byBzcGVjaWZ5IGEgZm9ybSB0YXJnZXQgaW5zdGVhZCBvZiBhbHdheXMgZG9pbmcgYSBuZXcgd2luZG93XG4gICAgICogQHBhcmFtIGVudHJ5IFRoZSBleGFtcGxlIHRvIGJlIGRpc3BsYXllZCBpbiBTdGFja0JsaXR6XG4gICAgICovXG4gICAgb3BlblN0YWNrQmxpdHooZW50cnk6IEV4YW1wbGVFbnRyeSk6IHZvaWQge1xuICAgICAgICBjb25zdCBleGFtcGxlQ29tcG9uZW50ID0gdGhpcy5kb2NSZXRyaWV2ZXIuZ2V0Q29tcG9uZW50KGVudHJ5LmNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGV4YW1wbGVNb2R1bGUgPSB0aGlzLmRvY1JldHJpZXZlci5nZXRNb2R1bGUoXG4gICAgICAgICAgICBleGFtcGxlQ29tcG9uZW50Lm5hbWUucmVwbGFjZSgnRXhhbXBsZUNvbXBvbmVudCcsICdFeGFtcGxlTW9kdWxlJylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gZXhhbXBsZU1vZHVsZS5uYW1lO1xuICAgICAgICBjb25zdCBtb2R1bGVGaWxlTmFtZSA9IGdldEZpbGVOYW1lKGV4YW1wbGVNb2R1bGUucGF0aCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFRhZ05hbWUgPSBleGFtcGxlQ29tcG9uZW50LnNlbGVjdG9yO1xuICAgICAgICBjb25zdCBjb21wb25lbnRGaWxlTmFtZSA9IGdldEZpbGVOYW1lKGV4YW1wbGVDb21wb25lbnQuZmlsZSk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZW5jb2RlZEZpbGUgPSBlbmNvZGVVUklDb21wb25lbnQoYHNyYy9hcHAvJHtjb21wb25lbnRGaWxlTmFtZX1gKTtcbiAgICAgICAgZm9ybS5hY3Rpb24gPSBgJHtTVEFDS0JMSVRaX1VSTH0/ZmlsZT0ke2VuY29kZWRGaWxlfWA7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuICAgICAgICBmb3JtLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gICAgICAgIC8vIEZpcnN0IHJlcGxhY2UgdGhlIHBsYWNlaG9sZGVycyBhbmQgYWRkIGFueSBvdGhlciBmaWxlcyBjcmVhdGVkIGJ5IHRoZSBzdGFja2JsaXR6IHdyaXRlclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YWNrQmxpdHpEYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc3RhY2tCbGl0ekRhdGFba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ2FwcC5tb2R1bGUudHMnKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX0VYQU1QTEVfTU9EVUxFX0ZJTEVfSU1QT1JUL2csIG1vZHVsZUZpbGVOYW1lLnJlcGxhY2UoL1xcLnRzJC8sICcnKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fRVhBTVBMRV9NT0RVTEUvZywgbW9kdWxlTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ2FwcC5jb21wb25lbnQuaHRtbCcpKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvX19FWEFNUExFX1RBRy9nLCBjb21wb25lbnRUYWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRGb3JtSW5wdXQoZm9ybSwga2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZEZvcm1JbnB1dChmb3JtLCBrZXksIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgdGhlIGV4YW1wbGUgY29tcG9uZW50c1xuICAgICAgICB0aGlzLl9hcHBlbmRGb3JtSW5wdXQoZm9ybSwgYHByb2plY3RbZmlsZXNdW3NyYy9hcHAvJHtjb21wb25lbnRGaWxlTmFtZX1dYCwgZXhhbXBsZUNvbXBvbmVudC5zb3VyY2VDb2RlKTtcblxuICAgICAgICBpZiAoZXhhbXBsZUNvbXBvbmVudC50ZW1wbGF0ZVVybCAmJiBleGFtcGxlQ29tcG9uZW50LnRlbXBsYXRlVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gcmVtb3ZlTGVhZGluZ0RvdFNsYXNoKGV4YW1wbGVDb21wb25lbnQudGVtcGxhdGVVcmxbMF0pO1xuICAgICAgICAgICAgdGhpcy5fYXBwZW5kRm9ybUlucHV0KGZvcm0sIGBwcm9qZWN0W2ZpbGVzXVtzcmMvYXBwLyR7ZmlsZU5hbWV9XWAsIGV4YW1wbGVDb21wb25lbnQudGVtcGxhdGVEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGFtcGxlQ29tcG9uZW50LnN0eWxlVXJsc0RhdGEgJiYgZXhhbXBsZUNvbXBvbmVudC5zdHlsZVVybHNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IGV4YW1wbGVDb21wb25lbnQuc3R5bGVVcmxzRGF0YVswXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gcmVtb3ZlTGVhZGluZ0RvdFNsYXNoKHN0eWxlRGF0YS5zdHlsZVVybCk7XG4gICAgICAgICAgICB0aGlzLl9hcHBlbmRGb3JtSW5wdXQoZm9ybSwgYHByb2plY3RbZmlsZXNdW3NyYy9hcHAvJHtmaWxlTmFtZX1dYCwgc3R5bGVEYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FwcGVuZEZvcm1JbnB1dChmb3JtLCBgcHJvamVjdFtmaWxlc11bc3JjL2FwcC8ke21vZHVsZUZpbGVOYW1lfV1gLCBleGFtcGxlTW9kdWxlLnNvdXJjZUNvZGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBmaWxlTmFtZSBhIGZpbGVOYW1lIHBhdGggdGhhdCBtYXkgc3RhcnQgd2l0aCAuL1xuICAgICAgICAgKiBAcmV0dXJuIEEgZmlsZW5hbWUsIHdpdGhvdXQgYVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ0RvdFNsYXNoKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAgICAgaWYgKGZpbGVOYW1lLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgZXZlcnl0aGluZyBhZnRlciB0aGUgbGFzdCBzbGFzaFxuICAgICAgICAgKiBAcGFyYW0gcGF0aCBQYXRoIHRvIGJlIHNob3J0ZW5lZCB0byBqdXN0IGl0cyBmaWxlbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0RmlsZU5hbWUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZHMgdGhlIG5hbWUgYW5kIHZhbHVlIGFzIGFuIGlucHV0IHRvIHRoZSBmb3JtLiAqL1xuICAgIF9hcHBlbmRGb3JtSW5wdXQoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB9XG59XG4iXX0=

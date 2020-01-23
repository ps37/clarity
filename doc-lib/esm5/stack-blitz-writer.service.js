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
var STACKBLITZ_URL = 'https://stackblitz.com/run';
/**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
var /**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
StackBlitzWriterService = /** @class */ (function() {
  function StackBlitzWriterService(stackBlitzData, docRetriever) {
    this.stackBlitzData = stackBlitzData;
    this.docRetriever = docRetriever;
  }
  /**
   * We should add the ability to specify a form target instead of always doing a new window
   * @param entry The example to be displayed in StackBlitz
   */
  /**
   * We should add the ability to specify a form target instead of always doing a new window
   * @param {?} entry The example to be displayed in StackBlitz
   * @return {?}
   */
  StackBlitzWriterService.prototype.openStackBlitz /**
   * We should add the ability to specify a form target instead of always doing a new window
   * @param {?} entry The example to be displayed in StackBlitz
   * @return {?}
   */ = function(entry) {
    var _this = this;
    /** @type {?} */
    var exampleComponent = this.docRetriever.getComponent(entry.component);
    /** @type {?} */
    var exampleModule = this.docRetriever.getModule(exampleComponent.name.replace('ExampleComponent', 'ExampleModule'));
    /** @type {?} */
    var moduleName = exampleModule.name;
    /** @type {?} */
    var moduleFileName = getFileName(exampleModule.path);
    /** @type {?} */
    var componentTagName = exampleComponent.selector;
    /** @type {?} */
    var componentFileName = getFileName(exampleComponent.file);
    /** @type {?} */
    var form = document.createElement('form');
    /** @type {?} */
    var encodedFile = encodeURIComponent('src/app/' + componentFileName);
    form.action = STACKBLITZ_URL + '?file=' + encodedFile;
    form.method = 'post';
    form.target = '_blank';
    // First replace the placeholders and add any other files created by the stackblitz writer
    Object.keys(this.stackBlitzData).forEach(
      /**
       * @param {?} key
       * @return {?}
       */
      function(key) {
        /** @type {?} */
        var data = _this.stackBlitzData[key];
        if (key.includes('app.module.ts')) {
          data = data
            .replace(/__EXAMPLE_MODULE_FILE_IMPORT/g, moduleFileName.replace(/\.ts$/, ''))
            .replace(/__EXAMPLE_MODULE/g, moduleName);
        }
        if (key.includes('app.component.html')) {
          data = data.replace(/__EXAMPLE_TAG/g, componentTagName);
        }
        if (typeof data === 'object') {
          _this._appendFormInput(form, key, JSON.stringify(data));
        } else {
          _this._appendFormInput(form, key, data);
        }
      }
    );
    // Add the example components
    this._appendFormInput(form, 'project[files][src/app/' + componentFileName + ']', exampleComponent.sourceCode);
    if (exampleComponent.templateUrl && exampleComponent.templateUrl.length > 0) {
      /** @type {?} */
      var fileName = removeLeadingDotSlash(exampleComponent.templateUrl[0]);
      this._appendFormInput(form, 'project[files][src/app/' + fileName + ']', exampleComponent.templateData);
    }
    if (exampleComponent.styleUrlsData && exampleComponent.styleUrlsData.length > 0) {
      /** @type {?} */
      var styleData = exampleComponent.styleUrlsData[0];
      /** @type {?} */
      var fileName = removeLeadingDotSlash(styleData.styleUrl);
      this._appendFormInput(form, 'project[files][src/app/' + fileName + ']', styleData.data);
    }
    this._appendFormInput(form, 'project[files][src/app/' + moduleFileName + ']', exampleModule.sourceCode);
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
  };
  /** Appends the name and value as an input to the form. */
  /**
   * Appends the name and value as an input to the form.
   * @param {?} form
   * @param {?} name
   * @param {?} value
   * @return {?}
   */
  StackBlitzWriterService.prototype._appendFormInput /**
   * Appends the name and value as an input to the form.
   * @param {?} form
   * @param {?} name
   * @param {?} value
   * @return {?}
   */ = function(form, name, value) {
    /** @type {?} */
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };
  return StackBlitzWriterService;
})();
/**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
export { StackBlitzWriterService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmxpdHotd3JpdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmNkL3VpLWRvYy1saWIvIiwic291cmNlcyI6WyJzdGFjay1ibGl0ei13cml0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxvQ0FFQzs7SUFFSyxjQUFjLEdBQUcsNEJBQTRCOzs7O0FBS25EOzs7O0lBQ0ksaUNBQW9CLGNBQThCLEVBQVUsWUFBMkM7UUFBbkYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQStCO0lBQUcsQ0FBQztJQUUzRzs7O09BR0c7Ozs7OztJQUNILGdEQUFjOzs7OztJQUFkLFVBQWUsS0FBbUI7UUFBbEMsaUJBMEVDOztZQXpFUyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOztZQUNsRSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQzdDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQ3JFOztZQUVLLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSTs7WUFDL0IsY0FBYyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUNoRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFROztZQUM1QyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOztZQUV0RCxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQ3JDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxhQUFXLGlCQUFtQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQU0sY0FBYyxjQUFTLFdBQWEsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENB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O0lBQ0wsQ0FBQztJQUVELDBEQUEwRDs7Ozs7Ozs7SUFDMUQsa0RBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLElBQXFCLEVBQUUsSUFBWSxFQUFFLEtBQWE7O1lBQ3pELEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUEzRkQsSUEyRkM7Ozs7Ozs7Ozs7SUExRmUsaURBQXNDOzs7OztJQUFFLCtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ29weXJpZ2h0IDIwMTkgVk13YXJlLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTItQ2xhdXNlXG4gKi9cblxuaW1wb3J0IHsgRXhhbXBsZUVudHJ5IH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IERvY3VtZW50YXRpb25SZXRyaWV2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudGF0aW9uLXJldHJpZXZlci5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFja0JsaXR6RGF0YSB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5jb25zdCBTVEFDS0JMSVRaX1VSTCA9ICdodHRwczovL3N0YWNrYmxpdHouY29tL3J1bic7XG5cbi8qKlxuICogTWVyZ2VzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgc3RhY2tibGl0eiBkYXRhIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gZXhhbXBsZSBhbmQgc3VibWl0cyB0aGUgZm9ybSB0byBhIG5ldyBwYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFja0JsaXR6V3JpdGVyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGFja0JsaXR6RGF0YTogU3RhY2tCbGl0ekRhdGEsIHByaXZhdGUgZG9jUmV0cmlldmVyOiBEb2N1bWVudGF0aW9uUmV0cmlldmVyU2VydmljZSkge31cblxuICAgIC8qKlxuICAgICAqIFdlIHNob3VsZCBhZGQgdGhlIGFiaWxpdHkgdG8gc3BlY2lmeSBhIGZvcm0gdGFyZ2V0IGluc3RlYWQgb2YgYWx3YXlzIGRvaW5nIGEgbmV3IHdpbmRvd1xuICAgICAqIEBwYXJhbSBlbnRyeSBUaGUgZXhhbXBsZSB0byBiZSBkaXNwbGF5ZWQgaW4gU3RhY2tCbGl0elxuICAgICAqL1xuICAgIG9wZW5TdGFja0JsaXR6KGVudHJ5OiBFeGFtcGxlRW50cnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXhhbXBsZUNvbXBvbmVudCA9IHRoaXMuZG9jUmV0cmlldmVyLmdldENvbXBvbmVudChlbnRyeS5jb21wb25lbnQpO1xuICAgICAgICBjb25zdCBleGFtcGxlTW9kdWxlID0gdGhpcy5kb2NSZXRyaWV2ZXIuZ2V0TW9kdWxlKFxuICAgICAgICAgICAgZXhhbXBsZUNvbXBvbmVudC5uYW1lLnJlcGxhY2UoJ0V4YW1wbGVDb21wb25lbnQnLCAnRXhhbXBsZU1vZHVsZScpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGV4YW1wbGVNb2R1bGUubmFtZTtcbiAgICAgICAgY29uc3QgbW9kdWxlRmlsZU5hbWUgPSBnZXRGaWxlTmFtZShleGFtcGxlTW9kdWxlLnBhdGgpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRUYWdOYW1lID0gZXhhbXBsZUNvbXBvbmVudC5zZWxlY3RvcjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RmlsZU5hbWUgPSBnZXRGaWxlTmFtZShleGFtcGxlQ29tcG9uZW50LmZpbGUpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRGaWxlID0gZW5jb2RlVVJJQ29tcG9uZW50KGBzcmMvYXBwLyR7Y29tcG9uZW50RmlsZU5hbWV9YCk7XG4gICAgICAgIGZvcm0uYWN0aW9uID0gYCR7U1RBQ0tCTElUWl9VUkx9P2ZpbGU9JHtlbmNvZGVkRmlsZX1gO1xuICAgICAgICBmb3JtLm1ldGhvZCA9ICdwb3N0JztcbiAgICAgICAgZm9ybS50YXJnZXQgPSAnX2JsYW5rJztcblxuICAgICAgICAvLyBGaXJzdCByZXBsYWNlIHRoZSBwbGFjZWhvbGRlcnMgYW5kIGFkZCBhbnkgb3RoZXIgZmlsZXMgY3JlYXRlZCBieSB0aGUgc3RhY2tibGl0eiB3cml0ZXJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGFja0JsaXR6RGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YWNrQmxpdHpEYXRhW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdhcHAubW9kdWxlLnRzJykpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvX19FWEFNUExFX01PRFVMRV9GSUxFX0lNUE9SVC9nLCBtb2R1bGVGaWxlTmFtZS5yZXBsYWNlKC9cXC50cyQvLCAnJykpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX0VYQU1QTEVfTU9EVUxFL2csIG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdhcHAuY29tcG9uZW50Lmh0bWwnKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL19fRVhBTVBMRV9UQUcvZywgY29tcG9uZW50VGFnTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kRm9ybUlucHV0KGZvcm0sIGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRGb3JtSW5wdXQoZm9ybSwga2V5LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBleGFtcGxlIGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy5fYXBwZW5kRm9ybUlucHV0KGZvcm0sIGBwcm9qZWN0W2ZpbGVzXVtzcmMvYXBwLyR7Y29tcG9uZW50RmlsZU5hbWV9XWAsIGV4YW1wbGVDb21wb25lbnQuc291cmNlQ29kZSk7XG5cbiAgICAgICAgaWYgKGV4YW1wbGVDb21wb25lbnQudGVtcGxhdGVVcmwgJiYgZXhhbXBsZUNvbXBvbmVudC50ZW1wbGF0ZVVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHJlbW92ZUxlYWRpbmdEb3RTbGFzaChleGFtcGxlQ29tcG9uZW50LnRlbXBsYXRlVXJsWzBdKTtcbiAgICAgICAgICAgIHRoaXMuX2FwcGVuZEZvcm1JbnB1dChmb3JtLCBgcHJvamVjdFtmaWxlc11bc3JjL2FwcC8ke2ZpbGVOYW1lfV1gLCBleGFtcGxlQ29tcG9uZW50LnRlbXBsYXRlRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhhbXBsZUNvbXBvbmVudC5zdHlsZVVybHNEYXRhICYmIGV4YW1wbGVDb21wb25lbnQuc3R5bGVVcmxzRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBleGFtcGxlQ29tcG9uZW50LnN0eWxlVXJsc0RhdGFbMF07XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHJlbW92ZUxlYWRpbmdEb3RTbGFzaChzdHlsZURhdGEuc3R5bGVVcmwpO1xuICAgICAgICAgICAgdGhpcy5fYXBwZW5kRm9ybUlucHV0KGZvcm0sIGBwcm9qZWN0W2ZpbGVzXVtzcmMvYXBwLyR7ZmlsZU5hbWV9XWAsIHN0eWxlRGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hcHBlbmRGb3JtSW5wdXQoZm9ybSwgYHByb2plY3RbZmlsZXNdW3NyYy9hcHAvJHttb2R1bGVGaWxlTmFtZX1dYCwgZXhhbXBsZU1vZHVsZS5zb3VyY2VDb2RlKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZmlsZU5hbWUgYSBmaWxlTmFtZSBwYXRoIHRoYXQgbWF5IHN0YXJ0IHdpdGggLi9cbiAgICAgICAgICogQHJldHVybiBBIGZpbGVuYW1lLCB3aXRob3V0IGFcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxlYWRpbmdEb3RTbGFzaChmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZS5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zbGljZSgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGxhc3Qgc2xhc2hcbiAgICAgICAgICogQHBhcmFtIHBhdGggUGF0aCB0byBiZSBzaG9ydGVuZWQgdG8ganVzdCBpdHMgZmlsZW5hbWVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldEZpbGVOYW1lKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBBcHBlbmRzIHRoZSBuYW1lIGFuZCB2YWx1ZSBhcyBhbiBpbnB1dCB0byB0aGUgZm9ybS4gKi9cbiAgICBfYXBwZW5kRm9ybUlucHV0KGZvcm06IEhUTUxGb3JtRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuICAgICAgICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgfVxufVxuIl19

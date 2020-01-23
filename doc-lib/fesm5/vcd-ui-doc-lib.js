import {
  Component,
  ɵɵdefineInjectable,
  Injectable,
  Input,
  NgModule,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  InjectionToken,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values, __extends, __spread } from 'tslib';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-retriever.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service exposing methods for retrieving the documentation for a given component.
 * @abstract
 */
var /**
 * Service exposing methods for retrieving the documentation for a given component.
 * @abstract
 */
DocumentationRetrieverService = /** @class */ (function() {
  function DocumentationRetrieverService() {}
  return DocumentationRetrieverService;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DocumentationContainerComponent = /** @class */ (function() {
  function DocumentationContainerComponent(route) {
    this.route = route;
  }
  /**
   * @return {?}
   */
  DocumentationContainerComponent.prototype.ngOnInit /**
   * @return {?}
   */ = function() {
    var _this = this;
    this.route.data.subscribe(
      /**
       * @param {?} data
       * @return {?}
       */
      function(data) {
        _this.documentationEntry = data.documentationEntry;
      }
    );
  };
  DocumentationContainerComponent.decorators = [
    {
      type: Component,
      args: [
        {
          selector: 'vcd-documentation-container',
          template:
            '<clr-tabs>\n    <clr-tab>\n        <button clrTabLink>Documentation</button>\n        <clr-tab-content>\n            <vcd-overview-viewer [component]="documentationEntry?.component"> </vcd-overview-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>API</button>\n        <clr-tab-content>\n            <vcd-api-viewer [component]="documentationEntry?.component"> </vcd-api-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>Examples</button>\n        <clr-tab-content>\n            <vcd-example-viewer\n                *ngFor="let exampleDescriptor of documentationEntry?.examples"\n                [exampleEntry]="exampleDescriptor"\n            >\n            </vcd-example-viewer>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n',
          styles: ['vcd-example-viewer{margin-top:1rem;display:block}'],
        },
      ],
    },
  ];
  /** @nocollapse */
  DocumentationContainerComponent.ctorParameters = function() {
    return [{ type: ActivatedRoute }];
  };
  return DocumentationContainerComponent;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: documentation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * To register a documentation entry as value for corresponding component
 * @type {?}
 */
var documentationEntryMap = new Map();
/**
 * Used in {\@link Documentation.registerDocumentationEntry} method to check if the input is a valid {\@link DocumentationEntry}
 * @param {?} documentationParams
 * @return {?}
 */
function validateDocumentationMetadata(documentationParams) {
  if (!documentationParams.urlSegment) {
    throw new Error('urlSegment should be specified and not empty');
  }
  /** @type {?} */
  var documentationEntry = Documentation.getAllEntries().find(
    /**
     * @param {?} entry
     * @return {?}
     */
    function(entry) {
      return entry.urlSegment === documentationParams.urlSegment;
    }
  );
  if (documentationEntry) {
    throw new Error(
      "The specified urlSegment '" +
        documentationParams.urlSegment +
        "' for '" +
        documentationParams.displayName +
        "'" +
        ("was already defined for '" + documentationEntry.displayName + "'")
    );
  }
  if (!documentationParams.displayName) {
    throw new Error('displayName should be specified and not empty');
  }
}
/** @type {?} */
var Documentation = {
  /**
   * Returns all the documentation entries registered into the framework
   */
  /**
   * Returns all the documentation entries registered into the framework
   * @return {?}
   */
  getAllEntries: function() {
    return Array.from(documentationEntryMap.values());
  },
  /**
   * Returns angular routes used when displaying the documentation/examples for the components.
   */
  /**
   * Returns angular routes used when displaying the documentation/examples for the components.
   * @return {?}
   */
  getRoutes: function() {
    return Documentation.getAllEntries().map(
      /**
       * @param {?} documentationEntry
       * @return {?}
       */
      function(documentationEntry) {
        return {
          path: documentationEntry.urlSegment,
          component: DocumentationContainerComponent,
          data: { documentationEntry: documentationEntry },
        };
      }
    );
  },
  /**
   * Used for manual registration of documentation entry with a corresponding component.
   */
  /**
   * Used for manual registration of documentation entry with a corresponding component.
   * @param {?} documentationEntry
   * @return {?}
   */
  registerDocumentationEntry: function(documentationEntry) {
    validateDocumentationMetadata(documentationEntry);
    documentationEntryMap.set(documentationEntry.component, documentationEntry);
  },
};

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
var /**
 * This service retrieves specific properties from compodoc generated documentation
 */
CompoDocRetrieverService = /** @class */ (function() {
  function CompoDocRetrieverService(documentationJson) {
    this.documentationJson = documentationJson;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getOverview /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).description;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getTypescriptSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).sourceCode;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getHtmlSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    return this.getComponent(component).templateData;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getCssSourceCode /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var styleUrlsData = this.getComponent(component).styleUrlsData;
    if (!styleUrlsData) {
      return;
    }
    return styleUrlsData
      .map(
        /**
         * @param {?} styleUrl
         * @return {?}
         */
        function(styleUrl) {
          return styleUrl.data;
        }
      )
      .join('\n\n\n');
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getComponent /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    var e_1, _a;
    try {
      for (var _b = __values(this.documentationJson), _c = _b.next(); !_c.done; _c = _b.next()) {
        var documentationJson = _c.value;
        /** @type {?} */
        var compodocComponent = documentationJson.components.find(
          /**
           * @param {?} c
           * @return {?}
           */
          function(c) {
            return c.name === component.name;
          }
        );
        if (compodocComponent) {
          return compodocComponent;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return /** @type {?} */ ({ styleUrlsData: [] });
  };
  /**
   * @param {?} moduleName
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getModule /**
   * @param {?} moduleName
   * @return {?}
   */ = function(moduleName) {
    var e_2, _a;
    try {
      for (var _b = __values(this.documentationJson), _c = _b.next(); !_c.done; _c = _b.next()) {
        var documentationJson = _c.value;
        /** @type {?} */
        var compodocComponent = documentationJson.modules.find(
          /**
           * @param {?} module
           * @return {?}
           */
          function(module) {
            return module.name === moduleName;
          }
        );
        if (compodocComponent) {
          return compodocComponent;
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return null;
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getInputParameters /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var comp = this.getComponent(component);
    return comp.inputsClass || [];
  };
  /**
   * @param {?} component
   * @return {?}
   */
  CompoDocRetrieverService.prototype.getOutputParameters /**
   * @param {?} component
   * @return {?}
   */ = function(component) {
    /** @type {?} */
    var comp = this.getComponent(component);
    return comp.outputsClass || [];
  };
  return CompoDocRetrieverService;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var HighlightService = /** @class */ (function() {
  function HighlightService() {}
  HighlightService.decorators = [{ type: Injectable, args: [{ providedIn: 'root' }] }];
  /** @nocollapse */ HighlightService.ngInjectableDef = ɵɵdefineInjectable({
    factory: function HighlightService_Factory() {
      return new HighlightService();
    },
    token: HighlightService,
    providedIn: 'root',
  });
  return HighlightService;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/prism/prism-highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrismHighlightService = /** @class */ (function(_super) {
  __extends(PrismHighlightService, _super);
  function PrismHighlightService() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * @param {?} code
   * @return {?}
   */
  PrismHighlightService.prototype.highlightTypescript /**
   * @param {?} code
   * @return {?}
   */ = function(code) {
    return this.highlight(code, Prism.languages.typescript);
  };
  /**
   * @param {?} code
   * @return {?}
   */
  PrismHighlightService.prototype.highlightHtml /**
   * @param {?} code
   * @return {?}
   */ = function(code) {
    return this.highlight(code, Prism.languages.html);
  };
  /**
   * @param {?} code
   * @return {?}
   */
  PrismHighlightService.prototype.highlightScss /**
   * @param {?} code
   * @return {?}
   */ = function(code) {
    return this.highlight(code, Prism.languages.scss);
  };
  /**
   * @private
   * @param {?} code
   * @param {?} lang
   * @return {?}
   */
  PrismHighlightService.prototype.highlight /**
   * @private
   * @param {?} code
   * @param {?} lang
   * @return {?}
   */ = function(code, lang) {
    return Prism.highlight(code || '', lang);
  };
  PrismHighlightService.decorators = [{ type: Injectable }];
  return PrismHighlightService;
})(HighlightService);

/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OverviewViewerComponent = /** @class */ (function() {
  function OverviewViewerComponent(documentationRetriever) {
    this.documentationRetriever = documentationRetriever;
    this.isNoOverviewMessageShown = true;
  }
  Object.defineProperty(OverviewViewerComponent.prototype, 'component', {
    /**
     * @param {?} component
     * @return {?}
     */
    set: function(component) {
      if (!component) {
        return;
      }
      // TODO: externalize string literals
      this.overview =
        this.documentationRetriever.getOverview(component) ||
        (this.isNoOverviewMessageShown ? 'No Documentation found' : '');
    },
    enumerable: true,
    configurable: true,
  });
  OverviewViewerComponent.decorators = [
    {
      type: Component,
      args: [
        {
          selector: 'vcd-overview-viewer',
          template: '<div [innerHTML]="overview"></div>\n',
          styles: [''],
        },
      ],
    },
  ];
  /** @nocollapse */
  OverviewViewerComponent.ctorParameters = function() {
    return [{ type: DocumentationRetrieverService }];
  };
  OverviewViewerComponent.propDecorators = {
    isNoOverviewMessageShown: [{ type: Input }],
    component: [{ type: Input }],
  };
  return OverviewViewerComponent;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations = [OverviewViewerComponent];
var OverviewViewerModule = /** @class */ (function() {
  function OverviewViewerModule() {}
  OverviewViewerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [ClarityModule, CommonModule],
          declarations: __spread(declarations),
          exports: __spread(declarations),
        },
      ],
    },
  ];
  return OverviewViewerModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: stack-blitz-writer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * To display the 3 code parts(TypeScript, HTML and CSS) of a component
 */
var SourceCodeViewerComponent = /** @class */ (function() {
  function SourceCodeViewerComponent(documentationRetriever, highlightService) {
    this.documentationRetriever = documentationRetriever;
    this.highlightService = highlightService;
  }
  Object.defineProperty(SourceCodeViewerComponent.prototype, 'component', {
    /**
     * The component which source (typescript, html, css) will be displayed
     */
    /**
     * The component which source (typescript, html, css) will be displayed
     * @param {?} component
     * @return {?}
     */
    set: function(component) {
      if (!component) {
        return;
      }
      // TODO: externalize string literals
      this.typescriptSourceCode = this.highlightService.highlightTypescript(
        this.documentationRetriever.getTypescriptSourceCode(component)
      );
      this.htmlSourceCode = this.highlightService.highlightHtml(
        this.documentationRetriever.getHtmlSourceCode(component) || 'No html found'
      );
      this.cssSourceCode = this.highlightService.highlightScss(
        this.documentationRetriever.getCssSourceCode(component) || 'No CSS found'
      );
    },
    enumerable: true,
    configurable: true,
  });
  SourceCodeViewerComponent.decorators = [
    {
      type: Component,
      args: [
        {
          selector: 'vcd-source-code-viewer',
          template:
            '<clr-tabs>\n    <clr-tab>\n        <button clrTabLink>Typescript</button>\n        <clr-tab-content>\n            <pre class="language-ts"><code [innerHTML]="typescriptSourceCode"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>HTML</button>\n        <clr-tab-content>\n            <pre class="language-html"><code [innerHTML]="htmlSourceCode"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>CSS</button>\n        <clr-tab-content>\n            <pre class="language-scss"><code [innerHTML]="cssSourceCode"></code></pre>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n',
          styles: ['pre{height:15rem;max-height:15rem;border-radius:3px}'],
        },
      ],
    },
  ];
  /** @nocollapse */
  SourceCodeViewerComponent.ctorParameters = function() {
    return [{ type: DocumentationRetrieverService }, { type: HighlightService }];
  };
  SourceCodeViewerComponent.propDecorators = {
    component: [{ type: Input }],
  };
  return SourceCodeViewerComponent;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations$1 = [SourceCodeViewerComponent];
var SourceCodeViewerModule = /** @class */ (function() {
  function SourceCodeViewerModule() {}
  SourceCodeViewerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [ClarityModule, CommonModule],
          declarations: __spread(declarations$1),
          exports: __spread(declarations$1),
        },
      ],
    },
  ];
  return SourceCodeViewerModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations$2 = [ExampleViewerComponent];
var ExampleViewerModule = /** @class */ (function() {
  function ExampleViewerModule() {}
  ExampleViewerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [ClarityModule, CommonModule, SourceCodeViewerModule, OverviewViewerModule],
          declarations: __spread(declarations$2),
          exports: __spread(declarations$2),
        },
      ],
    },
  ];
  return ExampleViewerModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiViewerComponent = /** @class */ (function() {
  function ApiViewerComponent(documentationRetriever) {
    this.documentationRetriever = documentationRetriever;
  }
  Object.defineProperty(ApiViewerComponent.prototype, 'component', {
    /**
     * Gets the input and output parameters from the Compodoc generated documentation json
     */
    /**
     * Gets the input and output parameters from the Compodoc generated documentation json
     * @param {?} component
     * @return {?}
     */
    set: function(component) {
      if (!component) {
        return;
      }
      this.inputParameters = this.documentationRetriever.getInputParameters(component);
      this.outputParameters = this.documentationRetriever.getOutputParameters(component);
    },
    enumerable: true,
    configurable: true,
  });
  ApiViewerComponent.decorators = [
    {
      type: Component,
      args: [
        {
          selector: ' vcd-api-viewer',
          template:
            '<h6>Inputs</h6>\n<table class="table" *ngIf="inputParameters?.length">\n    <thead>\n        <tr>\n            <th class="left">Name</th>\n            <th>Type</th>\n            <th class="left">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor="let par of inputParameters">\n            <td class="left">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class="left"><div [innerHTML]="par.description"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf="!inputParameters?.length">The component has no input parameters</p>\n\n<h6>Outputs</h6>\n<table class="table" *ngIf="outputParameters?.length">\n    <thead>\n        <tr>\n            <th class="left">Name</th>\n            <th>Type</th>\n            <th class="left">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor="let par of outputParameters">\n            <td class="left">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class="left"><div [innerHTML]="par.description"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf="!outputParameters?.length">The component does not emit any values</p>\n',
          styles: ['::ng-deep body p{margin-top:0}'],
        },
      ],
    },
  ];
  /** @nocollapse */
  ApiViewerComponent.ctorParameters = function() {
    return [{ type: DocumentationRetrieverService }];
  };
  ApiViewerComponent.propDecorators = {
    component: [{ type: Input }],
  };
  return ApiViewerComponent;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations$3 = [ApiViewerComponent];
var ApiViewerModule = /** @class */ (function() {
  function ApiViewerModule() {}
  ApiViewerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [ClarityModule, CommonModule],
          declarations: __spread(declarations$3),
          exports: __spread(declarations$3),
        },
      ],
    },
  ];
  return ApiViewerModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations$4 = [DocumentationContainerComponent];
var DocumentationContainerModule = /** @class */ (function() {
  function DocumentationContainerModule() {}
  DocumentationContainerModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [ClarityModule, CommonModule, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
          declarations: __spread(declarations$4),
          entryComponents: [DocumentationContainerComponent],
          exports: __spread(declarations$4, [OverviewViewerModule, ApiViewerModule, ExampleViewerModule]),
        },
      ],
    },
  ];
  return DocumentationContainerModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var declarations$5 = [];
/**
 * Token that makes the documentation JSONs available to the following factory function.
 * @type {?}
 */
var DOCUMENTATION_DATA = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * Token that makes Stqckblitz JSON data available to factory functions
 * @type {?}
 */
var STACKBLITZ_DATA = new InjectionToken('DocLibModule.forRoot() StackBlitz template JSON data');
/**
 * @param {?} documentations
 * @return {?}
 */
function getCompoDocRetrieverService(documentations) {
  return new CompoDocRetrieverService(documentations);
}
/**
 * @param {?} sbData
 * @param {?} docRetrieverService
 * @return {?}
 */
function getStackBlitzWriter(sbData, docRetrieverService) {
  return new StackBlitzWriterService(sbData, docRetrieverService);
}
var DocLibModule = /** @class */ (function() {
  function DocLibModule() {}
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {@link CompoDocRetrieverService}
   */
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */
  DocLibModule.forRoot /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */ = function(documentations, stackblitzData) {
    return {
      ngModule: DocLibModule,
      providers: [
        // For injecting 'documentations' into factory function, we have to first provide them as injectable.
        {
          provide: DOCUMENTATION_DATA,
          useValue: documentations,
        },
        {
          provide: STACKBLITZ_DATA,
          useValue: stackblitzData,
        },
        {
          provide: DocumentationRetrieverService,
          useFactory: getCompoDocRetrieverService,
          deps: [DOCUMENTATION_DATA],
        },
        {
          provide: StackBlitzWriterService,
          deps: [STACKBLITZ_DATA, DocumentationRetrieverService],
          useFactory: getStackBlitzWriter,
        },
      ],
    };
  };
  DocLibModule.decorators = [
    {
      type: NgModule,
      args: [
        {
          imports: [DocumentationContainerModule],
          declarations: __spread(declarations$5),
          exports: __spread(declarations$5, [DocumentationContainerModule]),
          providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
        },
      ],
    },
  ];
  return DocLibModule;
})();

export {
  ApiViewerComponent,
  DOCUMENTATION_DATA,
  DocLibModule,
  Documentation,
  DocumentationContainerComponent,
  DocumentationRetrieverService,
  ExampleViewerComponent,
  OverviewViewerComponent,
  PrismHighlightService,
  STACKBLITZ_DATA,
  SourceCodeViewerComponent,
  StackBlitzWriterService,
  getCompoDocRetrieverService,
  getStackBlitzWriter,
  CompoDocRetrieverService as ɵa,
  DocumentationContainerModule as ɵb,
  OverviewViewerModule as ɵc,
  OverviewViewerComponent as ɵd,
  ApiViewerModule as ɵe,
  ApiViewerComponent as ɵf,
  ExampleViewerModule as ɵg,
  SourceCodeViewerModule as ɵh,
  SourceCodeViewerComponent as ɵi,
  HighlightService as ɵj,
  ExampleViewerComponent as ɵk,
  DocumentationContainerComponent as ɵl,
  PrismHighlightService as ɵm,
};
//# sourceMappingURL=vcd-ui-doc-lib.js.map

import {
  Component,
  Injectable,
  ɵɵdefineInjectable,
  Input,
  NgModule,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  InjectionToken,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
class DocumentationRetrieverService {}

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DocumentationContainerComponent {
  /**
   * @param {?} route
   */
  constructor(route) {
    this.route = route;
  }
  /**
   * @return {?}
   */
  ngOnInit() {
    this.route.data.subscribe(
      /**
       * @param {?} data
       * @return {?}
       */
      data => {
        this.documentationEntry = data.documentationEntry;
      }
    );
  }
}
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
DocumentationContainerComponent.ctorParameters = () => [{ type: ActivatedRoute }];

/**
 * @fileoverview added by tsickle
 * Generated from: documentation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * To register a documentation entry as value for corresponding component
 * @type {?}
 */
const documentationEntryMap = new Map();
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
  const documentationEntry = Documentation.getAllEntries().find(
    /**
     * @param {?} entry
     * @return {?}
     */
    entry => entry.urlSegment === documentationParams.urlSegment
  );
  if (documentationEntry) {
    throw new Error(
      `The specified urlSegment '${documentationParams.urlSegment}' for '${documentationParams.displayName}'` +
        `was already defined for '${documentationEntry.displayName}'`
    );
  }
  if (!documentationParams.displayName) {
    throw new Error('displayName should be specified and not empty');
  }
}
/** @type {?} */
const Documentation = {
  /**
   * Returns all the documentation entries registered into the framework
   * @return {?}
   */
  getAllEntries() {
    return Array.from(documentationEntryMap.values());
  },
  /**
   * Returns angular routes used when displaying the documentation/examples for the components.
   * @return {?}
   */
  getRoutes() {
    return Documentation.getAllEntries().map(
      /**
       * @param {?} documentationEntry
       * @return {?}
       */
      documentationEntry => ({
        path: documentationEntry.urlSegment,
        component: DocumentationContainerComponent,
        data: { documentationEntry },
      })
    );
  },
  /**
   * Used for manual registration of documentation entry with a corresponding component.
   * @param {?} documentationEntry
   * @return {?}
   */
  registerDocumentationEntry(documentationEntry) {
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
class CompoDocRetrieverService {
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
    return styleUrlsData
      .map(
        /**
         * @param {?} styleUrl
         * @return {?}
         */
        styleUrl => styleUrl.data
      )
      .join('\n\n\n');
  }
  /**
   * @param {?} component
   * @return {?}
   */
  getComponent(component) {
    for (const documentationJson of this.documentationJson) {
      /** @type {?} */
      const compodocComponent = documentationJson.components.find(
        /**
         * @param {?} c
         * @return {?}
         */
        c => c.name === component.name
      );
      if (compodocComponent) {
        return compodocComponent;
      }
    }
    return /** @type {?} */ ({ styleUrlsData: [] });
  }
  /**
   * @param {?} moduleName
   * @return {?}
   */
  getModule(moduleName) {
    for (const documentationJson of this.documentationJson) {
      /** @type {?} */
      const compodocComponent = documentationJson.modules.find(
        /**
         * @param {?} module
         * @return {?}
         */
        module => module.name === moduleName
      );
      if (compodocComponent) {
        return compodocComponent;
      }
    }
    return null;
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

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HighlightService {}
HighlightService.decorators = [{ type: Injectable, args: [{ providedIn: 'root' }] }];
/** @nocollapse */ HighlightService.ngInjectableDef = ɵɵdefineInjectable({
  factory: function HighlightService_Factory() {
    return new HighlightService();
  },
  token: HighlightService,
  providedIn: 'root',
});

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/prism/prism-highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PrismHighlightService extends HighlightService {
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
PrismHighlightService.decorators = [{ type: Injectable }];

/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverviewViewerComponent {
  /**
   * @param {?} documentationRetriever
   */
  constructor(documentationRetriever) {
    this.documentationRetriever = documentationRetriever;
    this.isNoOverviewMessageShown = true;
  }
  /**
   * @param {?} component
   * @return {?}
   */
  set component(component) {
    if (!component) {
      return;
    }
    // TODO: externalize string literals
    this.overview =
      this.documentationRetriever.getOverview(component) ||
      (this.isNoOverviewMessageShown ? 'No Documentation found' : '');
  }
}
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
OverviewViewerComponent.ctorParameters = () => [{ type: DocumentationRetrieverService }];
OverviewViewerComponent.propDecorators = {
  isNoOverviewMessageShown: [{ type: Input }],
  component: [{ type: Input }],
};

/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations = [OverviewViewerComponent];
class OverviewViewerModule {}
OverviewViewerModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [ClarityModule, CommonModule],
        declarations: [...declarations],
        exports: [...declarations],
      },
    ],
  },
];

/**
 * @fileoverview added by tsickle
 * Generated from: stack-blitz-writer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STACKBLITZ_URL = 'https://stackblitz.com/run';
/**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
class StackBlitzWriterService {
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

/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExampleViewerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * To display the 3 code parts(TypeScript, HTML and CSS) of a component
 */
class SourceCodeViewerComponent {
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
    this.typescriptSourceCode = this.highlightService.highlightTypescript(
      this.documentationRetriever.getTypescriptSourceCode(component)
    );
    this.htmlSourceCode = this.highlightService.highlightHtml(
      this.documentationRetriever.getHtmlSourceCode(component) || 'No html found'
    );
    this.cssSourceCode = this.highlightService.highlightScss(
      this.documentationRetriever.getCssSourceCode(component) || 'No CSS found'
    );
  }
}
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
SourceCodeViewerComponent.ctorParameters = () => [{ type: DocumentationRetrieverService }, { type: HighlightService }];
SourceCodeViewerComponent.propDecorators = {
  component: [{ type: Input }],
};

/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$1 = [SourceCodeViewerComponent];
class SourceCodeViewerModule {}
SourceCodeViewerModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [ClarityModule, CommonModule],
        declarations: [...declarations$1],
        exports: [...declarations$1],
      },
    ],
  },
];

/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$2 = [ExampleViewerComponent];
class ExampleViewerModule {}
ExampleViewerModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [ClarityModule, CommonModule, SourceCodeViewerModule, OverviewViewerModule],
        declarations: [...declarations$2],
        exports: [...declarations$2],
      },
    ],
  },
];

/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiViewerComponent {
  /**
   * @param {?} documentationRetriever
   */
  constructor(documentationRetriever) {
    this.documentationRetriever = documentationRetriever;
  }
  /**
   * Gets the input and output parameters from the Compodoc generated documentation json
   * @param {?} component
   * @return {?}
   */
  set component(component) {
    if (!component) {
      return;
    }
    this.inputParameters = this.documentationRetriever.getInputParameters(component);
    this.outputParameters = this.documentationRetriever.getOutputParameters(component);
  }
}
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
ApiViewerComponent.ctorParameters = () => [{ type: DocumentationRetrieverService }];
ApiViewerComponent.propDecorators = {
  component: [{ type: Input }],
};

/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$3 = [ApiViewerComponent];
class ApiViewerModule {}
ApiViewerModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [ClarityModule, CommonModule],
        declarations: [...declarations$3],
        exports: [...declarations$3],
      },
    ],
  },
];

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$4 = [DocumentationContainerComponent];
class DocumentationContainerModule {}
DocumentationContainerModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [ClarityModule, CommonModule, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
        declarations: [...declarations$4],
        entryComponents: [DocumentationContainerComponent],
        exports: [...declarations$4, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
      },
    ],
  },
];

/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$5 = [];
/**
 * Token that makes the documentation JSONs available to the following factory function.
 * @type {?}
 */
const DOCUMENTATION_DATA = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * Token that makes Stqckblitz JSON data available to factory functions
 * @type {?}
 */
const STACKBLITZ_DATA = new InjectionToken('DocLibModule.forRoot() StackBlitz template JSON data');
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
class DocLibModule {
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {\@link CompoDocRetrieverService}
   * @param {?} documentations
   * @param {?} stackblitzData
   * @return {?}
   */
  static forRoot(documentations, stackblitzData) {
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
  }
}
DocLibModule.decorators = [
  {
    type: NgModule,
    args: [
      {
        imports: [DocumentationContainerModule],
        declarations: [...declarations$5],
        exports: [...declarations$5, DocumentationContainerModule],
        providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
      },
    ],
  },
];

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

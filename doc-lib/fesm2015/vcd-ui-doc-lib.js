import { Component, Injectable, ɵɵdefineInjectable, Input, NgModule, ComponentFactoryResolver, ViewChild, ViewContainerRef, InjectionToken } from '@angular/core';
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
class DocumentationRetrieverService {
}

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
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.documentationEntry = data.documentationEntry;
        }));
    }
}
DocumentationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'vcd-documentation-container',
                template: "<clr-tabs>\n    <clr-tab>\n        <button clrTabLink>Documentation</button>\n        <clr-tab-content>\n            <vcd-overview-viewer [component]=\"documentationEntry?.component\"> </vcd-overview-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>API</button>\n        <clr-tab-content>\n            <vcd-api-viewer [component]=\"documentationEntry?.component\"> </vcd-api-viewer>\n        </clr-tab-content>\n    </clr-tab>\n\n    <clr-tab>\n        <button clrTabLink>Examples</button>\n        <clr-tab-content>\n            <vcd-example-viewer\n                *ngFor=\"let exampleDescriptor of documentationEntry?.examples\"\n                [exampleEntry]=\"exampleDescriptor\"\n            >\n            </vcd-example-viewer>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n",
                styles: ["vcd-example-viewer{margin-top:1rem;display:block}"]
            }] }
];
/** @nocollapse */
DocumentationContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute }
];

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
    const documentationEntry = Documentation.getAllEntries().find((/**
     * @param {?} entry
     * @return {?}
     */
    entry => entry.urlSegment === documentationParams.urlSegment));
    if (documentationEntry) {
        throw new Error(`The specified urlSegment '${documentationParams.urlSegment}' for '${documentationParams.displayName}'` +
            `was already defined for '${documentationEntry.displayName}'`);
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
        return Documentation.getAllEntries().map((/**
         * @param {?} documentationEntry
         * @return {?}
         */
        (documentationEntry) => ({
            path: documentationEntry.urlSegment,
            component: DocumentationContainerComponent,
            data: { documentationEntry },
        })));
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

/**
 * @fileoverview added by tsickle
 * Generated from: highlight/highlight.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HighlightService {
}
HighlightService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ HighlightService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HighlightService_Factory() { return new HighlightService(); }, token: HighlightService, providedIn: "root" });

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
PrismHighlightService.decorators = [
    { type: Injectable }
];

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
    { type: Component, args: [{
                selector: 'vcd-overview-viewer',
                template: "<div [innerHTML]=\"overview\"></div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
OverviewViewerComponent.ctorParameters = () => [
    { type: DocumentationRetrieverService }
];
OverviewViewerComponent.propDecorators = {
    isNoOverviewMessageShown: [{ type: Input }],
    component: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: overview-viewer/overview-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations = [OverviewViewerComponent];
class OverviewViewerModule {
}
OverviewViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule],
                declarations: [...declarations],
                exports: [...declarations],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExampleViewerComponent {
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
                template: "<div class=\"card\">\n    <div class=\"card-header-main\">\n        <div class=\"card-header\">\n            {{ exampleEntry?.title }}\n        </div>\n        <div class=\"example-button-container\" [ngClass]=\"{ 'example-shown': showSourceCode }\">\n            <clr-icon shape=\"code\" size=\"32\" (click)=\"showSourceCode = !showSourceCode\"> </clr-icon>\n        </div>\n    </div>\n\n    <div class=\"card-block source-code-container\" *ngIf=\"showSourceCode\">\n        <vcd-source-code-viewer [component]=\"exampleEntry?.component\"> </vcd-source-code-viewer>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"card-text\">\n            <vcd-overview-viewer [isNoOverviewMessageShown]=\"false\" [component]=\"exampleEntry?.component\"></vcd-overview-viewer>\n            <template #exampleContainer> </template>\n        </div>\n    </div>\n</div>\n",
                styles: [".card-header-main{display:flex}.card-header-main .card-header{flex:1}.card-header-main .example-button-container{display:flex;margin:.5rem .5rem 0 0}.card-header-main .example-button-container.example-shown{border-radius:3px 3px 0 0;background-color:#d8e3e9}.card-header-main .example-button-container clr-icon{-ms-grid-row-align:center;align-self:center}.source-code-container{border-radius:3px 0 3px 3px;background-color:#d8e3e9;margin:0 .5rem}:host ::ng-deep vcd-overview-viewer>div>p{margin-bottom:10px}"]
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

/**
 * @fileoverview added by tsickle
 * Generated from: source-code-viewer/source-code-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$1 = [SourceCodeViewerComponent];
class SourceCodeViewerModule {
}
SourceCodeViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule],
                declarations: [...declarations$1],
                exports: [...declarations$1],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: example-viewer/example-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$2 = [ExampleViewerComponent];
class ExampleViewerModule {
}
ExampleViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule, SourceCodeViewerModule, OverviewViewerModule],
                declarations: [...declarations$2],
                exports: [...declarations$2],
            },] }
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
    { type: Component, args: [{
                selector: ' vcd-api-viewer',
                template: "<h6>Inputs</h6>\n<table class=\"table\" *ngIf=\"inputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of inputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!inputParameters?.length\">The component has no input parameters</p>\n\n<h6>Outputs</h6>\n<table class=\"table\" *ngIf=\"outputParameters?.length\">\n    <thead>\n        <tr>\n            <th class=\"left\">Name</th>\n            <th>Type</th>\n            <th class=\"left\">Description</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let par of outputParameters\">\n            <td class=\"left\">\n                <p>{{ par.name }}</p>\n            </td>\n            <td>{{ par.type }}</td>\n            <td class=\"left\"><div [innerHTML]=\"par.description\"></div></td>\n        </tr>\n    </tbody>\n</table>\n<p *ngIf=\"!outputParameters?.length\">The component does not emit any values</p>\n",
                styles: ["::ng-deep body p{margin-top:0}"]
            }] }
];
/** @nocollapse */
ApiViewerComponent.ctorParameters = () => [
    { type: DocumentationRetrieverService }
];
ApiViewerComponent.propDecorators = {
    component: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: api-viewer/api-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$3 = [ApiViewerComponent];
class ApiViewerModule {
}
ApiViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule],
                declarations: [...declarations$3],
                exports: [...declarations$3],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: documentation-container/documentation-container.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$4 = [DocumentationContainerComponent];
class DocumentationContainerModule {
}
DocumentationContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [ClarityModule, CommonModule, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
                declarations: [...declarations$4],
                entryComponents: [DocumentationContainerComponent],
                exports: [...declarations$4, OverviewViewerModule, ApiViewerModule, ExampleViewerModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: doc-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations$5 = [];
/**
 * Token that makes the documentation jsons available to the following factory function.
 * @type {?}
 */
const FOR_ROOT_DOCUMENTATIONS_TOKEN = new InjectionToken('DocLibModule.forRoot() CompoDocRetrieverService doc jsons.');
/**
 * @param {?} documentations
 * @return {?}
 */
function getCompoDocRetrieverService(documentations) {
    return new CompoDocRetrieverService(documentations);
}
class DocLibModule {
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {\@link CompoDocRetrieverService}
     * @param {?} documentations
     * @return {?}
     */
    static forRoot(documentations) {
        return {
            ngModule: DocLibModule,
            providers: [
                // For injecting 'documentations' into factory function, we have to first provide them as injectable.
                {
                    provide: FOR_ROOT_DOCUMENTATIONS_TOKEN,
                    useValue: documentations,
                },
                {
                    provide: DocumentationRetrieverService,
                    useFactory: getCompoDocRetrieverService,
                    deps: [FOR_ROOT_DOCUMENTATIONS_TOKEN],
                },
            ],
        };
    }
}
DocLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [DocumentationContainerModule],
                declarations: [...declarations$5],
                exports: [...declarations$5, DocumentationContainerModule],
                providers: [{ provide: HighlightService, useClass: PrismHighlightService }],
            },] }
];

export { ApiViewerComponent, DocLibModule, Documentation, DocumentationContainerComponent, DocumentationRetrieverService, ExampleViewerComponent, FOR_ROOT_DOCUMENTATIONS_TOKEN, OverviewViewerComponent, PrismHighlightService, SourceCodeViewerComponent, getCompoDocRetrieverService, CompoDocRetrieverService as ɵa, DocumentationContainerModule as ɵc, OverviewViewerModule as ɵd, OverviewViewerComponent as ɵe, ApiViewerModule as ɵf, ApiViewerComponent as ɵg, ExampleViewerModule as ɵh, SourceCodeViewerModule as ɵi, SourceCodeViewerComponent as ɵj, HighlightService as ɵk, ExampleViewerComponent as ɵl, DocumentationContainerComponent as ɵm, PrismHighlightService as ɵn };
//# sourceMappingURL=vcd-ui-doc-lib.js.map

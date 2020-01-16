/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Type } from '@angular/core';
import { DocumentationRetrieverService } from '../documentation-retriever.service';
import { HighlightService } from '../highlight/highlight.service';
/**
 * To display the 3 code parts(TypeScript, HTML and CSS) of a component
 */
export declare class SourceCodeViewerComponent {
    private documentationRetriever;
    private highlightService;
    /**
     * Different source codes of the component
     */
    typescriptSourceCode: string;
    htmlSourceCode: string;
    cssSourceCode: string;
    constructor(documentationRetriever: DocumentationRetrieverService, highlightService: HighlightService);
    /**
     * The component which source (typescript, html, css) will be displayed
     */
    component: Type<any>;
}

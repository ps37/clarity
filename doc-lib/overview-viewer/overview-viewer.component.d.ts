/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Type } from '@angular/core';
import { DocumentationRetrieverService } from '../documentation-retriever.service';
export declare class OverviewViewerComponent {
    private documentationRetriever;
    /**
     * The description of the component from Compodoc generated JSON. This is an HTML encoded string.
     */
    overview: string;
    constructor(documentationRetriever: DocumentationRetrieverService);
    isNoOverviewMessageShown: boolean;
    component: Type<any>;
}

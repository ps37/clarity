/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Type } from '@angular/core';
import { ApiParameters, DocumentationRetrieverService } from '../documentation-retriever.service';
export declare class ApiViewerComponent {
    private documentationRetriever;
    inputParameters: ApiParameters[];
    outputParameters: ApiParameters[];
    constructor(documentationRetriever: DocumentationRetrieverService);
    /**
     * Gets the input and output parameters from the Compodoc generated documentation json
     */
    component: Type<any>;
}

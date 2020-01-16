/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentationEntry } from '../documentation';
export declare class DocumentationContainerComponent implements OnInit {
    private route;
    /**
     * The documentation entry registered for a component is obtained here using the route data
     * {@link Documentation.getRoutes} registered for that component using {@link Documentation.registerDocumentationEntry}
     */
    documentationEntry: DocumentationEntry;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
}

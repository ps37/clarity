/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ExampleEntry } from '../documentation';
export declare class ExampleViewerComponent {
    private resolver;
    /**
     * For showing and hiding of {@link SourceCodeViewerComponent} in the HTML
     */
    showSourceCode: boolean;
    constructor(resolver: ComponentFactoryResolver);
    /**
     * Gets the example entry from documentation entry and renders the example component
     */
    private _exampleEntry;
    exampleEntry: ExampleEntry;
    /**
     * Container for rendering the example component
     */
    exampleContainer: ViewContainerRef;
    private createExample;
}

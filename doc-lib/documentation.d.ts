/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Type } from '@angular/core';
/**
 * Represents each entry in {@link DocumentationEntry.examples}, that is an examples that shows a particular usage of a components
 */
export interface ExampleEntry {
    /**
     * Example component written to show usage of the component
     */
    component: Type<unknown>;
    /**
     * The component for which this example is written
     */
    forComponent: Type<unknown>;
    /**
     * The title of the section under which this example will be placed
     */
    title: string;
}
/**
 * Represents a component being showcased, along with the examples for it.
 */
export interface DocumentationEntry {
    /**
     * The display name that is going to be used for the component
     */
    displayName: string;
    /**
     * The segment to be used in routing when displaying the documentation for this component.
     */
    urlSegment: string;
    /**
     * The component for which the documentation is going to be generated
     */
    component: Type<unknown>;
    /**
     * A list of examples that will show how the component may be used
     */
    examples?: ExampleEntry[];
}
export declare const Documentation: {
    /**
     * Returns all the documentation entries registered into the framework
     */
    getAllEntries(): DocumentationEntry[];
    /**
     * Returns angular routes used when displaying the documentation/examples for the components.
     */
    getRoutes(): import("@angular/router").Route[];
    /**
     * Used for manual registration of documentation entry with a corresponding component.
     */
    registerDocumentationEntry(documentationEntry: DocumentationEntry): void;
};

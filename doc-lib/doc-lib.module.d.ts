/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { CompodocSchema } from './compodoc/compodoc-schema';
import { DocumentationRetrieverService } from './documentation-retriever.service';
/**
 * NOTE: The following two has to be exported otherwise the AoT compiler won't see it.
 */
/**
 * Token that makes the documentation jsons available to the following factory function.
 */
export declare const FOR_ROOT_DOCUMENTATIONS_TOKEN: InjectionToken<CompodocSchema[]>;
export declare function getCompoDocRetrieverService(documentations: CompodocSchema[]): DocumentationRetrieverService;
export declare class DocLibModule {
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {@link CompoDocRetrieverService}
     */
    static forRoot(documentations: any[]): ModuleWithProviders;
}

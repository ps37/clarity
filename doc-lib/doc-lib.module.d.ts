/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { ModuleWithProviders } from '@angular/core';
import { CompodocSchema } from './compodoc/compodoc-schema';
export declare class DocLibModule {
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {@link CompoDocRetrieverService}
     */
    static forRoot(documentations: CompodocSchema[]): ModuleWithProviders;
}

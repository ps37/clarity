/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { CompodocSchema } from './compodoc/compodoc-schema';
import { DocumentationRetrieverService } from './documentation-retriever.service';
import { StackBlitzData, StackBlitzWriterService } from './stack-blitz-writer.service';
/**
 * NOTE: The following two has to be exported otherwise the AoT compiler won't see it.
 */
/**
 * Token that makes the documentation JSONs available to the following factory function.
 */
export declare const DOCUMENTATION_DATA: InjectionToken<CompodocSchema[]>;
/**
 * Token that makes Stqckblitz JSON data available to factory functions
 */
export declare const STACKBLITZ_DATA: InjectionToken<StackBlitzData>;
export declare function getCompoDocRetrieverService(documentations: CompodocSchema[]): DocumentationRetrieverService;
export declare function getStackBlitzWriter(
  sbData: StackBlitzData,
  docRetrieverService: DocumentationRetrieverService
): StackBlitzWriterService;
export declare class DocLibModule {
  /**
   * Called in the host package importing this doc library for providing the documentation JSONs needed for
   * {@link CompoDocRetrieverService}
   */
  static forRoot(documentations: CompodocSchema[], stackblitzData: StackBlitzData): ModuleWithProviders;
}

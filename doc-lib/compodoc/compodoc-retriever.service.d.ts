/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { Type } from '@angular/core';
import { ApiParameters, DocumentationRetrieverService } from '../documentation-retriever.service';
import { CompodocComponent, CompodocModule, CompodocSchema } from './compodoc-schema';
/**
 * This service retrieves specific properties from compodoc generated documentation
 */
export declare class CompoDocRetrieverService implements DocumentationRetrieverService {
  private documentationJson;
  constructor(documentationJson: CompodocSchema[]);
  getOverview(component: Type<any>): string;
  getTypescriptSourceCode(component: Type<any>): string;
  getHtmlSourceCode(component: Type<any>): string;
  getCssSourceCode(component: Type<any>): string;
  getComponent(component: Type<any>): CompodocComponent;
  getModule(moduleName: string): CompodocModule | null;
  getInputParameters(component: Type<any>): ApiParameters[];
  getOutputParameters(component: Type<any>): ApiParameters[];
}
/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import { ExampleEntry } from './documentation';
import { DocumentationRetrieverService } from './documentation-retriever.service';
export interface StackBlitzData {
  [key: string]: string;
}
/**
 * Merges the generated template stackblitz data with information from the given example and submits the form to a new page
 */
export declare class StackBlitzWriterService {
  private stackBlitzData;
  private docRetriever;
  constructor(stackBlitzData: StackBlitzData, docRetriever: DocumentationRetrieverService);
  /**
   * We should add the ability to specify a form target instead of always doing a new window
   * @param entry The example to be displayed in StackBlitz
   */
  openStackBlitz(entry: ExampleEntry): void;
  /** Appends the name and value as an input to the form. */
  _appendFormInput(form: HTMLFormElement, name: string, value: string): void;
}

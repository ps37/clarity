/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
export declare abstract class HighlightService {
    abstract highlightTypescript(code: string): string;
    abstract highlightHtml(code: string): string;
    abstract highlightScss(code: string): string;
}

/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { HighlightService } from '../highlight.service';
export declare class PrismHighlightService extends HighlightService {
    highlightTypescript(code: string): string;
    highlightHtml(code: string): string;
    highlightScss(code: string): string;
    private highlight;
}

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';
import {ActivatedRoute, Data} from "@angular/router";
import {DocumentationEntry} from "@vcd/ui-doc-lib";

@Component({
  selector: 'clr-modal-demo',
  templateUrl: './modal.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class ModalDemo extends ClarityDocComponent {
  expanded: boolean = false;

  documentationEntry: DocumentationEntry;

  constructor(private route: ActivatedRoute) {
    super('modals');
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.documentationEntry = data.documentationEntry;
    });
  }
}

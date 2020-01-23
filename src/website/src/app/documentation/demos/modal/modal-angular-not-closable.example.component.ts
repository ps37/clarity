/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

/**
 * If you don’t want your modal to be closable by clicking on the top-right “x” or on the mask, you can do so
 * with the <code class="clr-code">clrModalClosable</code> input. The default value is
 * <code class="clr-code">true</code>. You can still close the modal if one of <em>your</em>
 * components modifies the value bound to <code class="clr-code">clrModalOpen</code
 */
@Component({
  selector: 'clr-modal-angular-not-closable-demo',
  templateUrl: './modal-angular-not-closable.example.component.html',
})
export class ModalAngularNotClosableExampleComponent {
  // Booleans to open each example modal
  public closable: boolean = false;
}

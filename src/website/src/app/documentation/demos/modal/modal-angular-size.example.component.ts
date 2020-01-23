/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

/**
 * The Angular component offers the same optional sizes as the static styles through the
 * <code class="clr-code">clrModalSize</code> input. The default, empty size is medium.
 */
@Component({
  selector: 'clr-modal-angular-size-demo',
  templateUrl: './modal-angular-size.example.component.html',
})
export class ModalAngularSizeExampleComponent {
  // Booleans to open each example modal
  public small: boolean = false;
  public large: boolean = false;
  public extraLarge: boolean = false;
}

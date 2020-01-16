/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

/**
 * A static example of a modal with header, body and footer.
 * IE fix: When the modal dialog is open, extend the <code class="clr-code">.no-scrolling</code> class on the
 * <code class="clr-code">body</code> tag so that the content behind the backdrop does not scroll. Remove the class when
 * the modal dialog is closed.
 */
@Component({
  selector: 'clr-modal-angular-static-backdrop-demo',
  templateUrl: './modal-angular-static-backdrop.demo.html',
})
export class ModalAngularStaticBackdropDemo {
  // Booleans to open each example modal
  public static: boolean = false;
}

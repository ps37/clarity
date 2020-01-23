/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ModalAngularSizeExampleComponent } from './modal-angular-size.example.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [ModalAngularSizeExampleComponent],
  entryComponents: [ModalAngularSizeExampleComponent],
  exports: [ModalAngularSizeExampleComponent],
})
export class ModalAngularSizeExampleModule {}

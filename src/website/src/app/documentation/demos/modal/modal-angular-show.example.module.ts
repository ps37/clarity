/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ModalAngularShowExampleComponent } from './modal-angular-show.example.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [ModalAngularShowExampleComponent],
  entryComponents: [ModalAngularShowExampleComponent],
  exports: [ModalAngularShowExampleComponent],
})
export class ModalAngularShowExampleModule {}

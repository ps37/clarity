/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrModal } from '@clr/angular';

import { ModalStaticDemo } from './modal-static';
import { ModalStyleDesignDemo } from './modal-style-design';
import { ModalSizeDesignDemo } from './modal-size-design';
import { ModalAnimationDesignDemo } from './modal-animation-design';
import { ModalAngularNotClosableExampleComponent } from './modal-angular-not-closable.example.component';
import { ModalAngularShowExampleComponent } from './modal-angular-show.example.component';
import { ModalAngularSizeExampleComponent } from './modal-angular-size.example.component';
import { ModalAngularStaticBackdropDemo } from './modal-angular-static-backdrop';
import { ModalAnimationDemo } from './modal-animation';
import { ModalBackdropDemo } from './modal-backdrop';
import { ModalSizesDemo } from './modal-sizes';
import { ModalDemo } from './modal.demo';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../utils/utils.module';
import { DocLibModule } from '@vcd/ui-doc-lib';
import { ModalAngularShowExampleModule } from './modal-angular-show.example.module';
import { ModalAngularSizeExampleModule } from './modal-angular-size.example.module';
import { ModalAngularNotClosableExampleModule } from './modal-angular-not-closable.example.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalDemo,
        data: {
          documentationEntry: {
            component: ClrModal,
            displayName: 'Clr Modal',
            examples: [
              {
                component: ModalAngularShowExampleComponent,
                title: 'Basic Clr Angular modal',
              },
              {
                component: ModalAngularSizeExampleComponent,
                title: 'Modals of different sizes',
              },
              {
                component: ModalAngularNotClosableExampleComponent,
                title: 'Modal that is not closable',
              },
            ],
          },
        },
      },
    ]),
    UtilsModule,
    DocLibModule,
    ModalAngularShowExampleModule,
    ModalAngularSizeExampleModule,
    ModalAngularNotClosableExampleModule,
  ],
  declarations: [
    ModalStaticDemo,
    ModalStyleDesignDemo,
    ModalSizeDesignDemo,
    ModalAnimationDesignDemo,
    ModalAngularStaticBackdropDemo,
    ModalAnimationDemo,
    ModalBackdropDemo,
    ModalSizesDemo,
    ModalDemo,
  ],
  exports: [ModalDemo],
})
export class ModalExamplesModule {}

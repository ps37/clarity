/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClarityModule, ClrModal} from '@clr/angular';

import { ModalStaticDemo } from './modal-static';
import { ModalStyleDesignDemo } from './modal-style-design';
import { ModalSizeDesignDemo } from './modal-size-design';
import { ModalAnimationDesignDemo } from './modal-animation-design';
import { ModalAngularNotClosableDemo } from './modal-angular-not-closable';
import { ModalAngularShowDemo } from './modal-angular-show';
import { ModalAngularSizeDemo } from './modal-angular-size';
import { ModalAngularStaticBackdropDemo } from './modal-angular-static-backdrop';
import { ModalAnimationDemo } from './modal-animation';
import { ModalBackdropDemo } from './modal-backdrop';
import { ModalSizesDemo } from './modal-sizes';
import { ModalDemo } from './modal.demo';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../utils/utils.module';
import {DocLibModule} from "@vcd/ui-doc-lib";

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
                component: ModalAngularShowDemo,
                title: 'Basic demo showing Clr Angular modal',
              },
              {
                component: ModalAngularSizeDemo,
                title: 'Sizes',
              },
              {
                component: ModalAngularNotClosableDemo,
                title: 'Modal that is not closable',
              },
              {
                component: ModalAngularStaticBackdropDemo,
                title: 'Modal with static backdrop',
              }
            ],
          }
        }
      }
    ]),
    UtilsModule,
    DocLibModule,
  ],
  declarations: [
    ModalStaticDemo,
    ModalStyleDesignDemo,
    ModalSizeDesignDemo,
    ModalAnimationDesignDemo,
    ModalAngularNotClosableDemo,
    ModalAngularShowDemo,
    ModalAngularSizeDemo,
    ModalAngularStaticBackdropDemo,
    ModalAnimationDemo,
    ModalBackdropDemo,
    ModalSizesDemo,
    ModalDemo,
  ],
  exports: [ModalDemo],
})
export class ModalDemoModule {}

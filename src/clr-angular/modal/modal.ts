/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { FocusTrapDirective } from '../utils/focus-trap/focus-trap.directive';
import { ClrCommonStringsService } from '../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../utils/id-generator/id-generator.service';
import { ScrollingService } from '../utils/scrolling/scrolling-service';

/**
 * Modals provide information or help a user complete a task. They require the user to take an action to dismiss them.
 */
@Component({
  selector: 'clr-modal',
  viewProviders: [ScrollingService],
  templateUrl: './modal.html',
  styles: [
    `
        :host { display: none; }
        :host.open { display: inline; }
    `,
  ],
  animations: [
    trigger('fadeDown', [
      transition('* => false', [style({ opacity: 0, transform: 'translate(0, -25%)' }), animate('0.2s ease-in-out')]),
      transition('false => *', [animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translate(0, -25%)' }))]),
    ]),
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('0.2s ease-in-out', style({ opacity: 0.85 }))]),
      transition('* => void', [animate('0.2s ease-in-out', style({ opacity: 0 }))]),
    ]),
  ],
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrModal implements OnChanges, OnDestroy {
  @ViewChild(FocusTrapDirective, { static: false })
  @HostBinding('class.open')
  focusTrap: FocusTrapDirective;
  /**
   * NOTE: presently this is only used by wizards
   */
  @Input('clrModalOverrideScrollService') bypassScrollService: boolean = false;
  /**
   * If true, the modal will not be closable by using keyboard
   */
  @Input('clrModalPreventClose') stopClose: boolean = false;
  /**
   * Two-way binding on the state of the modal: opened or closed.
   */
  @Input('clrModalOpen') _open: boolean = false;
  /**
   * Event emitted whenever the value of 'clrModalOpen' changes
   */
  @Output('clrModalOpenChange') _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  /**
   * If false, the modal will not be closable by clicking on the mask or on the top-right "x".
   */
  @Input('clrModalClosable') closable: boolean = true;
  /**
   * Sets the size of the modal. If it's not set, the default size is medium.
   */
  @Input('clrModalSize') size: string;
  /**
   * If true, the modal will not close when the user clicks outside of the modal.
   */
  @Input('clrModalStaticBackdrop') staticBackdrop: boolean = true;
  /**
   * To skip the fading animation.
   */
  @Input('clrModalSkipAnimation') skipAnimation: string = 'false';
  /**
   * Emitted when closing of the modal through keyboard is prevented
   */
  @Output('clrModalAlternateClose') altClose: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(
    private _scrollingService: ScrollingService,
    public commonStrings: ClrCommonStringsService,
    @Inject(UNIQUE_ID) public modalId: string
  ) {}

  // Detect when _open is set to true and set no-scrolling to true
  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    if (!this.bypassScrollService && changes && changes.hasOwnProperty('_open')) {
      if (changes._open.currentValue) {
        this._scrollingService.stopScrolling();
      } else {
        this._scrollingService.resumeScrolling();
      }
    }
  }

  ngOnDestroy(): void {
    this._scrollingService.resumeScrolling();
  }

  open(): void {
    if (this._open) {
      return;
    }
    this._open = true;
    this._openChanged.emit(true);
  }

  @HostListener('body:keyup.escape')
  close(): void {
    if (this.stopClose) {
      this.altClose.emit(false);
      return;
    }
    if (!this.closable || !this._open) {
      return;
    }
    this._open = false;
    // SPECME
    this.focusTrap.setPreviousFocus(); // Handles moving focus back to the element that had it before.
  }

  fadeDone(e: AnimationEvent) {
    if (e.toState === 'void') {
      // TODO: Investigate if we can decouple from animation events
      this._openChanged.emit(false);
    }
  }
}

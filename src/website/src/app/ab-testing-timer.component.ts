/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'ab-testing-timer',
  template: `
      <button class="btn btn-primary" [disabled]="isStartTimerDisabled" (click)='startTimer()'>Start Timer</button>
      <button class="btn btn-danger" (click)='pauseTimer()'>Pause</button>
      <strong>{{displayTime}}</strong>
      <button style="margin-left: 10px" type="button" class="btn btn-icon btn-primary" aria-label="settings" (click)='resetTimer()'>
          <clr-icon shape="refresh"></clr-icon>
      </button>
`,
})
export class AbTestingTimerComponent {
  resetTimeInSeconds = 0;
  timeElapsed = this.resetTimeInSeconds;
  interval;
  intervalTime = 1000;
  isStartTimerDisabled = false;

  startTimer() {
    this.isStartTimerDisabled = true;
    this.interval = setInterval(() => this.timeElapsed++, this.intervalTime);
  }

  get displayTime(): string {
    const minutes = Math.floor(this.timeElapsed / 60);
    return `${minutes} mins : ${this.timeElapsed - minutes * 60} secs`;
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.isStartTimerDisabled = false;
  }

  resetTimer() {
    this.pauseTimer();
    this.timeElapsed = this.resetTimeInSeconds;
  }
}

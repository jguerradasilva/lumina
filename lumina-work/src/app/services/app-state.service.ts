import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  focusMode = signal(false);
  pomodoroEnabled = signal(true);

  toggleFocusMode(): void {
    this.focusMode.update(value => !value);
  }

  togglePomodoro(): void {
    this.pomodoroEnabled.update(value => !value);
  }
}

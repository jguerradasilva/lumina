export interface SettingsForm {
  cognitiveFocus: boolean;
  clearReading: boolean;
  sensorySensitivity: boolean;
  lowAttention: boolean;
  fontSize: 'small' | 'medium' | 'large';
  visualAlerts: boolean;
  guidedSteps: boolean;
  productivityFocus: boolean;
  pomodoroTimer: boolean;
}
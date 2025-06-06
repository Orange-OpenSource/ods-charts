import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ColorModeService } from '@services/color-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-boosted';
  selectedMode = localStorage.getItem('selectedMode') || 'auto'; // Defaults to auto if no theme is provided, could default to light for Orange sites
  currentMode!: string;

  constructor(private colorModeService: ColorModeService) {
    this.setCurrentModeFromSelectedMode();
  }

  onSelectedModeChange(value: string) {
    this.selectedMode = value;
    localStorage.setItem('selectedMode', this.selectedMode);
    this.setCurrentModeFromSelectedMode();
  }

  setCurrentModeFromSelectedMode() {
    if (this.selectedMode === 'auto') {
      this.currentMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      this.currentMode = this.selectedMode;
    }
    this.colorModeService.currentMode.next(this.currentMode);
  }
}

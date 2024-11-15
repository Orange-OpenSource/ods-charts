import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() selectedMode!: string;
  @Output() selectedModeChange = new EventEmitter<string>();

  constructor(public router: Router) {}

  toggleColorMode(mode: string) {
    this.selectedModeChange.emit(mode);
  }
}

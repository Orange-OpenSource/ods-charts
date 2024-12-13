import { Component } from '@angular/core';
import { NgbAccordionModule, NgbDatepickerModule, NgbDateStruct, NgbPaginationModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boosted-components',
  standalone: true,
  imports: [FormsModule, NgbPaginationModule, NgbDatepickerModule, NgbTimepickerModule, NgbAccordionModule],
  templateUrl: './ng-bootstrap-components.component.html',
  styleUrl: './ng-bootstrap-components.component.scss',
})
export class NgBootstrapComponentsComponent {
  model!: NgbDateStruct;
  date!: { year: number; month: number };
  page = 4;
  time = { hour: 13, minute: 30 };
}

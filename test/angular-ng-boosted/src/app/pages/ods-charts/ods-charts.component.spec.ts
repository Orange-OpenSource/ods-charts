import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsChartsComponent } from './ods-charts.component';

describe('ChartsComponent', () => {
  let component: OdsChartsComponent;
  let fixture: ComponentFixture<OdsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdsChartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OdsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

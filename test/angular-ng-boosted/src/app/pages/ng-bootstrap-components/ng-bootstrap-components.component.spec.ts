import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapComponentsComponent } from './ng-bootstrap-components.component';

describe('NgBootstrapComponentsComponent', () => {
  let component: NgBootstrapComponentsComponent;
  let fixture: ComponentFixture<NgBootstrapComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgBootstrapComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgBootstrapComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

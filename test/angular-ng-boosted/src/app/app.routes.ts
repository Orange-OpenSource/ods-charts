import { Routes } from '@angular/router';
import { OdsChartsComponent } from '@pages/ods-charts/ods-charts.component';
import { HomeComponent } from '@pages/home/home.component';
import { NgBootstrapComponentsComponent } from '@pages/ng-bootstrap-components/ng-bootstrap-components.component';
import { IconsComponent } from '@pages/icons/icons.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ng-bootstrap-components', component: NgBootstrapComponentsComponent },
  { path: 'charts', component: OdsChartsComponent },
  { path: 'icons', component: IconsComponent },
];

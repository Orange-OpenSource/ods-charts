import { Routes } from '@angular/router';
import { OdsChartsComponent } from '@pages/ods-charts/ods-charts.component';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'charts', component: OdsChartsComponent },
];

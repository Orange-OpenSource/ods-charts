/// <reference types="@angular/localize" />

//Boosted
import 'boosted/js/dist/dropdown';
import 'boosted/js/dist/orange-navbar';
import 'boosted/js/dist/popover';
import 'boosted/js/dist/tooltip';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

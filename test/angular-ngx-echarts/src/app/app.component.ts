import {Component} from '@angular/core';
import {GraphComponent} from './graph/graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GraphComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
}

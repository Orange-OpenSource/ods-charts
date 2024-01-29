import {Component} from '@angular/core';
import {LineChartComponent} from './line-chart/line-chart.component';
import {GraphComponent} from './graph/graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LineChartComponent, GraphComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}

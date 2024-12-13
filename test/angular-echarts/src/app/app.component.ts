import { Component } from '@angular/core';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GraphComponent } from './graph/graph.component';

@Component({
    selector: 'app-root',
    imports: [GraphComponent, LineChartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-echarts';
}

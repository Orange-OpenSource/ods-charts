import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GraphComponent } from './graph/graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GraphComponent, LineChartComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-echarts';
}

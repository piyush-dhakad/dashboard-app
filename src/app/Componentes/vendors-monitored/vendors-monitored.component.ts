import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import SolidGauge from 'highcharts/modules/solid-gauge';
import More from 'highcharts/highcharts-more';

More(Highcharts);
SolidGauge(Highcharts);

import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-vendors-monitored',
  templateUrl: './vendors-monitored.component.html',
  styleUrls: ['./vendors-monitored.component.scss']
})
export class VendorsMonitoredComponent {
  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'solidgauge',
        height: '88%',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      pane: {
        center: ['50%', '60%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
          outerRadius: '100%',
          innerRadius: '80%',
          shape: 'arc',
          backgroundColor: '#eee'
        }
      },
      tooltip: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max: 300,
        stops: [[1, '#7f00ff']],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,    
        labels: {
          enabled: false
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -20,
            borderWidth: 0,
            useHTML: true,
            format: `<div style="text-align:center">
                        <span style="font-size:24px;font-weight:bold">{y}</span>
                     </div>`
          }
        }
      },
      series: [{
        name: 'Progress',
        data: [{
          // center: ['100%', '80%'],
          y: 240,
          radius: '100%',
          innerRadius: '80%',
          
        }],
        type: 'solidgauge'
      }]
    } as any);
  }
}

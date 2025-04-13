import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-vendor-breakdown',
  templateUrl: './vendor-breakdown.component.html',
  styleUrls: ['./vendor-breakdown.component.scss']
})
export class VendorBreakdownComponent {
  chart!: Chart;

  constructor(private chartService: ChartService) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'];
    
      const segment1Data = [20, 20, 20, 10, 10, 25, 30, 20, 20, 25, 20, 25]; // 0-20 range
      const segment2Data = [20, 30, 10, 15, 30, 10, 20, 10, 30, 10, 35, 10]; // 20-50 range
      const segment3Data = [25, 10, 20, 20, 10, 15, 10, 15, 20, 30, 15, 25]; // 50-80 range
  
    this.chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: months,
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Rating'
        },
        tickPositions: [0, 20, 40, 60, 80, 100]
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderWidth: 1,
          borderColor: '#333'
        }
      },
      series: [
        {
          name: '0-10',
          type: 'column',
          data: segment1Data,
          color: '#003366'
        },
        {
          name: '20-50',
          type: 'column',
          data: segment2Data,
          color: '#3366CC'
        },
        {
          name: '50-80',
          type: 'column',
          data: segment3Data,
          color: '#99CCFF'
        }
      ],
    } as Highcharts.Options);
  }
}
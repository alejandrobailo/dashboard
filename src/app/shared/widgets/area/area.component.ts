import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions = {}
  HighCharts = HighCharts;

  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Ramdom Test'
      },
      subtitle: {
        text: 'Test'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };

    HC_exporting(HighCharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

  }

}

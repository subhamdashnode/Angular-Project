import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-piechat',
  templateUrl: './piechat.component.html',
  styleUrls: ['./piechat.component.scss']
})
export class PiechatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Student', 'Marks'],
      ['A', 80],
      ['B', 90],
      ['C', 88],
      ['D', 87],
      ['E',56]
    ],
    options: { 'title': 'Student Marks' },
  };
}

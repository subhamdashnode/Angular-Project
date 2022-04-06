import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart2',
  templateUrl: './linechart2.component.html',
  styleUrls: ['./linechart2.component.scss']
})
export class Linechart2Component implements OnInit {

  salesData: any= {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }
  chartOptions: any = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

}

import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lineChartData = d3.range(21).map(function (d) { return { "y": d3.randomUniform(1)() } })
  barChartData = [{ "year": "2014", "value": .07 },
  { "year": "2015", "value": .13 },
  { "year": "2016", "value": .56 },
  { "year": "2017", "value": .95 },
  { "year": "2018", "value": .81 }];
   
  // tableData = [{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // },{
  //   Company: 'HP',
  //   Sales: 200,
  //   Product: 'Keyboard',
  //   Date: '2nd Jan'
  // }];

  // headerValues = Object.keys(this.tableData[0])
}

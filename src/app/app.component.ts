import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lineChartData = d3.range(10).map(function (d) { return { "y": d3.randomUniform(1)() } });
  
  barChartData = [{ "year": "2014", "value": .07 },
  { "year": "2015", "value": .13 },
  { "year": "2016", "value": .56 },
  { "year": "2017", "value": .95 },
  { "year": "2018", "value": .81 },
  { "year": "2019", "value": .13 },
  { "year": "2020", "value": .13 },
  { "year": "2021", "value": .56 },
  { "year": "2022", "value": .95 },
  { "year": "2023", "value": .81 },
  { "year": "2024", "value": .13 }];

  pieChartData = [
      { "region": "North", "count": "53245"},
      { "region": "South", "count": "28479"},
      { "region": "East", "count": "19697"},
      { "region": "West", "count": "24037"},
      { "region": "Central", "count": "40245"}
    ]
};

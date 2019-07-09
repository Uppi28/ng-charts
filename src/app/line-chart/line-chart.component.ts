import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnInit {
  @Input('lineChartData') dataset: Array<{}>
  @Input() lineColor: string
  constructor() { }

  ngOnInit() {
    console.log(this.dataset)

    var margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = 460 - margin.left - margin.right,
      height = 320 - margin.top - margin.bottom;

    var n = 21;

    var xScale = d3.scaleLinear()
      .domain([0, n - 1])
      .range([0, width]); 
      
    var yScale = d3.scaleLinear()
      .domain([0, 1]) 
      .range([height, 0]); 

    var line = d3.line()
      .x(function (d, i) { return xScale(i); })
      .y(function (d) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var dataset = this.dataset;

    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)); 
      
    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); 

    svg.append("path")
      .datum(dataset)
      .attr("class", "line")
      .attr("d", line)
      .style("stroke", this.lineColor)
      .transition()
      .duration(750)
      .delay(function (d, i) {
        return i * 150;
      });
      
    svg.selectAll(".dot")
      .data(dataset)
      .enter().append("circle")
      .attr("class", "dot") 
      .attr("cx", function (d, i) { return xScale(i) })
      .attr("cy", function (d) { return yScale(d.y) })
      .attr("r", 5)
      .style("fill", this.lineColor)
      .on("mouseover", function (a) {
        console.log(a)
      })
      .on("mouseout", function () { })
  }

}

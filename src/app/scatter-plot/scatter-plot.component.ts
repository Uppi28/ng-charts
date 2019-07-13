import { Component, OnInit, Input } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit {

  @Input() selectorDiv: string;
  constructor() { }

  ngOnInit() {
    //width and height
    var margin = { top: 40, right: 30, bottom: 30, left: 50 }
    var width = document.getElementById(this.selectorDiv).clientWidth - margin.left - margin.right - 10;
    var height = document.getElementById(this.selectorDiv).clientHeight - margin.top - margin.bottom -10;
    console.log(document.getElementById(this.selectorDiv).clientWidth ,document.getElementById(this.selectorDiv).clientHeight);
    

		var dataset = []
    dataset.push([46, 10]);
    dataset.push([47, 20]);
    dataset.push([51, 30]);
    dataset.push([52, 40]);
    dataset.push([38, 50]);
    dataset.push([0, 60]);
    dataset.push([10, 70]);
    dataset.push([20, 80]);
    dataset.push([30, 90]);
    dataset.push([40, 100]);
    dataset.push([50, 10]);
    dataset.push([60, 20]);
    dataset.push([10, 30]);
    dataset.push([20, 40]);
    dataset.push([30, 29]);

		/*
		dataset = [{max: 46, min: 32},
					{max: 47, min: 31},
					{max: 51, min: 41},
					{max: 52, min: 38},
					{max: 38, min: 29}];
					*/

    //scale function
    var xScale = d3.scaleLinear()
      //.domain(["Alabama","Alaska","Arizona","Arkansas","California"])
      .domain([0, d3.max(dataset, function (d) { return d[0]; })])
      //.range([padding, w-padding * 2]);
      .range([0, width]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      //.range([padding, w-padding * 2]);
      .range([height, 0]);

    var xAxis = d3.axisBottom().scale(xScale).ticks(5);

    var yAxis = d3.axisLeft().scale(yScale).ticks(5);

    //create svg element
    var svg = d3.select("#"+this.selectorDiv)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");;

    svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return height - yScale(d[1]);
      })
      .attr("r", 5)
      .attr("fill", "green");

    //x axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," +height+")")
      .call(xAxis)
      .append("text")
      .attr("x", width)
      .attr("y", "-10px")
      .attr("dx", "1em")
      .style("text-anchor", "end")
      .style("fill", "gray")
      .text('X Axis');;

    //y axis
    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(0)")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("fill", "gray")
      .text('Y Axis');

      svg.append("text")
      .attr("x", (width / 2))
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text('Chart Title');

  }

}

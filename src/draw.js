import React from "react";
import useTableTop from "./useTableTop";
import { formatJobData } from "./utility";
import * as d3 from "d3";

const Draw = () => {
  const response = useTableTop(
    "https://docs.google.com/spreadsheets/d/1izAg7Iwy4fiHr11OACKke8Obq6vPdgMx99p2zPCXeq8/edit?usp=sharing",
    formatJobData
  );

  console.log(response);

  const d3Ref = React.useRef();

  var height = 500;
  var width = 500;
  var radius = Math.min(width, height) / 2;
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  // translates the coord system of g
  var g = d3
    .select(d3Ref.current) // creates <svg></svg>
    .append("svg")
    .attr("width", width) // sets width of svg
    .attr("height", height) // set height of svg
    .append("g") // creates a <g> ele inside svg 
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // defines the partition sizes in sunburst shape
  var partition = d3.partition().size([2 * Math.PI, radius]);

  // uses root not and gives a size value to all of the objs
  var root = d3.hierarchy(response).sum(function (d) { return d.size })


  partition(root);
  var arc = d3.arc()  // <-- 2
    .startAngle(function (d) { return d.x0 })
    .endAngle(function (d) { return d.x1 })
    .innerRadius(function (d) { return d.y0 })
    .outerRadius(function (d) { return d.y1 });

  g.selectAll('g')
    .data(root.descendants())
    .enter().append('g').attr("class", "node")
    .append('path')
    .attr('display', function (d) { return d.depth ? null : "none"; })
    .attr('d', arc)
    .style('stroke', '#fff')
    .style("fill", function (d) { return color((d.children ? d : d.parent).data.name) });


  return <div></div>;
};

export default Draw;

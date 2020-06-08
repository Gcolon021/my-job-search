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

  var height = 500;
  var width = 500;
  var radius = Math.min(width, height) / 2;
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var svg = d3
    .select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var partition = d3.partition().size([2 * Math.PI, radius]);

  return <div></div>;
};

export default Draw;

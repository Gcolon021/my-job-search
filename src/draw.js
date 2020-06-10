import React from "react";
// import useTableTop from "./useTableTop";
import { formatJobData } from "./utility";
import * as d3 from "d3";
import Tabletop from "tabletop";

const Draw = () => {
  const d3Ref = React.useRef(null);

  var height = 1000;
  var width = 1000;
  var radius = Math.min(width, height) / 2;
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  React.useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1izAg7Iwy4fiHr11OACKke8Obq6vPdgMx99p2zPCXeq8/edit?usp=sharing",
      callback: (googleData) => {
        drawSunBurst(formatJobData(googleData));
      },
      simpleSheet: true,
    });
  }, []);

  const drawSunBurst = (d3Data) => {
    console.log(d3Data);

    if (d3Data !== null) {
      // translates the coord system of g
      var g = d3
        .select(d3Ref.current) // creates <svg></svg>
        .append("svg")
        .attr("width", width) // sets width of svg
        .attr("height", height) // set height of svg
        .style("border", "1px solid black")
        .append("g") // creates a <g> ele inside svg
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      // .attr("transform", "rotate(" + 10 + ")");

      // defines the partition sizes in sunburst shape
      var partition = d3.partition().size([Math.PI, radius]);

      // uses root not and gives a size value to all of the objs
      var root = d3.hierarchy(d3Data).sum(function (d) {
        return d.size;
      });

      partition(root);
      var arc = d3
        .arc() // <-- 2
        .startAngle(function (d) {
          return d.x0;
        })
        .endAngle(function (d) {
          return d.x1;
        })
        .innerRadius(function (d) {
          return d.y0;
        })
        .outerRadius(function (d) {
          return d.y1;
        });

      g.selectAll("path")
        .data(root.descendants())
        .enter()
        .append("path")
        .attr("display", function (d) {
          return d.depth ? null : "none";
        })
        .attr("d", arc)
        .style("stroke", "#fff")
        .style("fill", function (d) {
          return color(() => {
            console.log((d.children ? d : d.parent).d3Data.name);
            return (d.children ? d : d.parent).d3Data.name;
          });
        });
    }
  };

  return (
    <div
      style={{ height: `${height}px`, width: `${width}px` }}
      ref={d3Ref}
    ></div>
  );
};

export default Draw;

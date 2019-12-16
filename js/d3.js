

var width = 350
    height = 350
    margin = 20
    padding = 10, 0, 0, 10

    var radius = Math.min(width, height) / 2 - margin

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    

var data1 = {a: 1.73, b: 4.47, c:1.13, d:0.92, e:21.02, f:0.49, g:2.13, h:25.09, i:10.06, j:32.98}
var data2 = {a: 1.73, b: 4.49, c:1.13, d:0.43, e:21.13, f:0.47, g:2.13, h:25.22, i:10.12, j:33.15}


var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"])
  .range(["red", "blue", "green", "cyan", "gray", "success", "pink", "orange", "indigo", "yellow"]);



function update(data) {

  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) {return d3.ascending(a.key, b.key);} )
  
  var data_ready = pie(d3.entries(data))

  var u = svg.selectAll("path")
    .data(data_ready)

  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

   

  u
    .exit()
    .remove()

}

update(data1)



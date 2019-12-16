var data3 = [
    {group: "A", value: 3046},
    {group: "КБ", value: 7890},
    {group: "КЧ", value: 1976},
    {group: "Кр", value: 1616},
    {group: "Ст", value: 37088},
    {group: "Бл", value: 867},
    {group: "Вл", value: 3746},
    {group: "Во", value: 44271},
    {group: "Ку", value: 17757},
    {group: "Ро", value: 58193}
 ];
 
 var data4 = [
    {group: "A", value: 3046},
    {group: "КБ", value: 7890},
    {group: "КЧ", value: 1976},
    {group: "Кр", value: 758},
    {group: "Ст", value: 37088},
    {group: "Бл", value: 827},
    {group: "Вл", value: 3746},
    {group: "Во", value: 44271},
    {group: "Ку", value: 17757},
    {group: "Ро", value: 58193}
 ];



 
 var margin = {top: 30, right: 30, bottom: 70, left: 60},
     width = 460 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;
 

 var svg = d3.select("#my_dataviz2")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");

 var x = d3.scaleBand()
   .range([ 0, width ])
   .padding(0.2);
 var xAxis = svg.append("g")
   .attr("transform", "translate(0," + height + ")")
 

 var y = d3.scaleLinear()
   .range([ height, 0]);
 var yAxis = svg.append("g")
   .attr("class", "myYaxis")
 

 function update(data) {
   x.domain(data.map(function(d) { return d.group; }))
   xAxis.call(d3.axisBottom(x))
 
   y.domain([0, d3.max(data, function(d) { return d.value }) ]);
   yAxis.transition().duration(1000).call(d3.axisLeft(y));
 

   let u = svg.selectAll("rect")
     .data(data)
 
   u
     .enter()
     .append("rect") 
     .merge(u) 
     .transition()  
     .duration(1000)
       .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "#69b3a2")
  
   u
     .exit()
     .remove()
 }
 
 update(data3)
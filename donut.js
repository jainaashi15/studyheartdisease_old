loadDonut = function(dataset)
{
    console.log(dataset);
    var w = 150;
    var h = 150;	
    var outerRadius = w / 2;
    var innerRadius = 30;
    var arc = d3.svg.arc()
                 .innerRadius(innerRadius)
                 .outerRadius(outerRadius);
      
     var pie = d3.layout.pie()
                 .value(function(d){ return d.percentage});
 
     var color;
    
         color = d3.scale.ordinal()
         .range(["#e7e1ef","#c994c7"]);
             
 
     //Create SVG element
     var svg = d3.select("body")
                 .select("#donutDiv")
                 .append("svg")
                 .attr("width", 200)
                 .attr("height", 200)
                 .attr("id","donutChart");
                // .style("position","center");
         
     var arcs = svg.selectAll("g.arc")
                   .data(pie(dataset))
                   .enter()
                   .append("g")
                   .attr("class", "arc")
                   .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
 
     arcs.append("path")
                   .attr("fill", function(d, i) {
                       return color(i);
                   })
                   .attr("d", arc);

 
    

     arcs.append("text")
         .attr("transform", function(d) {
             return "translate(" + arc.centroid(d) + ")";
         })
         .attr("text-anchor", "middle")
         .style("font-size", "10px")
         .text(function(d) {
             return d.value + "%";
         })
         .on("mouseover", function(d,i) {
         d3.select("#tooltip")                   
         .style("position","absolute")
         .style("left", Math.max(0, d3.event.pageX - 150) + "px") 
         .style("top",  (d3.event.pageY + 20) + "px")//	yPosition
         //.select("#value")
         .text(function(){
             //condition
             var txt;
           
             txt = "Count: "+ dataset[i].diseaseCount  + ", Name :" + dataset[i].diseaseName;
             return txt;});
         d3.select("#tooltip").classed("hidden", false)
     })
     .on("mouseout", function(){
         d3.select("#tooltip").classed("hidden", true)
     });
   
}

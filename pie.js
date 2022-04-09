loadPie = function(dataset)
{
    var w = 200;
    var h = 200;	
    var outerRadius = w / 2;
    var innerRadius = 0;
    var arc = d3.svg.arc()
                 .innerRadius(innerRadius)
                 .outerRadius(outerRadius);
      
     var pie = d3.layout.pie()
                 .value(function(d){ return d.percentage});
 
     //Gender // condition
     //var color = d3.scale.ordinal()
     //            .range(["#fec44f","#fc9272"]);
     var color;
     if(loadCondition == params[0])
     {
         color = d3.scale.ordinal()
         .range(["#fec44f","#fc9272"]);
     }
      if(loadCondition == params[1])
     {
         color = d3.scale.ordinal()
         .range(["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2","#d8daeb","#f7f7f7"]);
     } 
     if(loadCondition == params[2])
     {
         color = d3.scale.ordinal()
         .range(["#9e0142","#d53e4f","#f46d43","#fdae61","#66c2a5","#abdda4"]);
     }            
 
     //Create SVG element
     var svg = d3.select("body")
                 .select("#pieDiv")
                 .append("svg")
                 .attr("width", 400)
                 .attr("height", 250)
                 .attr("id","pieChart");
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
             if(loadCondition == params[0])
             {
                 txt = "Count: "+ dataset[i].genderCount  + ", Gender :" + dataset[i].gender;
             }
              if(loadCondition == params[1])
             {
                 txt = "Count: "+ dataset[i].ageGrpCount  + ", age Group :" + dataset[i].ageGrp;
                 //constructor(ageGrpCount, ageGrp,  percentage) {
             }
             if(loadCondition == params[2])
             {
                 //constructor(diseaseCount, diseaseName, percentage)
                 txt = "Count: "+ dataset[i].diseaseCount  + ", Disease Name :" + dataset[i].diseaseName; 
             }
           
             return txt;});
         d3.select("#tooltip").classed("hidden", false)
     })
     .on("mouseout", function(){
         d3.select("#tooltip").classed("hidden", true)
     });
   
}
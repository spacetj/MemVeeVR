<!--
   // we scale the height of our bars using d3's linear scale
    

     var hscale = d3.scale.linear()
       .domain([0, 200])
       .range([0, 3])

     // we select the scene object just like an svg
     var scene = d3.select("a-scene")
     var numOfEntities = 6

     // we use d3's enter/update/exit pattern to draw and bind our dom elements
     var entities = scene.selectAll("a-entity.box")
     entities.append("a-entity").classed("box", true)

     // we set attributes on our cubes to determine how they are rendered
     entities.attr({
       position: function(d,i) {
         // cubes are positioned by their center so we
         // offset for their height
         var y = 2;
         // lets place the bars all around our camera
         var radius = 10;
         var theta = i/numOfEntities * 2 * Math.PI - 3/4*Math.PI
         var x = radius * Math.cos(theta)
         var z = radius * Math.sin(theta)
         return x + " " + y + " " + z
       },
       rotation: function(d,i) {
         var x = 0;
         var z = 0;
         var y = -(i/numOfEntities)*360 - 45;
         return x + " " + y + " " + z
       },
       geometry: "primitive: box; width: 6; height: 2; depth:3;",
       depth: function(d) { return 0.9},
       opacity: function(d,i) { return 0.6 + (i/numOfEntities) * 0.4}
       //metalness: function(d,i) { return i/data.length}
     })

     function togglePlayback () {
      var el = document.getElementById('video')
      var material = Object.assign({}, el.getAttribute('material'))
      material.pause = !material.pause
      el.setAttribute('material', material)
    }

    //  .on("click", function(d,i) {
    //    console.log("click")
    //  })
    //  .on("mouseenter", function(d,i) {
    //    // this event gets fired continuously as long as the cursor
    //    // is over the element. we only want trigger our animation the first time
    //    if(this.hovering) return;
    //    console.log("hover")
    //    this.hovering = true;
    //    d3.select(this).transition().duration(1000)
    //    .attr({
    //      geometry: "primitive: box; width: 12; height: 4; depth:5;"
    //    })
    //  })
    //  .on("mouseleave", function(d,i) {
    //    console.log("leave")
     //
    //    this.hovering = false;
     //
    //    d3.select(this).transition()
    //    .attr({
    //      geometry: "primitive: box; width: 1; height: 2; depth:2;"
    //    })
    //  })
     -->

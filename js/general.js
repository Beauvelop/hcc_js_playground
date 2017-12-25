~function() {
    var btns = $('button');
    var landBtn = $('#landBtn');
    var ufoBtn = $('#ufoBtn');
    var moonBtn = $('#moonBtn');
    var houseBtn = $('#houseBtn');
    var treeBtn = $('#treeBtn');
    var starsBtn = $('#starsBtn');
    
    starsBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#twinkleBtn').toggle('fast');
        $('#starsSVG').toggle('slow');
    });
    landBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#landscape').toggle('slow');
    });
    ufoBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#alien').toggle('slow');
    });
    moonBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#moon').toggle('slow');
    });
    houseBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#house').toggle('slow');
    });
    treeBtn.on("click", function() {
        console.log("You clicked this: ", this, "\n with an id of ", this.id);
        $('#tree').toggle('slow');
    });
    
    // btns.each().on("click",function() {
    //         alert(this);
    //     })
        
}();
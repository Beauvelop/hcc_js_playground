~function() {
    var landBtn = $('#landBtn'),
        ufoBtn = $('#ufoBtn'),
        moonBtn = $('#moonBtn'),
        houseBtn = $('#houseBtn'),
        treeBtn = $('#treeBtn'),
        starsBtn = $('#starsBtn');

    var svgArr = [landBtn, starsBtn, ufoBtn, treeBtn, houseBtn, moonBtn];

    svgArr.forEach(function(btn) {
        btn.on("click", function() {
            var linkedSVG = "#"+ this.id.toString().slice(0, -3)+"SVG"; //create str for id of corresponding SVG
            $(linkedSVG).toggle("slow");
        })
    })
}();
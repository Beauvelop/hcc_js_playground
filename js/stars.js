(function(){

  twinkleBtn = $('#twinkleBtn');

    var star1 = $('#star1'),
      star2 = $('#star2'),
      star3 = $('#star3'),
      star4 = $('#star4'),
      star5 = $('#star5'),
      star6 = $('#star6'),
      star7 = $('#star7'),
      star8 = $('#star8'),
      star9 = $('#star9'),
      star10 = $('#star10'),
      star11 = $('#star11'),
      star12 = $('#star12'),
      star13 = $('#star13'),
      star14 = $('#star14'),
      star15 = $('#star15'),
      star16 = $('#star16'),
      star17 = $('#star17');
      
    /***********************************/
      var tl = new TimelineMax({
      onReverseComplete:reverseRepeat,
      onReverseCompleteParams:['{self}'],
      onComplete:complete,
      onCompleteParams:['{self}']
    });
    
    var array = [star1,star2,star3,star4,star5,star6,star7,star8, star9, star10, star11, star12, star13, star14, star15, star16, star17];
   // get collection of children  
    // array.forEach(item => tl.to(item, 1, {alpha: 0}).to(item, 1, {alpha: 1})) //ES6
    /* using pre es6 for gulp */
    array.forEach(function(item) { 
        tl.to(item, 1, {alpha: 0}).to(item, 1, {alpha: 1});    
    })

    function reverseRepeat(tl) {
      tl.reverse(0); // 0 sets the playhead at the end of the animation
    }
    function complete(tl) {
      tl.restart(); // 0 sets the playhead at the end of the animation
    }
    
    twinkleBtn.on("click", function() {
      tl.play();
      tl.reversed(!tl.reversed());
    })
    tl.pause();
    
    /***********************************/
    
      
      
    //   var IDs = $("#starsSVG path")         // find all paths
    //   .map(function() { return this.id; }) // convert to set of IDs
    
    //   var nuArr=[];
      
    //   IDs.map((item, idx) => nuArr.push(IDs[item]))
    // console.log(nuArr)  
    
      
      
    
    }());
//This js file have nothing to do with React, only Loading function is defined here
  var loading = function(action) {
        // add the overlay with loading image to the page
        if(action=="on"){
        var over = '<div id="overlay">' +
            '<img id="loading" src="http://bit.ly/pMtW1K" >' +
            '</div>';
       //$(over).appendTo('body');
       $('body').append(over);
       $('html, body').css("cursor", "wait");
         		console.log("creating overlay");


    }
    else if(action=="off"){
        	 		$("#overlay").remove();
        	 		$('html, body').css("cursor", "auto");
        	     	console.log("removing overlay");

    }


    };
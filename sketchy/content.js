var ctx, color = "#000";
var darkMode = false;
var rainbowMode = false;
var backgroundColor = "#FFF9EB";

function test(){
    	drawTouch();
	drawPointer();
	drawMouse();
}
document.addEventListener('DOMContentLoaded', function() {
    var pen = document.getElementById('pen');
    // onClick's logic below:
    pen.addEventListener('click', function() { 
        if (darkMode == true) {
            ctx.strokeStyle = "#FFFFFF";
        } else if(rainbowMode == true){
	    var grd = ctx.createLinearGradient(0, 0, 170, 0);
	    grd.addColorStop(0, "black");
	    grd.addColorStop("0.3", "magenta");
	    grd.addColorStop("0.5", "blue");
	    grd.addColorStop("0.6", "green");
            grd.addColorStop("0.8", "yellow");
 	    grd.addColorStop(1, "red");
	    ctx.strokeStyle = grd;
	}else{
            ctx.strokeStyle = "#000000";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var jpg = document.getElementById('jpg');
    jpg.addEventListener('click', function() {
        var canvas = document.getElementById('canvas');
        jpg.href = canvas.toDataURL("image/jpeg", 1.0);
        jpg.download = 'note.jpg';
        })
    })
document.addEventListener('DOMContentLoaded', function() {
    var erase = document.getElementById('eraser');
    // onClick's logic below:
    erase.addEventListener('click', function() {
        if (darkMode == true) {
            ctx.strokeStyle = "#201F4B";
        } else if(rainbowMode == true){
	    ctx.strokeStyle = "#E5E5E5";
	} else{
            ctx.strokeStyle = "#FFF9EB";
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var thi = document.getElementById('myRange');
    // onClick's logic below:
	thi.addEventListener('click', function() {
	ctx.lineWidth = ((document.getElementById('myRange').value)/10)
		document.alert("hi");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var dark = document.getElementById('dark');
    // onClick's logic below:
    dark.addEventListener('click', function() {
        darkMode = true;
	rainbowMode = false;
        // Bottombar
        document.getElementsByClassName("bottombar")[0].style.backgroundColor="#533A89";
        // Navbar
        document.getElementsByClassName("topbar")[0].style.backgroundColor="#533A89";
        document.getElementsByClassName("topbar")[0].style.backgroundImage="none";
        // Canvas
        document.getElementsByClassName("inner-body")[0].style.backgroundColor="#201F4B";
        // Logo
        document.getElementsByClassName("logo")[0].style.filter="invert(1) brightness(2)";
        // Pen
        document.getElementById("pen").style.filter="invert(1) brightness(2)";
        // Eraser
        document.getElementById("eraser").style.filter="invert(1) brightness(2)";
        // Clear
        document.getElementById("clear").style.filter="invert(1) brightness(2)";
        // Thiccs
        var thiccs = document.getElementsByClassName("thick");
        for (var i = 0; i < thiccs.length; i++) {
            thiccs[i].style.filter="invert(1) brightness(2)";
        }
        // Save-Buttons
        var buttons = document.getElementsByClassName("save-button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.cssText="color: white; border-color: white;"
        }
        // Pen Color
        ctx.strokeStyle = "#FFFFFF";
        backgroundColor = "#201F4B"
        drawRect();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var rb = document.getElementById('rainbow');
    // onClick's logic below:
    rb.addEventListener('click', function() {
        rainbowMode = true;
	darkMode = false;
        // Bottombar
        document.getElementsByClassName("bottombar")[0].style.backgroundColor="#C3DAE9";
        // Navbar
        document.getElementsByClassName("topbar")[0].style.backgroundColor="#E5E5E5";
        document.getElementsByClassName("topbar")[0].style.backgroundImage= "url('./images/poke.png')";
	    // Canvas
        document.getElementsByClassName("inner-body")[0].style.backgroundColor="#E5E5E5";
        // Logo
        document.getElementsByClassName("logo")[0].style.filter="none";
        // Pen
        document.getElementById("pen").style.filter="none";
        // Eraser
        document.getElementById("eraser").style.filter="none";
        // Clear
        document.getElementById("clear").style.filter="none";
        // Thiccs
        var thiccs = document.getElementsByClassName("thick");
        for (var i = 0; i < thiccs.length; i++) {
            thiccs[i].style.filter="none";
        }
        // Save-Buttons
        var buttons = document.getElementsByClassName("save-button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.cssText="color: black; border-color: black;"
        }
        // Pen Color
        ctx.strokeStyle = "#E5E5E5";
        backgroundColor = "#E5E5E5"
        drawRect();
	var grd = ctx.createLinearGradient(0, 0, 680, 0);
	grd.addColorStop(0, "black");
	grd.addColorStop("0.3", "magenta");
	grd.addColorStop("0.5", "blue");
	grd.addColorStop("0.6", "green");
        grd.addColorStop("0.8", "yellow");
 	grd.addColorStop(1, "red");
	ctx.strokeStyle = grd;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var regular = document.getElementById('regular');
    // onClick's logic below:
    regular.addEventListener('click', function() {
        darkMode = false;
	rainbowMode = false;
        // Bottombar
        document.getElementsByClassName("bottombar")[0].style.backgroundColor="#DAB8B6";
        // Navbar
        document.getElementsByClassName("topbar")[0].style.backgroundColor="#DAB8B6";
        document.getElementsByClassName("topbar")[0].style.backgroundImage="none";
        // Canvas
        document.getElementsByClassName("inner-body")[0].style.backgroundColor="#FFF9EB";
        // Logo
        document.getElementsByClassName("logo")[0].style.filter="none";
        // Pen
        document.getElementById("pen").style.filter="none";
        // Eraser
        document.getElementById("eraser").style.filter="none";
        // Clear
        document.getElementById("clear").style.filter="none";
        // Thiccs
        var thiccs = document.getElementsByClassName("thick");
        for (var i = 0; i < thiccs.length; i++) {
            thiccs[i].style.filter="none";
        }
        // Save-Buttons
        var buttons = document.getElementsByClassName("save-button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.cssText="color: black; border-color: black;"
        }
        // Pen Color
        ctx.strokeStyle = "#000000";
        backgroundColor = "#FFF9EB"
        drawRect();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var clear = document.getElementById('clear');
    // onClick's logic below:
    clear.addEventListener('click', function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
    });
});

document.addEventListener( "DOMContentLoaded", function(){

	// setup a new canvas for drawing wait for device init
    setTimeout(function(){
	   newCanvas();
    }, 1000);

}, false )

function newCanvas(){
	//define and resize canvas
    document.getElementById("content").style.height = window.innerHeight-90;
    var canvas = '<canvas id="canvas" width="'+(window.innerWidth)+'" height="'+(window.innerHeight-90)+'"></canvas>';
	document.getElementById("content").innerHTML = canvas;
    
    // setup canvas
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.strokeStyle = color;
    ctx.lineWidth = 5;
	
    // setup to trigger drawing on mouse or touch
    drawRect();
    drawTouch();
    drawPointer();
	drawMouse();
}

function drawRect() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, 700, 500);
    }
  }

var drawTouch = function() {
	var start = function(e) {
		ctx.beginPath();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
	};
    document.getElementById("canvas").addEventListener("touchstart", start, false);
	document.getElementById("canvas").addEventListener("touchmove", move, false);
}; 

var drawTouch = function() {
	var start = function(e) {
		ctx.beginPath();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
	};
    document.getElementById("canvas").addEventListener("touchstart", start, false);
	document.getElementById("canvas").addEventListener("touchmove", move, false);
}; 
    
// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
var drawPointer = function() {
	var start = function(e) {
        e = e.originalEvent;
		ctx.beginPath();
		x = e.pageX;
		y = e.pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
        e = e.originalEvent;
		x = e.pageX;
		y = e.pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
    };
    document.getElementById("canvas").addEventListener("MSPointerDown", start, false);
	document.getElementById("canvas").addEventListener("MSPointerMove", move, false);
};      

// prototype to	start drawing on mouse using canvas moveTo and lineTo
var drawMouse = function() {
	var clicked = 0;
	var start = function(e) {
		clicked = 1;
		ctx.beginPath();
		x = e.pageX;
		y = e.pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		if(clicked){
			x = e.pageX;
			y = e.pageY-74;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
	};
	var stop = function(e) {
		clicked = 0;
	};
    document.getElementById("canvas").addEventListener("mousedown", start, false);
	document.getElementById("canvas").addEventListener("mousemove", move, false);
	document.addEventListener("mouseup", stop, false);
};

document.addEventListener('DOMContentLoaded', function() {
    var png = document.getElementById('png');
    png.addEventListener('click', function() {
        var canvas = document.getElementById('canvas');
        png.href = canvas.toDataURL();
        png.download = 'note.png';
        })
    })

document.addEventListener('DOMContentLoaded', function() {
    var jpg = document.getElementById('jpg');
    jpg.addEventListener('click', function() {
        var canvas = document.getElementById('canvas');
        jpg.href = canvas.toDataURL("image/jpeg", 1.0);
        jpg.download = 'note.jpg';
        })
    })


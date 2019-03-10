var app = new Framework7({

    root: "#app",
    /* THIS IS THE APP ELEMENT */
    routes: [
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
})

var mainView = app.views.create('.view-main');

// check that Mobile devices is ready, if it is, run init() function.
document.addEventListener("deviceready", init, false);
//init(); // use for testing on chrome

function init() {
    console.log("Ready to Roll - Camera")

    var vidOptions = {
        limit: 1,
        duration: 10,
        quality: 1
    }  
    
    $("#takeVid").on("click", vidCapture);

    function vidCapture() {
        console.log("Button was tapped")
        navigator.device.capture.captureVideo(vidSuccess, vidError, vidOptions)
    }

    function vidSuccess(mediaFiles) {
        console.log("Video was successfully captured");

        var path = mediaFiles[0].fullPath;
        var type = mediaFiles[0].type;

        console.log(path)

        $("#vidList").append('<video controls><source src="' + path + '" type="' + type + '" ></video>')
    }

    function vidError(e) {
        console.log("Video did not work")
    }

}
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

    var soundFile = ["assets/button_drop.mp3", "assets/coins.mp3", "assets/elastic.mp3", "assets/soggy.mp3", "assets/swoosh.mp3", "assets/zipper.mp3"];
    var x = Math.floor((Math.random() * 6));
    console.log("Audio file = ", x);

    $(".audioPlayer").html('<audio controls id="playSound"><source id="soundArray" src="' + soundFile[x] + '"></audio>');

    var sound = document.getElementById("playSound");


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

        $("#vidList").append('<video controls id="videoFinal"><source  src="' + path + '" type="' + type + '" ></video>')

        

        var vid = document.getElementById("videoFinal");
        vid.muted = true;
        
        vid.onplaying = function (){
            sound.play();
        };
    }

    function vidError(e) {
        console.log("Video did not work")
    }






}

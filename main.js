function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(800,130);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background('#33e84e')
}
function modelloaded(){
    console.log("Posenet Is Initialized");
}
function gotposes(result){
    if(result.length >0){
        console.log(result);
    }
}
function preload() {
clown_nose=loadImage("https://i.postimg.cc/JnKD06rY/Moustach-PNG.png")
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();  

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
    
}

function draw() {

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function  take_snapshot() {
    save("clown.png");
}

noseX=0
noseY=0

    
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);

    



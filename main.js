function preload()
{

}

function setup()
{
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide()
video.size(400,400);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("posenet is loaded!=)");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x coord. is="+results[0].pose.nose.x);
        console.log("nose y coord. is="+results[0].pose.nose.y);

    }
}

function draw()
{
image(video,0,0,400,400)
}

function take_snapshot()
{
save(my_lipstick.png);
}
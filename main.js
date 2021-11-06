 function setup() {
     video=createCapture(VIDEO);
     video.size(550,500);

     canvas= createCanvas(550,550);
     canvas.position(560,150);

     posenet=ml5.poseNet(video,modelloaded);
     posenet.on("pose",gotPoses);
 }

 function draw(){
     background("#ae9db8");
     fill("#967373");
     stroke("#967373");
     square(nosex,nosey,difference);
     document.getElementById("squareside").innerHTML="side of the square is "+difference+"px";
 }

 function modelloaded(){
     console.log("PoseNet has been initialized");
 }

 function gotPoses(results){
     if(results.length >0){
         console.log(results);
         nosex=results[0].pose.nose.x;
         nosey=results[0].pose.nose.y;
         console.log("nosex ="+nosex+"nosey ="+nosey);
         leftx=results[0].pose.leftWrist.x;
         rightx=results[0].pose.rightWrist.x;
         difference=floor(leftx-rightx);
     }

 }

 nosex =0 ;
 nosey =0;

 leftx =0;
 rightx =0;
 difference =0;


alert('hhhhhhhh');
let canvas1 = document.getElementById('canvasy1'),
    
    ctx1 = canvas1.getContext('2d'),
    
    cwidth1 = canvas1.width,
    cheight1 = canvas1.height;




    ctx1.fillStyle = "red" ;

    ctx1.fillRect( 0 , 0 ,cwidth1 , cheight1);

///////////////////

    let canvas2 = document.getElementById('canvasy2'),
    
    ctx2 = canvas2.getContext('2d'),
    
    cwidth2 = canvas2.width,
    cheight2 = canvas2.height;
 
    ctx2.font = " 220px Tahoma";
    
   let grad =  ctx2.createLinearGradient( 100 , 100 , 500 , 500);
   grad.addColorStop(0 , "red");
   grad.addColorStop(0.5 , "yellow");
   grad.addColorStop(1, "blue");

    ctx2.fillStyle = grad ;

    ctx2.fillText( "canvas" , 100 , 200 , 400);



    /////////////////////////////////////
    let canvasy3 = document.getElementById('canvasy3'),
    
    ctx3 = canvasy3.getContext('2d'),
    
    cwidth3 = canvasy3.width,
    cheight3 = canvasy3.height;

ctx3.font = "150px Arial";

let grad3 = ctx3.createLinearGradient(100,100,500,500);

grad3.addColorStop( 0 , "red");
grad3.addColorStop( 0.5 , "yellow");
grad3.addColorStop( 1 , "blue");

    ctx3.strokeStyle = grad3 ;

    ctx3.strokeText( "Big Canvas" ,0 , 200);




//////////////////////////////
let canvas4 = document.getElementById('canvasy4'),
    ctx4 = canvas4.getContext('2d'),
    cWidth4 = canvas4.width,
    cHeight4 = canvas4.height;


    ctx4.fillStyle = "blue";

    ctx4.fillRect( 0 , 0 , 20 , cHeight4);

    ctx4.fillRect( 0 , 480 , cWidth4 , 20);
    
    ctx4.fillStyle = "red";

    ctx4.fillRect( 100 , 50 , 20 , cHeight4-70);

    ctx4.fillStyle = "black";
    ctx4.font = "22px arial";
    ctx4.fillText("1" , 100 , 40);


    ctx4.fillStyle = "#a4a40b";

    ctx4.fillRect( 200 , 30 , 20 , cHeight4-50);

    ctx4.fillStyle = "green";

    ctx4.fillRect( 300 , 280 , 20 , cHeight4-300);
   
    ctx4.fillStyle = "black";

    ctx4.fillRect( 400 , 180 , 20 , cHeight4-200);
   
   ////////////////////////////////////////
let c5 = document.getElementById('canvasy5'),
   ctx5 = c5.getContext('2d');

   ctx5.beginPath();


   ctx5.moveTo(0 , 0);
   ctx5.lineTo(250 , 155);
   

   
   ctx5.moveTo(500 , 0);
   ctx5.lineTo(250 , 155);
   
   ctx5.strokeStyle = "red";
   ctx5.lineWidth = "5",
   ctx5.stroke();
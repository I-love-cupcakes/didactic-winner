canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=255;

function add() 
{
  background_imgTag= new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  greencar_imgTag= new Image();
  greencar_imgTag.onload = uploadgreencar;
  greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
    {
        greencar_y = greencar_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(greencar_y <=350)
    {
        greencar_y = greencar_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencar_x >0)
    {
        greencar_x = greencar_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(greencar_x <=750)
    {
        greencar_x = greencar + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        uploadBackground();
        uploadgreencar();
	}
}
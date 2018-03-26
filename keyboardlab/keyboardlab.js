Timmeh = loadImage("17.jpg");
WWTLD = loadImage("WWTLD.png"); 
A1 = loadImage("Arrow.png"); 
A2 = loadImage("Arrow copy 2.png"); 
A3 = loadImage("Arrow copy.png"); 
A4 = loadImage("Arrow copy 3.png"); 
A5 = loadImage("Arrow copy 4.png"); 
H1 = loadImage("H1.png"); 
H2 = loadImage("H2.png"); 
H3 = loadImage("H3.png"); 
H4 = loadImage("H4.png"); 
H5 = loadImage("H5.png"); 

start(10);

function setup()
{
obx = 150;
obx1 = 300;
obx2 = 400;
obx3 = 500;
obx4 = 650;
oby = 0;
HeroX = 220;
HeroY = 350;
Time = 0;
Pass = 0; 
X = 25; 
}

function repeat()
{
//background
Time = Time + 1;
print(Time);
print(Pass);
ctx.drawImage(Timmeh, 0, 0);

// arrow

oby = oby + 3;

ctx.drawImage(A1,obx, oby);
ctx.drawImage(A1,obx1, oby);
ctx.drawImage(A1,obx2, oby);
ctx.drawImage(A1,obx3, oby);
ctx.drawImage(A1,obx4, oby);


if (oby > 550 && oby <1000)
	{
		oby = -100;
		obx = Math.floor(Math.random() * 680);
		obx1 = Math.floor(Math.random() * 680);
		obx2 = Math.floor(Math.random() * 680);
		obx3 = Math.floor(Math.random() * 680);
		Pass = Pass + 1;
	}
	
if (Pass == 0) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Click the screen", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Or controls won't work", 100, 200);
	}
	
if (Pass == 1) 
	{
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Controls are left and right arrow", 100, 300);
	}
	
if (Pass == 2) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("STORM THE CASTLE", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("DODGE THE ARROWS TO REACH THE KING", 100, 200);
	}
	
// Noire

if (Pass == 3) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Ahh! So many arrows!", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("I'm good at shooting not dodging D:", 100, 200);
	}
	
if (Pass > 3 && Pass < 7) 
	{
		ctx.drawImage(H1, HeroX, HeroY);
		if (HeroX < obx + 15 && obx < HeroX + 75 &&
  		  HeroY + 25 < oby + 150 && oby < HeroY + 150||
  		  HeroX < obx1 + 15 && obx1 < HeroX + 75 &&
  		  HeroY + 25 < oby + 150 && oby < HeroY + 150 ||
  		  HeroX < obx2 + 15 && obx2 < HeroX + 75 &&
  		  HeroY + 25 < oby + 150 && oby < HeroY + 150 ||
  		  HeroX < obx3 + 15 && obx3 < HeroX + 75 &&
  		  HeroY + 25 < oby + 150 && oby < HeroY + 150 ||
  		  HeroX < obx4 + 15 && obx4 < HeroX + 75 &&
  		  HeroY + 25 < oby + 150 && oby < HeroY + 150  )
			{
				alert("RIP IN PEACE YA DONE GOOFED");
				oby = 1200;
			}
	}
	
//Inigo

if (Pass == 7) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Good job Linda!", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("It's my turn now, clear the way!", 100, 200);
	}

if (Pass > 7 && Pass < 11) 
	{
		ctx.drawImage(H2, HeroX, HeroY - 50);
		if (HeroX + 20 < obx + 15 && obx < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 200 ||
  		  HeroX + 20 < obx1 + 15 && obx1 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 200 ||
  		  HeroX + 20 < obx2 + 15 && obx2 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 200 ||
  		  HeroX + 20 < obx3 + 15 && obx3 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 200 ||
  		  HeroX + 20 < obx4 + 15 && obx4 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 200   )
			{
				alert("RIP IN PEACE YA DONE GOOFED");
				oby = 1200;
			}
	}
	
// Cynthia

if (Pass == 11) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("It's my turn now!", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("No one can touch me!", 100, 200);
	}
	

if (Pass > 11 && Pass < 15) 
	{
		ctx.drawImage(H3, HeroX, HeroY - 40);
		if (HeroX < obx + 15 && obx < HeroX + 170 &&
  		  HeroY < oby + 150 && oby < HeroY + 180||
  		  HeroX < obx1 + 15 && obx1 < HeroX + 170 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx2 + 15 && obx2 < HeroX + 170 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx3 + 15 && obx3 < HeroX + 170 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx4 + 15 && obx4 < HeroX + 170 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 )
			{
				alert("RIP IN PEACE YA DONE GOOFED");
				oby = 1200;
				X = 40; 
			}
	}
	
// Gerome
if (Pass == 15) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Stay back, it's my turn", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("To bring the fury!", 100, 200);
	}


if (Pass > 15 && Pass < 19) 
	{
		ctx.drawImage(H4, HeroX, HeroY - 70);
		if (HeroX < obx + 15 && obx < HeroX + 120 &&
  		  HeroY < oby + 150 && oby < HeroY + 220||
  		  HeroX < obx1 + 15 && obx1 < HeroX + 120 &&
  		  HeroY < oby + 150 && oby < HeroY + 220 ||
  		  HeroX < obx2 + 15 && obx2 < HeroX + 120 &&
  		  HeroY < oby + 150 && oby < HeroY + 220 ||
  		  HeroX < obx3 + 15 && obx3 < HeroX + 120 &&
  		  HeroY < oby + 150 && oby < HeroY + 220 ||
  		  HeroX < obx4 + 15 && obx4 < HeroX + 120 &&
  		  HeroY < oby + 150 && oby < HeroY + 220 )
			{
				alert("RIP IN PEACE YA DONE GOOFED");
				oby = 1200;
				X = 15; 
			}
	}

// Lucina
if (Pass == 19 || Pass == 20) 
	{
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("Thank you all, I'll...", 50, 100);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("PUT AN END TO THIS! HYAA!", 100, 200);
		
		ctx.fillStyle = "white";
		ctx.font = "30px Chalkboard";
		ctx.fillText("WITH THE POWER OF FRIENDSHIP", 150, 300);
	}

if (Pass > 20 && Pass < 26) 
	{
		ctx.drawImage(H5, HeroX, HeroY - 50);
		if (HeroX < obx + 15 && obx < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 180||
  		  HeroX < obx1 + 15 && obx1 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx2 + 15 && obx2 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx3 + 15 && obx3 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 ||
  		  HeroX < obx4 + 15 && obx4 < HeroX + 130 &&
  		  HeroY < oby + 150 && oby < HeroY + 180 )
			{
				alert("RIP IN PEACE YA DONE GOOFED");
				oby = 1200;
				X = 25; 
			}
	}
	
}

function keyDown(key)
{


if (key == 37)
	{
		HeroX = HeroX - X;
	}

if (key == 39)
	{
		HeroX = HeroX + X;
	}
	
	
if (HeroX < 0) 
	{
		HeroX = 620;
	}
if (HeroX > 620)
	{
		HeroX = 0;
	}

}

function keyUp(key)
{
}

// hero's left: HeroX
// hero's right: HeroX + 125
// hero's top: HeroY
// hero's bottom: HeroY + 125
// obstacle's left: obx
// obstacle's right: obx + 100 
// obstacle's top: oby 
// obstacle's bottom: oby + 100


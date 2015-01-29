var canvas;
var context;
var step=1;
var fps=15;
var count=0;
var width=0;
var height=0;
var startTime;
var originalWidth=670;
var originalHeight=534;
var product2=    [2.8,3.7,17.7];
var product1= [7,8.3,21.5];
var combination=[2.24,2.407,12.04];

function draw(){
	clear();
	drawStep1();
	if(count>204){
		drawStep2(count-204);
	}
}
function drawStep2(j){
	var c=150;
	var c2=324;
	var len=6;
	var len2=9;
	var len3=15;
	var p=j/len;
	if(p>1)p=1;
	var p2=(j-c)/len2;
	if(p2>1)p2=1;
	var p3=(j-c2)/len3;
	if(p3>1)p3=1;
	drawBox(0,p);
	if(p2>0){
		drawBox(1,p2);
	}
	if(p3>0){
		drawBox(2,p3);
	}

}
function drawBox(index,percent){
	var x=71+602/3*index;
	var y=446-(product1[index]/25)*367;
	var y2=446-(combination[index]/25)*367;
	var y3=y+5;
	var w=50;
	var h=50;
	var ah=y2-y;
	var ay=ah*percent+y;
	var bp=percent/(h/ah);
	if(bp>1)bp=1;
	h=h*bp;
	var x2=x+110;
	var x3=x+110+w/2;
	var textX=x2+2;
	var textY=y3+10;
	var textX2=x2+2;
	var textY2=y3+20;
	var textX3=x2+5;
	var textY3=y3+38;
	var textX4=x2+8;
	var textY4=y3+47;
	var redux=Math.round(100-(100*(combination[index]/product1[index])));
	
	//drawArrow
	beginPath();
	moveTo(x,y);
	lineTo(x3,y);
	lineTo(x3,ay);
	stroke("#b36142",2);
	
	//drawSquare
	fillStyle("#b36142");
	fillRect(x2,y3,w,h);
	
	//drawArrow
	if(percent===1){
		beginPath();
		moveTo(x3-5,y2-9);
		lineTo(x3,y2-7);
		lineTo(x3+5,y2-9);
		lineTo(x3,y2);
		lineTo(x3-5,y2-9);
		fill("#b36142");
	}
	
	//drawText
	fillStyle("#ffffff");
	context.font='7pt Open Sans';
	context.font='14pt Open Sans';
	fillText(redux + "%",textX3,textY3);
	context.font='5pt Open Sans';
	fillText("(p < 0,001)",textX4,textY4);
}
function drawStep1(){
	
	//draw header
	var gradient=createLinearGradient(0,0,670,58);
	gradient.addColorStop(0,"#332b55");
	gradient.addColorStop(0.5,"#332b55");
	gradient.addColorStop(1,"#c1beb4");
	fillStyle(gradient);
	fillRect(0,0,670,58);
	
	//draw header text
	fillStyle("#ffffff");
	context.font='11pt Open Sans';
	fillText("SOMETHING MEDICAL",15,24);
	fillText("SOME MORE MEDICAL STUFF",15,47);

	//draw border
	beginPath();
	moveTo(0,0);
	lineTo(670,0);
	lineTo(670,513);
	lineTo(0,513);
	lineTo(0,0);
	stroke("#6f6790",2);
	
	//draw graph outline
	beginPath();
	moveTo(56,78);
	lineTo(56,446);
	lineTo(659,446);

	//draw guides and text
	fillStyle("#444444");
	for(var i=0;i<6;i++){
		context.font='10pt Open Sans';
		if(i>3){
			fillText(""+(25-i*5),32,i*(367/5)+79);
		}else fillText(""+(25-i*5),26,i*(367/5)+79);
		moveTo(44,i*(367/5)+79);
		lineTo(56,i*(367/5)+79);
	}
	for(i=0;i<4;i++){
		moveTo(i*(602/3)+56,458);
		lineTo(i*(602/3)+56,447);
	}
	stroke("#444444");

	//draw left sideways text
	fillStyle("#444444");
	context.font='12pt Open Sans';
	fillSideWaysText("Percentage of patients (%)",18,374);
	//draw bottom text
	context.font='10pt Open Sans';
	fillText("MEDICAL STUFF",100,470);
	fillText("MEDICAL STATS",295,470);
	fillText("MORE MEDICAL STATS",490,470);

	//draw things and text
	drawThing("#eeeed7","#a4a732",122,73);
	drawThing("#e4e9ec","#cad1d7",301,73);
	drawThing("#e3e1ea","#6f6790",460,73);
	context.font='10pt Open Sans';
	fillStyle("#444444");
	fillText("product1 (n=1611)",147,88);
	fillText("product2 (n=1623)",326,88);
	fillText("Combination (n=1610)",485,88);
	
	//draw graph bars
	var k;
	var len;
	var grd;
	k=count-78;
	len=10;
	var h;
	if(k>len)k=len;
	if(k>0){

		h=Math.floor((product2[0]/25)*367*(k/len));
		grd=context.createRadialGradient(71+55, 446-h, 0, 71+55, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e4e9ec");
		grd.addColorStop(1,"#cad1d7");
		fillStyle(grd);

		fillRect(71+55,446-h,49,h);
		strokeRect("#443d6c",71+55,446-h,49,h);

		h=Math.floor((product2[1]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3)+55+71, 446-h, 0, (602/3)+55+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e4e9ec");
		grd.addColorStop(1,"#cad1d7");
		fillStyle(grd);

		fillRect((602/3)+55+71,446-h,49,h);
		strokeRect("#443d6c",(602/3)+55+71,446-h,49,h);

	}
	len=15;
	k=count-78;
	if(k>len)k=len;
	if(k>0){
		h=Math.floor((product1[0]/25)*367*(k/len));
		grd=context.createRadialGradient(71, 446-h, 0, 71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#eeeed7");
		grd.addColorStop(1,"#a4a732");
		fillStyle(grd);
		fillRect(71,446-h,49,h);
		strokeRect("#443d6c",71,446-h,49,h);
		h=Math.floor((product1[1]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3)+71, 446-h, 0, (602/3)+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#eeeed7");
		grd.addColorStop(1,"#a4a732");
		fillStyle(grd);
		fillRect((602/3)+71,446-h,49,h);
		strokeRect("#443d6c",(602/3)+71,446-h,49,h);
		h=Math.floor((product1[2]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3*2)+71, 446-h, 0, (602/3*2)+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#eeeed7");
		grd.addColorStop(1,"#a4a732");
		fillStyle(grd);
		fillRect((602/3*2)+71,446-h,49,h);
		strokeRect("#443d6c",(602/3*2)+71,446-h,49,h);

	}
	len=25;
	k=count-78;
	if(k>len)k=len;
	if(k>0){
		h=Math.floor((product2[2]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3*2)+55+71, 446-h, 0, (602/3*2)+55+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e4e9ec");
		grd.addColorStop(1,"#cad1d7");
		fillStyle(grd);
		fillRect((602/3*2)+71+55,446-h,49,h);
		strokeRect("#443d6c",(602/3*2)+71+55,446-h,49,h);
	}
	k=count-156;
	len=10;
	if(k>len)k=len;
	if(k>0){
		h=Math.floor((combination[0]/25)*367*(k/len));
		grd=context.createRadialGradient(110+71, 446-h, 0, 110+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e3e1ea");
		grd.addColorStop(1,"#6f6790");
		fillStyle(grd);
		fillRect(71+110,446-h,49,h);
		strokeRect("#443d6c",71+110,446-h,49,h);

	}
	len=15;
	k=count-156;
	if(k>len)k=len;
	if(k>0){
		h=Math.floor((combination[1]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3)+110+71, 446-h, 0, (602/3)+110+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e3e1ea");
		grd.addColorStop(1,"#6f6790");
		fillStyle(grd);
		fillRect((602/3)+71+110,446-h,49,h);
		strokeRect("#443d6c",(602/3)+71+110,446-h,49,h);
	}
	len=25;
	k=count-156;
	if(k>len)k=len;
	if(k>0){
		h=Math.floor((combination[2]/25)*367*(k/len));
		grd=context.createRadialGradient((602/3*2)+110+71, 446-h, 0, (602/3*2)+110+71, 446-h, h);
		grd.addColorStop(0, "#ffffff");
		grd.addColorStop(0.2,"#e3e1ea");
		grd.addColorStop(1,"#6f6790");
		fillStyle(grd);
		fillRect((602/3*2)+71+110,446-h,49,h);
		strokeRect("#443d6c",(602/3*2)+71+110,446-h,49,h);
	}

}
function run(){
	canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	width=canvas.width;
	height=canvas.height;
	var d=new Date();
	startTime=d.getTime();
	callDraw();
}
function callDraw(){
	var d=new Date();
	count=Math.floor((d.getTime()-startTime)/(1000/30));
	draw();
	window.setTimeout("callDraw()",2);
}

function drawThing(color1,color2,x,y){
	h=15;
	grd=context.createRadialGradient(x, y, 0, x, y, h);
	grd.addColorStop(0, "#ffffff");
	grd.addColorStop(0.2,color1);
	grd.addColorStop(1,color2);
	fillStyle(grd);
	fillRect(x,y,h,h);
	strokeRect("#443d6c",x,y,h,h);
}
function beginPath(){
	context.beginPath();
}
function fillStyle(var1){
	context.fillStyle=var1;
}
function fill(var1){
	if(var1){
		context.fillStyle=var1;	
	}
	context.fill();
}
function stroke(color,size){
	if(!size)size=1;
	context.strokeStyle=color;
	context.lineWidth=Math.floor(size*height/originalHeight);
	context.stroke();
}
function fillRect(x1,y1,x2,y2){
	context.fillRect(Math.floor(x1/originalWidth*width),Math.floor(y1/originalHeight*height),Math.floor(x2/originalWidth*width),Math.floor(y2/originalHeight*height));
}
function strokeRect(color,x1,y1,x2,y2,size){
	if(!size)size=1;
	context.strokeStyle=color;
	context.lineWidth=Math.floor(size*height/originalHeight);
	context.strokeRect(Math.floor(x1/originalWidth*width)-0.5,Math.floor(y1/originalHeight*height)-0.5,Math.floor(x2/originalWidth*width),Math.floor(y2/originalHeight*height));
}
function createLinearGradient(x1,y1,x2,y2){
	return context.createLinearGradient(Math.floor(x1/originalWidth*width),Math.floor(y1/originalHeight*height),Math.floor(x2/originalWidth*width),Math.floor(y2/originalHeight*height));
}
function setAlpha(var1){
	context.globalAlpha=var1;
}
function moveTo(val1,val2){
	context.moveTo(Math.floor(val1/originalWidth*width),Math.floor(val2/originalHeight*height));
}
function lineTo(val1,val2){
	context.lineTo(Math.floor(val1/originalWidth*width),Math.floor(val2/originalHeight*height));
}
function fillSideWaysText(text,x,y){
	context.save();
	context.translate(Math.floor(x/originalWidth*width), Math.floor(y/originalHeight*height));
	context.rotate(-Math.PI/2);
	context.fillText(text, 0, 0);
	context.restore();
}
function fillText(val1,val2,val3){
	context.fillText(val1,Math.floor(val2/originalWidth*width),Math.floor(val3/originalHeight*height));
}
function clear(){
	context.clearRect(0,0,width,height);
}
function drawCircle(x,y,r,color,borderColor,borderWidth){
	context.beginPath();
	context.strokeStyle=borderColor;
	context.lineWidth=borderWidth*height/originalHeight;
	context.fillStyle=color;
	x=Math.floor(x/originalWidth*width);
	y=Math.floor(y/originalHeight*height);
	context.arc(x,y,Math.floor(r*height/originalHeight),0,Math.PI*2,true);
	context.stroke();
	context.fill();
}
run();

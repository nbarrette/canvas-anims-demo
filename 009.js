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
var product1=    [0,2.75,3.4,4,4.2,4.8,4.9,5,4.9,5.3,5.1,5.2,5.2,5.3,5.2,5.4,5.3];
var product2= [0,4.47,4.4,4.7,4.5,4.8,4.5,4.4,4.3,4.4,4.08,4.2,4,4,3.8,3.8,3.8];
var combination=[0,4.8,4.8,5.4,5.65,6,6,6.2,6.2,6.4,6.2,6.3,6.3,6.5,6.3,6.4,6.3];

function draw(){
	var d;
	var s3=79;
	clear();
	if(step>2){
		//fill beige
	if(count>s3 || step>3){
		beginPath();
		if(step===3)setAlpha((17-count)*0.033);
	moveTo(70,combination[0]/8*367+74);
	for(i=1;i<17;i++){
		lineTo(i*32.8125+70,combination[i]/8*367+74);
	}
	for(i=16;i>0;i--){
		lineTo(i*32.8125+70,product2[i]/8*367+74);
	}
	fill("#edeccc");
	setAlpha(1);
	}
	}
	drawStep1();
	//if(step>1){
		if(step>2){
			drawStep3();
		}
		if(step===1 && count>=300){
			step=3;
			count=0;
			d=new Date();
			startTime=d.getTime();
		}
		if(step===3 && count>=450){
			step=4;
			count=0;
			d=new Date();
			startTime=d.getTime();
		}
		drawStep2();
		if(step>3){
			drawArrows();
		}
	//}
}
function drawArrows(){
	var j=count;
	var s1=120;
	var s3=510;
	var s4=240;
	k=count-4;
	if(k>0){
		arrow1(k);
	}
	k=count-(s1+4);
	if(k>0){
		arrow2(k);
	}
	k=count-(s3+4);
	if(k>0){
		arrow3(k);
	}
	k=count-(s4+4);
	if(k>0){
		arrow4(k);
	}
}
function arrow4(i){
	var time=36;
	if(i>time)i=time;
	var x=71;
	var y=388;
	var x2=523;
	var y2=413;
	var x3=592;
	var y3=y-4;
	var x4=212;
	var y4=y2+4;
	
	x2=Math.floor(i/time*(x2-x)+x);
	x3=x2+69;
	x4=x2-311;
	beginPath();
	moveTo(x,y);
	lineTo(x2-14,y);
	lineTo(x2,y3);
	lineTo(x3,y+((y2-y)/2));
	lineTo(x2,y4);
	lineTo(x2-14,y2);
	lineTo(x,y2);
	lineTo(x,y);
	fill("#b36142");
	fillStyle("white");
	context.font='16pt Open Sans';
	fillText("4-year results",x4,y2-6);
}
function arrow3(i){
	var time=36;
	var x=580;
	var y=150;
	var x2=x+62;
	var y2=y+54;
	var x3=x-13;
	var y3=y+58;
	var x4=x+76;
	var y4=y+83;

	beginPath();
	moveTo(x,y);
	lineTo(x2,y);
	if(i/time>0.3){
		var t=(i-(time*0.2))/(time*0.2);
		if(t>1)t=1;
		lineTo(x2,y2);
		lineTo(x4,y3);
		
		lineTo(Math.floor(x4-((x4-x3)/2)*t),y3+((y4-y3))*t);
		lineTo(Math.floor(x3+((x4-x3)/2)*t),y3+((y4-y3))*t);

		lineTo(x3,y3);
		lineTo(x,y2);
	}else{
		var t2=i/(time*0.3);
		lineTo(x2,Math.floor(y+(y2-y)*t2));
		lineTo(x,Math.floor(y+(y2-y)*t2));
		lineTo(x,y);
	}
	fill("#b36142");
	if(i/time>0.5){
		var t3=(i-(time*0.5))/(time*0.5);
		if(t3>1)t3=1;
		var len=combination[16]/8*367+74-y4;
		len*=t3;
		beginPath();
		moveTo(x+(x2-x)/2,y4);
		lineTo(x+(x2-x)/2,y4+len);
		stroke("#b36142",2);
		if(y4+len>product2[16]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,product2[16]/8*367+74);
			lineTo(x+(x2-x)/2-18,product2[16]/8*367+74-5);
			lineTo(x+(x2-x)/2-18,product2[16]/8*367+74+5);
			lineTo(x+(x2-x)/2,product2[16]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(16*32.8125+70,product2[16]/8*367+74,4,"#ffffff","#b36142",5);
		}
		if(y4+len>=combination[16]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,combination[16]/8*367+74);
			lineTo(x+(x2-x)/2-18,combination[16]/8*367+74-5);
			lineTo(x+(x2-x)/2-18,combination[16]/8*367+74+5);
			lineTo(x+(x2-x)/2,combination[16]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(16*32.8125+70,combination[16]/8*367+74,4,"#ffffff","#b36142",5);
		}
	}
	fillStyle("white");
	context.font='18pt Open Sans';
	fillText("66%",x+6,y+30);
	context.font='8pt Open Sans';
	fillText("reduction",x+6,y+45);
	context.font='8pt Open Sans';
	fillText("(p<0.001)",x+6,y+62);
}
function arrow2(i){
	var time=36;
	var x=290;
	var y=170;
	var x2=x+62;
	var y2=y+54;
	var x3=x-13;
	var y3=y+58;
	var x4=x+76;
	var y4=y+83;

	beginPath();
	moveTo(x,y);
	lineTo(x2,y);
	if(i/time>0.3){
		var t=(i-(time*0.2))/(time*0.2);
		if(t>1)t=1;
		lineTo(x2,y2);
		lineTo(x4,y3);
		
		lineTo(Math.floor(x4-((x4-x3)/2)*t),y3+((y4-y3))*t);
		lineTo(Math.floor(x3+((x4-x3)/2)*t),y3+((y4-y3))*t);

		lineTo(x3,y3);
		lineTo(x,y2);
	}else{
		var t2=i/(time*0.3);
		lineTo(x2,Math.floor(y+(y2-y)*t2));
		lineTo(x,Math.floor(y+(y2-y)*t2));
		lineTo(x,y);
	}
	fill("#b36142");
	if(i/time>0.5){
		var t3=(i-(time*0.5))/(time*0.5);
		if(t3>1)t3=1;
		var len=combination[7]/8*367+74-y4;
		len*=t3;
		beginPath();
		moveTo(x+(x2-x)/2,y4);
		lineTo(x+(x2-x)/2,y4+len);
		stroke("#b36142",2);
		if(y4+len>product2[7]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,product2[7]/8*367+74);
			lineTo(x+(x2-x)/2-22,product2[7]/8*367+74-5);
			lineTo(x+(x2-x)/2-22,product2[7]/8*367+74+5);
			lineTo(x+(x2-x)/2,product2[7]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(7*32.8125+70,product2[7]/8*367+74,4,"#ffffff","#b36142",5);
		}
		if(y4+len>=combination[7]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,combination[7]/8*367+74);
			lineTo(x+(x2-x)/2-22,combination[7]/8*367+74-5);
			lineTo(x+(x2-x)/2-22,combination[7]/8*367+74+5);
			lineTo(x+(x2-x)/2,combination[7]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(7*32.8125+70,combination[7]/8*367+74,4,"#ffffff","#b36142",5);
		}
	}
	fillStyle("white");
	context.font='18pt Open Sans';
	fillText("44%",x+6,y+30);
	context.font='8pt Open Sans';
	fillText("reduction",x+6,y+45);
	context.font='8pt Open Sans';
	fillText("(p<0.001)",x+6,y+62);
}
function arrow1(i){
	var time=26;
	var x=112;
	var y=136;
	var x2=x+62;
	var y2=y+54;
	var x3=x-13;
	var y3=y+58;
	var x4=x+76;
	var y4=y+83;

	beginPath();
	moveTo(x,y);
	lineTo(x2,y);
	if(i/time>0.3){
		var t=(i-(time*0.2))/(time*0.2);
		if(t>1)t=1;
		lineTo(x2,y2);
		lineTo(x4,y3);
		
		lineTo(Math.floor(x4-((x4-x3)/2)*t),y3+((y4-y3))*t);
		lineTo(Math.floor(x3+((x4-x3)/2)*t),y3+((y4-y3))*t);

		lineTo(x3,y3);
		lineTo(x,y2);
	}else{
		var t2=i/(time*0.3);
		lineTo(x2,Math.floor(y+(y2-y)*t2));
		lineTo(x,Math.floor(y+(y2-y)*t2));
		lineTo(x,y);
	}
	fill("#b36142");
	if(i/time>0.5){
		var t3=(i-(time*0.5))/(time*0.5);
		if(t3>1)t3=1;
		var len=combination[3]/8*367+74-y4;
		len*=t3;
		beginPath();
		moveTo(x+(x2-x)/2,y4);
		lineTo(x+(x2-x)/2,y4+len);
		stroke("#b36142",2);
		if(y4+len>product2[3]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,product2[3]/8*367+74);
			lineTo(x+(x2-x)/2+26,product2[3]/8*367+74-5);
			lineTo(x+(x2-x)/2+26,product2[3]/8*367+74+5);
			lineTo(x+(x2-x)/2,product2[3]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(3*32.8125+70,product2[3]/8*367+74,4,"#ffffff","#b36142",5);
		}
		if(y4+len>=combination[3]/8*367+74){
			beginPath();
			moveTo(x+(x2-x)/2,combination[3]/8*367+74);
			lineTo(x+(x2-x)/2+26,combination[3]/8*367+74-5);
			lineTo(x+(x2-x)/2+26,combination[3]/8*367+74+5);
			lineTo(x+(x2-x)/2,combination[3]/8*367+74);
			fill("#b36142");
			stroke("#b36142",2);
			drawCircle(3*32.8125+70,combination[3]/8*367+74,4,"#ffffff","#b36142",5);
		}
	}
	fillStyle("white");
	context.font='18pt Open Sans';
	fillText("15%",x+6,y+30);
	context.font='8pt Open Sans';
	fillText("reduction",x+6,y+45);
	context.font='8pt Open Sans';
	fillText("(p<0.001)",x+6,y+62);
}
function drawStep3(){
	var j=count;
	var s1=30;
	var s2=70;
	var s3=79;
	//j=Math.floor(count/2);
	if(j>17 || step >3)j=17;
	//draw purple LINE
	beginPath();
	moveTo(70,combination[0]/7*367+74);
	for(var i=0;i<j;i++){

		lineTo(i*32.8125+70,combination[i]/8*367+74);
	}
	stroke("#6f6790",5);
	//draw little white circles
	for(i=0;i<j;i++){
		drawCircle(i*32.8125+70,combination[i]/8*367+74,4,"#ffffff","#6f6790",3);
	}
	
	//draw numbers on line
	context.font='12pt Open Sans';
	fillStyle("#6f6790");
	if(j>3){
		fillText("-5.4",145,341);
		if(j>8){
			fillText("-6.2",309,378);
			if(j>16){
				fillText("-6.3",572,385);
			}
		}
	}
	//draw purple square
	if(((count-67)*0.033>=0 && (count-67)*0.033<=30)|| step>3){
		fillStyle("6f6790");
		if(step===3)setAlpha((count-(s3-17))*0.033);
		fillRect(467,317,100,41);
		context.font='9pt Open Sans';
		fillStyle("#ffffff");
		fillText("Combination",476,333);
		fillText("therapy",476,350);
		setAlpha(1);
	}
	
}
function drawStep2(){
	var j=count;
	if(j>17 || step>=2)j=17;
	//draw green LINE
	beginPath();
	moveTo(70,product2[0]/7*367+74);
	for(var i=0;i<j;i++){

		lineTo(i*32.8125+70,product2[i]/8*367+74);
	}
	stroke("#a4a732",5);

	//draw numbers on line
	context.font='12pt Open Sans';
	fillStyle("#6f6790");
	if(j>3){
		fillText("-4.7",154,308);
		if(j>8){
			fillText("-4.3",309,290);
			if(j>16){
				fillText("-3.8",572,268);
			}
		}
	}
	//draw green square
	if(((count-67)*0.033>=0 && (count-67)*0.033<=30)|| step>1){
		fillStyle("a4a732");
		if(step===1)setAlpha((count-67)*0.033);
		fillRect(428,197,100,43);
		context.font='9pt Open Sans';
		fillStyle("#ffffff");
		fillText("product2",437,214);
		fillText("monotherapy",437,231);
		setAlpha(1);
	}
	//draw little white circles
	for(i=0;i<j;i++){
		drawCircle(i*32.8125+70,product2[i]/8*367+74,4,"#ffffff","#a4a732",3);
	}
	
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
	context.font='14pt Open Sans';
	fillText("CHANGE IN SOME MEDICAL STUFF",15,24);
	fillText("MORE MEDICAL STUFF",15,47);

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
	moveTo(70,74);
	lineTo(70,441);
	lineTo(595,441);

	//draw guides and text
	fillStyle("#444444");
	for(var i=0;i<9;i++){
		context.font='12pt Open Sans';
		if(i===0){
			fillText(""+(0-i),46,i*(367/8)+78);
		}else if(i!==8) fillText(""+(0-i),40,i*(367/8)+78);
		moveTo(58,i*(367/8)+74);
		lineTo(70,i*(367/8)+74);
	}
	for(i=0;i<17;i++){
		moveTo(i*32.8125+70,452);
		lineTo(i*32.8125+70,441);
	}
	stroke("#444444");

	//draw left sideways text
	fillStyle("#444444");
	context.font='12pt Open Sans';
	fillSideWaysText("SOMETHING MEDICAL",24,374);
	//draw bottom text
	fillText("Treatment month",279,501);
	//draw x-axys text
	fillText("0",66,468);
	fillText("9",3*32.8125+66,468);
	fillText("24",8*32.8125+61,468);
	fillText("48",16*32.8125+56,468);
	//draw BLUEISH LINE
	beginPath();
	moveTo(70,product1[0]/7*367+74);
	for(i=0;i<17;i++){

		lineTo(i*32.8125+70,product1[i]/8*367+74);
	}
	stroke("#cad1d7",5);

	//draw little white circles
	for(i=0;i<17;i++){
		drawCircle(i*32.8125+70,product1[i]/8*367+74,4,"#ffffff","#cad1d7",3);
	}
	//draw line text
	context.font='12pt Open Sans';
	fillStyle("#6f6790");
	fillText("-4.0",145,276);
	fillText("-4.9",309,318);
	fillText("-5.3",572,336);

	//draw things
	drawThing("#cad1d7",122,80);
	drawThing("#a4a732",299,80);
	drawThing("#6f6790",478,80);
	//draw text for things
	fillStyle("#444444");
	context.font='10pt Open Sans';
	fillText("product1",145,84);
	fillText("product2",322,84);
	fillText("combination",502,84);
	context.font='8pt Open Sans';
	fillText("(n=1592)",207,84);
	fillText("(n=1582)",387,84);
	fillText("(n=1575)",590,84);

	// Animation
	var speed=30;
	if(step===1){
		if(count*speed<670){
			fillStyle("white");
			fillRect(count*speed,58,668-count*speed,453);
		}
		
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
		window.setTimeout(callDraw,2);
}
window.onload=function(){
	run();
};
function load(page){
	var head= document.getElementsByTagName('html')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= page+'.js';
   head.appendChild(script);
	document.getElementById("009").style.display="none";
	document.getElementById(page).style.display="block";
}
function drawThing(color,x,y){
	beginPath();
	moveTo(x-15,y);
	lineTo(x+15,y);
	stroke(color,5);
	drawCircle(x,y,4,"white",color,4);
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
	context.lineWidth=size*height/originalHeight;
	context.stroke();
}
function fillRect(x1,y1,x2,y2){
	context.fillRect(Math.floor(x1/originalWidth*width),Math.floor(y1/originalHeight*height),Math.floor(x2/originalWidth*width),Math.floor(y2/originalHeight*height));
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

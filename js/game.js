//variables h1 lap
var whiteHorseRunRight;
var whiteHorseRunDown;
var whiteHorseRunUp;
var whiteHorseRunLeft;
var whiteHorseSpeed;
var lapCountWhiteHorse = 0;
var position = 0;

//betting variables
var currentAmount;
var betAmount;
var winningHorse;
var winningPosition = {'horse1': '0','horse2':'0','horse3': '0','horse4':'0'};
var lapValue;
var chanceOfWinning;
var positionOfWinner;

var sizeOfStep = 50;
var maxInt = 300;
var minInt = 100;

function vwTOpx(value) {           //responsive coding
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (x*value)/100;
    
    return result;
  }
  
function vhTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (y*value)/100;
    return result;
  }

//horse1 movement
function moveRight(){
	var element = document.getElementById('horse1');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +sizeOfStep + 'px';
	if (positionLeft > vwTOpx(78))
	{
		whiteHorseSpeed = Math.random() * maxInt + minInt;
		whiteHorseRunDown = setInterval(moveDown, whiteHorseSpeed);
		clearInterval(whiteHorseRunRight);
		element.className= "horse runDown";
	}
	if (positionLeft > vhTOpx(70) && positionLeft < vhTOpx(75))
	{//moving right for the white horse
		lapCountWhiteHorse++;
		if ( lapCountWhiteHorse > lapValue)
		{
			clearInterval(whiteHorseRunRight);
			element.className= "horse standRight";
			
			position++;
			winningPosition ['horse1'] = position;
			document.getElementById("results").rows[1].cells[0].innerHTML = positionOfWinner(position); 
			betting();
		}
	}
	if (lapCountWhiteHorse > lapValue)
	{
		var element = document.getElementById('funds');
		amount++;		
	}
}
function moveDown(){
	var element = document.getElementById('horse1');
	var positionTop = element.offsetTop;//moving down for the white horse
	element.style.top = positionTop +sizeOfStep + 'px';
	if (positionTop >  vhTOpx(70))
	{
		whiteHorseSpeed = Math.random() * maxInt + minInt;
		whiteHorseRunLeft = setInterval(moveLeft, whiteHorseSpeed);
		clearInterval(whiteHorseRunDown);
		element.className= "horse runLeft";
	}	
}
function moveLeft(){
var element = document.getElementById('horse1');
	var positionLeft = element.offsetLeft;//moving left for the white horse
	element.style.left = positionLeft -sizeOfStep + 'px';
	if (positionLeft <  vwTOpx(9))
	{
		whiteHorseSpeed =Math.random() * maxInt + minInt;
		whiteHorseRunUp = setInterval(moveUp, whiteHorseSpeed);
		clearInterval(whiteHorseRunLeft);
		element.className= "horse runUp";
	}
}

function moveUp(){
	//moving up for the white horse
	var element = document.getElementById('horse1');
	var positionTop = element.offsetTop;
	element.style.top = positionTop -sizeOfStep + 'px';
	if (positionTop < vhTOpx(15))
	{
		whiteHorseSpeed = Math.random() * maxInt + minInt;
		whiteHorseRunRight = setInterval(moveRight, whiteHorseSpeed);
		clearInterval(whiteHorseRunUp);
		element.className= "horse runRight";
	}
}
//variables h2 lap
var blueHorseRunRight;
var blueHorseRunDown;
var blueHorseRunUp;
var blueHorseRunleft;
var blueHorseSpeed;
var lapCountBlueHorse = 0;
var position = 0;

//horse2 movement
function moveRight2(){
	var element = document.getElementById('horse2');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +sizeOfStep + 'px';
	if (positionLeft > vwTOpx(74))
	{
		blueHorseSpeed = Math.random() * maxInt + minInt;
		blueHorseRunDown = setInterval(moveDown2, blueHorseSpeed);
		clearInterval(blueHorseRunRight);
		element.className= "horse runDown";		
	}
	if (positionLeft > vhTOpx(70) && positionLeft < vhTOpx(75))
	{
		lapCountBlueHorse++;
		if ( lapCountBlueHorse > lapValue)
		{
			clearInterval(blueHorseRunRight);
			element.className= "horse standRight";
			
			position++;
			winningPosition ['horse2'] = position;
			document.getElementById("results").rows[2].cells[0].innerHTML = positionOfWinner(position);
			betting();
		}
	}
}

function moveDown2(){
	var element = document.getElementById('horse2');
	var positionTop = element.offsetTop;
	element.style.top = positionTop +sizeOfStep + 'px';
	if (positionTop > vhTOpx(68))
	{
		blueHorseSpeed = Math.random() * maxInt + minInt;
		blueHorseRunleft = setInterval(moveLeft2, blueHorseSpeed);
		clearInterval(blueHorseRunDown);
		element.className= "horse runLeft";
	}	
}

function moveLeft2(){
var element = document.getElementById('horse2');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -sizeOfStep + 'px';
	if (positionLeft < vwTOpx(11))
	{
		blueHorseSpeed = Math.random() * maxInt + minInt;
		blueHorseRunUp = setInterval(moveUp2, blueHorseSpeed);
		clearInterval(blueHorseRunleft);
		element.className= "horse runUp";
	}
}

function moveUp2(){
	
	var element = document.getElementById('horse2');
	var positionTop = element.offsetTop;
	element.style.top = positionTop -sizeOfStep + 'px';
	if (positionTop < vhTOpx(16))
	{
		blueHorseSpeed = Math.random() * maxInt + minInt;
		blueHorseRunRight = setInterval(moveRight2, blueHorseSpeed);
		clearInterval(blueHorseRunUp);
		element.className= "horse runRight";
	}
}
//variables h3 lap
var greenHorseRunRight;
var greenHorseRunDown;
var greenHorseRunUp;
var greenHorseRunLeft;
var greenHorseSpeed;
var lapCountGreenHorse = 0;
var position = 0;

//horse3 movement
function moveRight3(){
	var element = document.getElementById('horse3');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +sizeOfStep + 'px';
	if (positionLeft > vwTOpx(70))
	{
		greenHorseSpeed = Math.random() * maxInt + minInt;
		greenHorseRunDown = setInterval(moveDown3, greenHorseSpeed);
		clearInterval(greenHorseRunRight);
		element.className= "horse runDown";		
	}
	if (positionLeft > vhTOpx(70) && positionLeft < vhTOpx(75))
	{
		lapCountGreenHorse++;
		if ( lapCountGreenHorse > lapValue)
		{
			clearInterval(greenHorseRunRight);
			element.className= "horse standRight";
			
			position++;
			winningPosition ['horse3'] = position;
			document.getElementById("results").rows[3].cells[0].innerHTML = positionOfWinner(position);
			betting();
		}
	}
}
function moveDown3(){
	var element = document.getElementById('horse3');
	var positionTop = element.offsetTop;
	element.style.top = positionTop +sizeOfStep + 'px';
	if (positionTop > vhTOpx(60))
	{
		greenHorseSpeed = Math.random() * maxInt + minInt;
		greenHorseRunLeft = setInterval(moveLeft3, greenHorseSpeed);
		clearInterval(greenHorseRunDown);
		element.className= "horse runLeft";
	}	
}

function moveLeft3(){
var element = document.getElementById('horse3');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -sizeOfStep + 'px';
	if (positionLeft < vwTOpx(13))
	{
		greenHorseSpeed = Math.random() * maxInt + minInt;
		greenHorseRunUp = setInterval(moveUp3, greenHorseSpeed);
		clearInterval(greenHorseRunLeft);
		element.className= "horse runUp";
	}
}

function moveUp3(){
	
	var element = document.getElementById('horse3');
	var positionTop = element.offsetTop;
	element.style.top = positionTop -sizeOfStep + 'px';
	if (positionTop < vhTOpx(20))
	{
		greenHorseSpeed = Math.random() * maxInt + minInt;
		greenHorseRunRight = setInterval(moveRight3, greenHorseSpeed);
		clearInterval(greenHorseRunUp);
		element.className= "horse runRight";
	}
}
//variables h4 lap
var brownHorseRunRight;
var brownHorseRunDown;
var brownHorseRunUp;
var brownHorseRunLeft;
var brownHorseSpeed;
var lapCountBrownHorse = 0;
var position = 0;

//horse4 movement
function moveRight4(){
	var element = document.getElementById('horse4');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +sizeOfStep + 'px';
	if (positionLeft > vwTOpx(66))
	{
		brownHorseSpeed = Math.random() * maxInt + minInt;
		brownHorseRunDown = setInterval(moveDown4, brownHorseSpeed);
		clearInterval(brownHorseRunRight);
		element.className= "horse runDown";		
	}
	if (positionLeft > vhTOpx(70) && positionLeft < vhTOpx(75))
	{
		lapCountBrownHorse++;
		if ( lapCountBrownHorse > lapValue)
		{
			clearInterval(brownHorseRunRight);
			element.className= "horse standRight";
			
			position++;
			winningPosition ['horse4'] = position;
			document.getElementById("results").rows[4].cells[0].innerHTML = positionOfWinner(position);
			betting();
		}
	}
}

function moveDown4(){
	var element = document.getElementById('horse4');
	var positionTop = element.offsetTop;
	element.style.top = positionTop +sizeOfStep + 'px';
	if (positionTop > vhTOpx(55))
	{
		brownHorseSpeed = Math.random() * maxInt + minInt;
		brownHorseRunLeft = setInterval(moveLeft4, brownHorseSpeed);
		clearInterval(brownHorseRunDown);
		element.className= "horse runLeft";
	}	
}

function moveLeft4(){
var element = document.getElementById('horse4');
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -sizeOfStep + 'px';
	if (positionLeft < vwTOpx(17))
	{
		brownHorseSpeed = Math.random() * maxInt + minInt;
		brownHorseRunUp = setInterval(moveUp4, brownHorseSpeed);
		clearInterval(brownHorseRunLeft);
		element.className= "horse runUp";
	}
}

function moveUp4(){
	
	var element = document.getElementById('horse4');
	var positionTop = element.offsetTop;
	element.style.top = positionTop -sizeOfStep + 'px';
	if (positionTop < vhTOpx(25))
	{
		brownHorseSpeed = Math.random() * maxInt + minInt;
		brownHorseRunRight = setInterval(moveRight4, brownHorseSpeed);
		clearInterval(brownHorseRunUp);
		element.className= "horse runRight";
	}
}

function probability()
{
	document.getElementById("results").rows[1].cells[3].innerHTML = Math.ceil(Math.random() * 9)+ 1;
	document.getElementById("results").rows[2].cells[3].innerHTML = Math.ceil(Math.random() * 9)+ 1;
	document.getElementById("results").rows[3].cells[3].innerHTML = Math.ceil(Math.random() * 9)+ 1;
	document.getElementById("results").rows[4].cells[3].innerHTML = Math.ceil(Math.random() * 9)+ 1;
} 

function betting()
{
	var currentAmount = document.getElementById('funds').innerHTML;
	var winningHorse = document.getElementById('bethorse').value;	
	var i = parseInt(winningHorse.substr(winningHorse.length - 1)) ;
	chanceOfWinning	= parseInt(document.getElementById("results").rows[i].cells[3].innerHTML);
	
	
	if (winningPosition[winningHorse] == 1)
	{
		
		currentAmount = parseInt(currentAmount) + parseInt(betAmount*chanceOfWinning);
		document.getElementById("results").rows[i].cells[3].innerHTML = chanceOfWinning - 1;
		document.getElementById('funds').innerHTML = currentAmount;
		winningPosition[winningHorse] = 5;
		
	}
	else if (winningPosition[winningHorse] == 2)
	{
		
		document.getElementById("results").rows[i].cells[3].innerHTML = chanceOfWinning - 1;
		document.getElementById('funds').innerHTML = currentAmount;
		winningPosition[winningHorse] = 5;
		
	}
	else 
	{
		
		currentAmount = parseInt(currentAmount) - parseInt(betAmount);
		document.getElementById('funds').innerHTML = currentAmount;
		if (winningPosition[winningHorse] != 0 && winningPosition[winningHorse] != 5)
		{
			document.getElementById("results").rows[i].cells[3].innerHTML = chanceOfWinning + 1;
		}
		winningPosition[winningHorse] = 5;
	}	
	
	betAmount=0;

	
	if (position == 4) 
	{
		enableText();
		setResetButton();
	}
}


//// setting the images back to their original positions
function setResetButton()
{
	var element = document.getElementById('start');
	element.innerHTML = "Reset";
	document.getElementById('start').addEventListener('click', resetRace);
}

function resetRace()
{
	document.getElementById('horse1').style.left = '20vw';
	document.getElementById('horse2').style.left = '20vw';
	document.getElementById('horse3').style.left = '20vw';
	document.getElementById('horse4').style.left = '20vw';

	document.getElementById('horse1').style.top = 30 + 'px';
	document.getElementById('horse2').style.top = 60 + 'px';
	document.getElementById('horse3').style.top = 90 + 'px';
	document.getElementById('horse4').style.top = 120 + 'px';
	
        winningPosition [0] = 0;
		winningPosition [1] = 0;
		winningPosition [2] = 0;
		winningPosition [3] = 0;
		position = 0;
		
		lapCountWhiteHorse = 0;
		lapCountBlueHorse  = 0;
		lapCountGreenHorse = 0;
		lapCountBrownHorse = 0;
		
		
		document.getElementById("results").rows[4].cells[0].innerHTML = "";
		document.getElementById("results").rows[3].cells[0].innerHTML = "";
		document.getElementById("results").rows[2].cells[0].innerHTML = "";
		document.getElementById("results").rows[1].cells[0].innerHTML = "";
	
	
	document.getElementById('start').removeEventListener('click', resetRace);
	document.getElementById('start').addEventListener('click', clickStart);
	document.getElementById('start').innerHTML = "Start Race";
	
}

function disableText()
{
	document.getElementById("laps").disabled=true;
	document.getElementById("amount").disabled=true;
	document.getElementById("bethorse").disabled=true;
}

function enableText()
{
	document.getElementById("laps").disabled=false;
	document.getElementById("amount").disabled=false;
	document.getElementById("bethorse").disabled=false;
}

var lapValue;
function lap()
 {
	lapValue = document.getElementById("laps").value;
	lapValue = parseInt(lapValue);
 }
 
 function positionOfWinner(pos)
{
	switch(pos)
	{
		case 1: positionHorse= "1st"; break;
		case 2: positionHorse= "2nd"; break;
		case 3: positionHorse= "3rd"; break
		case 4: positionHorse= "4th"; break;
	
	}
	return positionHorse;
}
 
function clickStart()
{
	
	
	//horse1
		whiteHorseSpeed = Math.random() * 500 + 100;
		whiteHorseRunRight = setInterval(moveRight, whiteHorseSpeed);
		var element = document.getElementById('horse1');
		element.className= "horse runRight";
	//horse2	
		blueHorseSpeed = Math.random() * 500 + 100;
		blueHorseRunRight = setInterval(moveRight2, blueHorseSpeed);
		var element = document.getElementById('horse2');
		element.className= "horse runRight";
	//horse3	
		greenHorseSpeed = Math.random() * 500 + 100;
		greenHorseRunRight = setInterval(moveRight3, greenHorseSpeed);
		var element = document.getElementById('horse3');
		element.className= "horse runRight";
	//horse3	
		brownHorseSpeed = Math.random() * 500 + 100;
		brownHorseRunRight = setInterval(moveRight4, brownHorseSpeed);
		var element = document.getElementById('horse4');
		element.className= "horse runRight";
		
		winningPosition [0] = 0;
		winningPosition [1] = 0;
		winningPosition [2] = 0;
		winningPosition [3] = 0;
		position = 0;
		
		document.getElementById("results").rows[4].cells[0].innerHTML = "";
		document.getElementById("results").rows[3].cells[0].innerHTML = "";
		document.getElementById("results").rows[2].cells[0].innerHTML = "";
		document.getElementById("results").rows[1].cells[0].innerHTML = "";
		
		lap();
		
		disableText();
		betAmount = document.getElementById('amount').value;
		
	document.getElementById("start").removeEventListener('click',clickStart);
		
}
function myLoadFunction()
{
	var element = document.getElementById('start');
	element.addEventListener ('click', clickStart);	
	probability();
}
document.addEventListener('DOMContentLoaded', myLoadFunction);

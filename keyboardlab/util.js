//don't modify this file

function loadImage(fileName)
{
	callsRequired = callsRequired + 1;
	var image = new Image();
	image.onload = imageLoaded;
	image.src = fileName;
	return image;
}

function start(milliseconds)
{
	frameRate = milliseconds;
	callsRequired = callsRequired - 1;
	maybeStart();
}

function imageLoaded()
{
	callsRequired = callsRequired - 1;
	maybeStart();
}

function maybeStart()
{
	if (callsRequired > 0)
	{
		return;
	}
	setup();
	repeat();
	intervalID = setInterval(repeat, frameRate);
}

function print(text)
{
	console.innerHTML = text;
}

function append(text)
{
	console.innerHTML = console.innerHTML + text + "<br/>\n";
}

function clear()
{
	console.innerHTML = "";
}

function eventPosition(evt)
{
	var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
    };
}

function mouseDownEvent(event)
{
	var pos = eventPosition(event);
    mouseDown(pos.x, pos.y);
}

function mouseMoveEvent(event)
{
	var pos = eventPosition(event);
    mouseMove(pos.x, pos.y);
}

function mouseUpEvent(event)
{
	var pos = eventPosition(event);
    mouseUp(pos.x, pos.y);
}

function keyDownEvent(event)
{
	keyDown(event.keyCode);
}

function keyUpEvent(event)
{
	keyUp(event.keyCode);
}

function redAt(x, y)
{
	return ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data[0];
}

function greenAt(x, y)
{
	return ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data[1];
}

function blueAt(x, y)
{
	return ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data[2];
}

function handleFocus()
{
	canvas.focus();
}

var canvas = document.getElementById("canvas");
canvas.tabIndex = "1";
canvas.onmousedown = mouseDownEvent;
canvas.onmousemove = mouseMoveEvent;
canvas.onmouseup = mouseUpEvent;
canvas.addEventListener("keydown", keyDownEvent, false);
canvas.addEventListener("keyup", keyUpEvent, false);
canvas.addEventListener("mouseover", handleFocus, false);
var ctx = canvas.getContext("2d");
var console = document.getElementById("console");
var callsRequired = 1;
var frameRate;
var intervalID;

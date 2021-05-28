var text='Implemented by Hiranmayee & Ksheeraj';
var i=0;

function dispText(){
	document.body.innerText=text.slice(0,i);
	i++;
	if(i>text.length)
		i=0;
}

setInterval(dispText,200);
function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {

var delimiter = '\u2060';   // U+2060 WORD JOINER
var hex0 = '\u206C';        // U+206C INHIBIT ARABIC FORM SHAPING
var hex1 = '\u00AD';        // U+00AD SOFT HYPHEN
var hex2 = '\u200E';        // LEFT TO RIGHT MARK
var hex3 = '\u2068';        // FIRST STRONG ISOLATE
var hex4 = '\u202c';        // POP DIRECTIONAL FORMATTING
var hex5 = '\u2069';        // POP DIRECTIONAL ISOLATE
var hex6 =  '\u206a';	    // U+206A INHIBIT SYMMETRIC SWAPPING
var hex7 = '\u200B';        // U+200B ZERO WIDTH SPACE
var hex8 = '\u200C';        // U+200C ZERO WIDTH NON-JOINER
var hex9 = '\u200D';        // U+200D ZERO WIDTH JOINER
var hexb = '\u206D';        // U+206D ACTIVATE ARABIC FORM SHAPING
var hexa = '\u206F';        // U+206F NOMINAL DIGIT SHAPES
var hexc = '\u2062';        // U+2062 INVISIBLE TIMES
var hexd = '\u2063';        // U+2063 INVISIBLE SEPARATOR
var hexe = '\u2064';        // U+2064 INVISIBLE PLUS
var hexf = '\u206E';        // U+206E NATIONAL DIGIT SHAPES

function ascii_to_hexa(str)
	{
		var arr1 = [];
		for (var n = 0, l = str.length; n < l; n ++)
		{
			var hex = Number(str.charCodeAt(n)).toString(16);
			arr1.push(hex);
		}
		return arr1.join('');
}

document.addEventListener('copy', function (event) {
	var message = 'ADD YOUR INVISIBLE MESSAGE HERE';

	var allashexwithspace = "";

	for (i = 0; i < message.length; i++) {
		var checking = ascii_to_hexa(message.charAt(i));
		allashexwithspace = allashexwithspace + checking + 'x';
	}

	var invisiblemsg = '';

	for (i = 0; i < allashexwithspace.length; i++){

		switch(allashexwithspace[i]) {
			case 'x':
				invisiblemsg += delimiter;
				break;
			case '0':
				invisiblemsg += hex0;
				break;
			case '1':
				invisiblemsg += hex1;
				break;
			case '2':
				invisiblemsg += hex2;
				break;
			case '3':
				invisiblemsg += hex3;
				break;
			case '4':
				invisiblemsg += hex4;
				break;
			case '5':
				invisiblemsg += hex5;
				break;
			case '6':
				invisiblemsg += hex6;
				break;
			case '7':
				invisiblemsg += hex7;
				break;
			case '8':
				invisiblemsg += hex8;
				break;
			case '9':
				invisiblemsg += hex9;
				break;
			case 'a':
				invisiblemsg += hexa;
				break;
			case 'b':
				invisiblemsg += hexb;
				break;
			case 'c':
				invisiblemsg += hexc;
				break;
			case 'd':
				invisiblemsg += hexd;
				break;
			case 'e':
				invisiblemsg += hexe;
				break;
			case 'f':
				invisiblemsg += hexf;
				break;
		}
	}
// Adds to clipboard
	event.clipboardData.setData('text', document.getSelection() + invisiblemsg);
	event.preventDefault();
});
//end
});
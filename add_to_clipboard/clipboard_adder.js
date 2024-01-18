function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}
document_ready(function() {
	var button1  =  document.getElementsByClassName('char1')[0];
	var button2  =  document.getElementsByClassName('char2')[0];
	var button3  =  document.getElementsByClassName('char3')[0];
	var button4  =  document.getElementsByClassName('char4')[0];
	var button5  =  document.getElementsByClassName('char5')[0];
	var button6  =  document.getElementsByClassName('char6')[0];
	var button7  =  document.getElementsByClassName('char7')[0];
	var button8  =  document.getElementsByClassName('char8')[0];
	var button9  =  document.getElementsByClassName('char9')[0];
	var button10  =  document.getElementsByClassName('char10')[0];
	var button11  =  document.getElementsByClassName('char11')[0];
	var button12  =  document.getElementsByClassName('char12')[0];
	var button13  =  document.getElementsByClassName('char13')[0];
	var button14  =  document.getElementsByClassName('char14')[0];
	var button15  =  document.getElementsByClassName('char15')[0];
	var button16  =  document.getElementsByClassName('char16')[0];
	var button17  =  document.getElementsByClassName('char17')[0];
	var all_of_them  =  document.getElementsByClassName('all')[0];

	button1.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2060';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('WORD JOINER added to clipboard.');
	});

	button2.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206C';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('INHIBIT ARABIC FORM added to clipboard.');
	});

	button3.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u00AD';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('SOFT HYPHEN added to clipboard.');
	});

	button4.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u200E';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('LEFT TO RIGHT MARK added to clipboard.');
	});

	button5.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2068';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('FIRST STRONG ISOLATE  added to clipboard.');
	});

	button6.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u202c';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('POP DIRECTIONAL FORMATTING added to clipboard.');
	});

	button7.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2069';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('POP DIRECTIONAL ISOLATE added to clipboard.');
	});

	button8.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206a';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('INHIBIT SYMMETRIC SWAPPING added to clipboard.');
	});

	button9.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u200B';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ZERO WIDTH SPACE added to clipboard.');
	});

	button10.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u200C';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ZERO WIDTH NON-JOINER added to clipboard.');
	});

	button11.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u200D';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ZERO WIDTH JOINER added to clipboard.');
	});

	button12.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206D';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ACTIVATE ARABIC FORM SHAPING added to clipboard.');
	});

	button13.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206F';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('NOMINAL DIGIT SHAPES added to clipboard.');
	});

	button14.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2062';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('INVISIBLE TIMES added to clipboard.');
	});

	button15.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2063';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('INVISIBLE SEPARATOR added to clipboard.');
	});

	button16.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2064';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('INVISIBLE PLUS added to clipboard.');
	});

	button17.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206E';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('NATIONAL DIGIT SHAPES added to clipboard.');
	});

	all_of_them.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2060' + '\u206C' + '\u00AD' + '\u200E' + '\u2068' + '\u202c' + '\u2069' + '\u206a' + '\u200B' + '\u200C' + '\u200D' + '\u206D' + '\u206F' + '\u2062' + '\u2063' + '\u2064' + '\u206E';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('All of them added to clipboard.');
	});






	button18.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u034F';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('COMBINING GRAPHEME JOINER added to clipboard.');
	});

	button19.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u061C';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ARABIC LETTER MARK added to clipboard.');
	});

	button20.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u17B4';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('KHMER VOWEL INHERENT AQ added to clipboard.');
	});

   	button21.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u17B5';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('KHMER VOWEL INHERENT AA added to clipboard.');
	});


	button22.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2061';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('FUNCTION APPLICATION added to clipboard.');
	});

	button23.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u206B';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ACTIVATE SYMMETRIC SWAPPING added to clipboard.');
	});

	button24.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u3000';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('IDEOGRAPHIC SPACE added to clipboard.');
	});


	button25.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u2800';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('BRAILLE PATTERN BLANK added to clipboard.');
	});

	button26.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u3164';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('HANGUL FILLER added to clipboard.');
	});

	button27.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\uFEFF';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('ZERO WIDTH NO-BREAK SPACE added to clipboard.');
	});


	button28.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\uFFA0';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('HALFWIDTH HANGUL added to clipboard.');
	});

	button29.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D159}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL NULL NOTEHEAD added to clipboard.');
	});


	button30.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D173}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL BEGIN BEAM added to clipboard.');
	});

	button31.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D175}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL BEGIN TIE added to clipboard.');
	});

	button32.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D177}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL BEGIN SLUR added to clipboard.');
	});


	button33.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D179}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL BEGIN PHRASE added to clipboard.');
	});

	button34.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D174}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL END BEAM added to clipboard.');
	});

	button35.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D176}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL END TIE added to clipboard.');
	});

	button36.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D178}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL END SLUR added to clipboard.');
	});

	button37.addEventListener("click", function (event) {
		var textarea = document.createElement("textarea");
		textarea.textContent = '\u{1D17A}';
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert('MUSICAL SYMBOL END PHRASE added to clipboard.');
	});




	/*
		var b = '\u034F';       //U+034F COMBINING GRAPHEME JOINER   GOOD USED
			var c = '\u061C';       //U+061C ARABIC LETTER MARK          GOOD USED

	var d = '\u17B4';       //U+17B4 KHMER VOWEL INHERENT AQ     GOOD USED

	var e = '\u17B5';       //U+17B5 KHMER VOWEL INHERENT AA     GOOD USED
	var k = '\u2061';       // U+2061 FUNCTION APPLICATION       GOOD
		var p = '\u206B';       // U+206B ACTIVATE SYMMETRIC SWAPPING GOOD
			var u = '\u3000';       // U+3000 IDEOGRAPHIC SPACE



	var v = '\u2800';       // U+2800 BRAILLE PATTERN BLANK

	var w = '\u3164';       // U+3164 HANGUL FILLER
	var x = '\uFEFF';       // U+FEFF ZERO WIDTH NO-BREAK SPACE GOOD         USED


	var y = '\uFFA0';       // U+FFA0 HALFWIDTH HANGUL FILLER
	var z = '\u{1D159}';    // MUSICAL SYMBOL NULL NOTEHEAD bad(?)

	var a0 = '\u{1D173}';   // U+1D173 MUSICAL SYMBOL BEGIN BEAM GOOD
	var c0 = '\u{1D175}';   // U+1D175 MUSICAL SYMBOL BEGIN TIE GOOD
	var e0 = '\u{1D177}';   // U+1D177 MUSICAL SYMBOL BEGIN SLUR GOOD
	var g0 = '\u{1D179}';   // U+1D179 MUSICAL SYMBOL BEGIN PHRASE GOOD

	var b0 = '\u{1D174}';   // U+1D174 MUSICAL SYMBOL END BEAM GOOD
	var d0 = '\u{1D176}';   // U+1D176 MUSICAL SYMBOL END TIE GOOD
	var f0 = '\u{1D178}';   // U+1D178 MUSICAL SYMBOL END SLUR GOOD
	var h0 = '\u{1D17A}';   // U+1D17A MUSICAL SYMBOL END PHRASE
*/






})
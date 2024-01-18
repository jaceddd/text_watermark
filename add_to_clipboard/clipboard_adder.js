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
});
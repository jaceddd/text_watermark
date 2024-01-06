function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

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


document_ready(function() {

	//sets original placement
	var delimiter = '\u2060';   // U+2060 WORD JOINER
	var hex0 = '\u206C';    // U+206C INHIBIT ARABIC FORM SHAPING   GOOD
	var hex1 = '\u00AD';    // U+00AD SOFT HYPHEN                   GOOD
	var hex2 = '\u200E';    // FUCKING LEFT TO RIGHT MARK           GOOD
	var hex3 = '\u2068';    // FIRST STRONG ISOLATE NEW             GOOD
	var hex4 = '\u202c';    // POP DIRECTIONAL FORMATTING           GOOD
	var hex5 = '\u2069';    // POP DIRECTIONAL ISOLATE              GOOD
	var hex6 = '\u206a';    // U+206A INHIBIT SYMMETRIC SWAPPING    GOOD
	var hex7 = '\u200B';    // U+200B ZERO WIDTH SPACE              GOOD
	var hex8 = '\u200C';    // U+200C ZERO WIDTH NON-JOINER         GOOD
	var hex9 = '\u200D';    // U+200D ZERO WIDTH JOINER             GOOD
	var hexb = '\u206D';    // U+206D ACTIVATE ARABIC FORM SHAPING  GOOD
	var hexa = '\u206F';    // U+206F NOMINAL DIGIT SHAPES          GOOD
	var hexc = '\u2062';    // U+2062 INVISIBLE TIMES               GOOD
	var hexd = '\u2063';    // U+2063 INVISIBLE SEPARATOR           GOOD
	var hexe = '\u2064';    // U+2064 INVISIBLE PLUS                GOOD
	var hexf = '\u206E';    // U+206E NATIONAL DIGIT SHAPES         GOOD


	var inserted_text = document.getElementsByClassName('insert_text_here')[0];
	var outputted_target = document.getElementsByClassName('outputted_meta_tag')[0];
	var generate_code_button = document.getElementsByClassName('generate_code')[0];


	var google_text_vis = document.getElementsByClassName('google_text_vis')[0];
	var search_google_button = document.getElementsByClassName('search_google')[0];
	var poison_text = document.getElementsByClassName('poison')[0];






	generate_code_button.addEventListener('click', function () {

	var inserted_text_box = document.getElementsByClassName('insert_text_here')[0];
	var outputted_target = document.getElementsByClassName('outputted_meta_tag')[0];
	var outputted_h1 = document.getElementsByClassName('outputted_h1_tag')[0];

	var inserted_text = inserted_text_box.value;

	var start_meta = '<meta name="keywords" content="';
	var end_meta = ', subject2, subject3">';
	var start_h1 = '<h1>';
	var end_h1 = '-Actual title of page here</h1>';

	var allashexwithspace = "";

	// x is the seperator
	for (i = 0; i < inserted_text.length; i++) {
		var checking = ascii_to_hexa(inserted_text.charAt(i));
		allashexwithspace = allashexwithspace + checking + 'x';
	}



	var invisible_string = "";

	for (i = 0; i < allashexwithspace.length; i++){

		switch(allashexwithspace[i]) {
			case 'x':
				invisible_string += delimiter;
				break;
			case '0':
				invisible_string += hex0;
				break;
			case '1':
				invisible_string += hex1;
				break;
			case '2':
				invisible_string += hex2;
				break;
			case '3':
				invisible_string += hex3;
				break;
			case '4':
				invisible_string += hex4;
				break;
			case '5':
				invisible_string += hex5;
				break;
			case '6':
				invisible_string += hex6;
				break;
			case '7':
				invisible_string += hex7;
				break;
			case '8':
				invisible_string += hex8;
				break;
			case '9':
				invisible_string += hex9;
				break;
			case 'a':
				invisible_string += hexa;
				break;
			case 'b':
				invisible_string += hexb;
				break;
			case 'c':
				invisible_string += hexc;
				break;
			case 'd':
				invisible_string += hexd;
				break;
			case 'e':
				invisible_string += hexe;
				break;
			case 'f':
				invisible_string += hexf;
				break;
		}



var final_meta_string = start_meta + invisible_string + end_meta;
var final_h1_string = start_h1 + invisible_string + end_h1;

		outputted_target.value = final_meta_string;
		outputted_h1.value = final_h1_string;


	}

	});

	search_google_button.addEventListener('click', function () {

		var google_text_vis = document.getElementsByClassName('google_text_vis')[0];
		var search_google_button = document.getElementsByClassName('search_google')[0];
		var poison_text = document.getElementsByClassName('poison')[0];

		var inserted_text = google_text_vis.value;
		var inserted_poison = poison_text.value;

		var allashexwithspace = "";

		// x is the seperator
		for (i = 0; i < inserted_text.length; i++) {
			var checking = ascii_to_hexa(inserted_text.charAt(i));
			allashexwithspace = allashexwithspace + checking + 'x';
		}

		var invisible_string = "";

		for (i = 0; i < allashexwithspace.length; i++){

			switch(allashexwithspace[i]) {
				case 'x':
					invisible_string += delimiter;
					break;
				case '0':
					invisible_string += hex0;
					break;
				case '1':
					invisible_string += hex1;
					break;
				case '2':
					invisible_string += hex2;
					break;
				case '3':
					invisible_string += hex3;
					break;
				case '4':
					invisible_string += hex4;
					break;
				case '5':
					invisible_string += hex5;
					break;
				case '6':
					invisible_string += hex6;
					break;
				case '7':
					invisible_string += hex7;
					break;
				case '8':
					invisible_string += hex8;
					break;
				case '9':
					invisible_string += hex9;
					break;
				case 'a':
					invisible_string += hexa;
					break;
				case 'b':
					invisible_string += hexb;
					break;
				case 'c':
					invisible_string += hexc;
					break;
				case 'd':
					invisible_string += hexd;
					break;
				case 'e':
					invisible_string += hexe;
					break;
				case 'f':
					invisible_string += hexf;
					break;
			}



		}


		window.open('https://www.google.com/search?q=' + invisible_string + '%20' + inserted_poison );




	})


});
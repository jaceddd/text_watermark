
function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {
	//  Define all invisible characters.
	var char_x = '\u2060';          // U+2060 WORD JOINER
	var char_0 = '\u206C';          // U+206C INHIBIT ARABIC FORM SHAPING
	var char_1 = '\u00AD';          // U+00AD SOFT HYPHEN
	var char_2 = '\u200E';          // LEFT TO RIGHT MARK
	var char_3 = '\u2068';          // FIRST STRONG ISOLATE NEW
	var char_4 = '\u202c';          // POP DIRECTIONAL FORMATTING
	var char_5 = '\u2069';          // POP DIRECTIONAL ISOLATE NEW
	var char_6 = '\u206a';          // U+206A INHIBIT SYMMETRIC SWAPPING GOOD
	var char_7 = '\u200B';          // U+200B ZERO WIDTH SPACE
	var char_8 = '\u200C';          // U+200C ZERO WIDTH NON-JOINER
	var char_9 = '\u200D';          // U+200D ZERO WIDTH JOINER
	var char_a = '\u206D';          // U+206D ACTIVATE ARABIC FORM SHAPING
	var char_b = '\u206F';          // U+206F NOMINAL DIGIT SHAPES
	var char_c = '\u2062';          // U+2062 INVISIBLE TIMES
	var char_d = '\u2063';          // U+2063 INVISIBLE SEPARATOR
	var char_e = '\u2064';          // U+2064 INVISIBLE PLUS
	var char_f = '\u206E';          // U+206E NATIONAL DIGIT SHAPES

	// Name a few elements.
	var visualize = document.getElementsByClassName('visualize')[0];
	var strip_spaces = document.getElementsByClassName('strip_spaces')[0];
	var add_to_clipboard = document.getElementsByClassName('add_to_clipboard')[0];

	visualize.addEventListener("click", function (event) {

		var user_input_box = document.getElementsByClassName('enter_text_here')[0];
		var results_visualized = document.getElementsByClassName('results_visualized')[0];
		results_visualized.style.visibility = 'visible';

		// Grabs the input text.
		original_text = user_input_box.value;

		// Replaces invisible characters one at a time with a for loop and stores them in original_text_split.
		if (original_text){
			var original_text_split = original_text.split('');

			for (i = 0; i < original_text_split.length; i++){
				switch (original_text_split[i]) {
					case char_x:
						console.log('char_x detected');
						original_text_split[i] = '<span style="background-color:#0B3E4F;">&nbsp;</span>';
						break;
					case char_0:
						console.log('char_0 detected');
						original_text_split[i] = '<span style="background-color:DarkTurquoise;">&nbsp;</span>';
						break;
					case char_1:
						console.log('char_1 detected');
						original_text_split[i] = '<span style="background-color:SaddleBrown;">&nbsp;</span>';
						break;
					case char_2:
						console.log('char_2 detected');
						original_text_split[i] = '<span style="background-color:Teal;">&nbsp;</span>';
						break;
					case char_3:
						console.log('char_3 detected');
						original_text_split[i] = '<span style="background-color:Orchid;">&nbsp;</span>';
						break;
					case char_4:
						console.log('char_4 detected');
						original_text_split[i] = '<span style="background-color:Red;">&nbsp;</span>';
						break;
					case char_5:
						console.log('char_5 detected');
						original_text_split[i] = '<span style="background-color:Olive;">&nbsp;</span>';
						break;
					case char_6:
						console.log('char_6 detected');
						original_text_split[i] = '<span style="background-color:Sienna;">&nbsp;</span>';
						break;
					case char_7:
						console.log('char_7 detected');
						original_text_split[i] = '<span style="background-color:Coral;">&nbsp;</span>';
						break;
					case char_8:
						console.log('char_8 detected');
						original_text_split[i] = '<span style="background-color:Gold;">&nbsp;</span>';
						break;
					case char_9:
						console.log('char_9 detected');
						original_text_split[i] = '<span style="background-color:DarkMagenta;">&nbsp;</span>';
						break;
					case char_a:
						console.log('char_a detected');
						original_text_split[i] = '<span style="background-color:Fuchsia;">&nbsp;</span>';
						break;
					case char_b:
						console.log('char_b detected');
						original_text_split[i] = '<span style="background-color:LightSlateGray;">&nbsp;</span>';
						break;
					case char_c:
						console.log('char_c detected');
						original_text_split[i] = '<span style="background-color:MediumSeaGreen;">&nbsp;</span>';
						break;
					case char_d:
						console.log('char_d detected');
						original_text_split[i] = '<span style="background-color:Firebrick;">&nbsp;</span>';
						break;
					case char_e:
						console.log('char_e detected');
						original_text_split[i] = '<span style="background-color:Azure;">&nbsp;</span>';
						break;
					case char_f:
						console.log('char_f detected');
						original_text_split[i] = '<span style="background-color:Lime;">&nbsp;</span>';
						break;
				}
			}
		}
		results_visualized.innerHTML = original_text_split.join('');
	});

	// Add to clipboard button
	add_to_clipboard.addEventListener("click", function (event) {
		var stripped_output = document.getElementsByClassName('stripped_output')[0];
		if (stripped_output.value !== ''){
			event.preventDefault();
			stripped_output.select();
			document.execCommand("copy");
			alert('Stripped text is on your clipboard');
		} else {
			alert('Nothing to copy.');
		}
	});

	// Strip spaces button.
	strip_spaces.addEventListener("click", function (event) {
		var user_input_box = document.getElementsByClassName('enter_text_here')[0];
		var stripped_output = document.getElementsByClassName('stripped_output')[0];
		var add_to_clipboard = document.getElementsByClassName('add_to_clipboard')[0];

		add_to_clipboard.style.visibility = 'visible';
		stripped_output.style.visibility = 'visible';
		original_text = user_input_box.value;

		if (original_text){
			var holder = [];
			var original_text_split = original_text.split('');

			for (i = 0; i < original_text_split.length; i++){

				switch (original_text_split[i]) {
					case char_x:
						console.log('char_x detected');
						original_text_split[i] = '';
						break;
					case char_0:
						console.log('char_0 detected');
						original_text_split[i] = '';
						break;
					case char_1:
						console.log('char_1 detected');
						original_text_split[i] = '';
						break;
					case char_2:
						console.log('char_2 detected');
						original_text_split[i] = '';
						break;
					case char_3:
						console.log('char_3 detected');
						original_text_split[i] = '';
						break;
					case char_4:
						console.log('char_4 detected');
						original_text_split[i] = '';
						break;
					case char_5:
						console.log('char_5 detected');
						original_text_split[i] = '';
						break;
					case char_6:
						console.log('char_6 detected');
						original_text_split[i] = '';
						break;
					case char_7:
						console.log('char_7 detected');
						original_text_split[i] = '';
						break;
					case char_8:
						console.log('char_8 detected');
						original_text_split[i] = '';
						break;
					case char_9:
						console.log('char_9 detected');
						original_text_split[i] = '';
						break;
					case char_a:
						console.log('char_a detected');
						original_text_split[i] = '';
						break;
					case char_b:
						console.log('char_b detected');
						original_text_split[i] = '';
						break;
					case char_c:
						console.log('char_c detected');
						original_text_split[i] = '';
						break;
					case char_d:
						console.log('char_d detected');
						original_text_split[i] = '';
						break;
					case char_e:
						console.log('char_e detected');
						original_text_split[i] = '';
						break;
					case char_f:
						console.log('char_f detected');
						original_text_split[i] = '';
						break;
				}
			}
			// Inserts the output into text box.
			stripped_output.value = original_text_split.join('');
		}
	});

//end
});



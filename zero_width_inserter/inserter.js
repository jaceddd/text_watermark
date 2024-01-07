
function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {

	// Defines all the invisible characters.
	var char_x = '\u2060';       // U+2060 WORD JOINER
	var char_0 = '\u206C';        // U+206C INHIBIT ARABIC FORM SHAPING
	var char_1 = '\u00AD';        // U+00AD SOFT HYPHEN
	var char_2 = '\u200E';        // LEFT TO RIGHT MARK
	var char_3 = '\u2068';        // FIRST STRONG ISOLATE NEW
	var char_4 = '\u202c';        // POP DIRECTIONAL FORMATTING
	var char_5 = '\u2069';        // POP DIRECTIONAL ISOLATE NEW
	var char_6 = '\u206a';        // U+206A INHIBIT SYMMETRIC SWAPPING GOOD
	var char_7 = '\u200B';        // U+200B ZERO WIDTH SPACE
	var char_8 = '\u200C';        // U+200C ZERO WIDTH NON-JOINER
	var char_9 = '\u200D';        // U+200D ZERO WIDTH JOINER
	var char_a = '\u206D';        // U+206D ACTIVATE ARABIC FORM SHAPING
	var char_b = '\u206F';        // U+206F NOMINAL DIGIT SHAPES
	var char_c = '\u2062';        // U+2062 INVISIBLE TIMES
	var char_d = '\u2063';        // U+2063 INVISIBLE SEPARATOR
	var char_e = '\u2064';        // U+2064 INVISIBLE PLUS
	var char_f = '\u206E';        // U+206E NATIONAL DIGIT SHAPES


	function each_char(target_string, invis_chars){
		var split_array = target_string.split('');
		var target_array = [];
		for (i = 0; i < split_array.length; i++){
			target_array.push(split_array[i] + invis_chars);
		}
		var finished_string = target_array.join('');
		return finished_string
	}

	function around_space(target_string, invis_chars){
		var split_array = target_string.split("");
		var target_array = [];
		for (i = 0; i < split_array.length; i++){
			if (split_array[i] === ' '){
				target_array.push(invis_chars + split_array[i] + invis_chars);
			} else {
				target_array.push(split_array[i]);
			}
		}
		var finished_string = target_array.join('');
		return finished_string
	}

	function at_period(target_string, invis_chars){
		var split_array = target_string.split("");
		var target_array = [];

		for (i = 0; i < split_array.length; i++){
			if (split_array[i] === '.'){
				target_array.push(invis_chars + split_array[i] + invis_chars);
			} else {
				target_array.push(split_array[i]);
			}
		}

		var finished_string = target_array.join('');
		return finished_string
	}

	function low_oc(target_string, invis_chars){
		console.log('low_oc inner function');
		var split_array = target_string.split("");
		var target_array = [];

		for (i = 0; i < split_array.length; i++){
			var roll = Math.floor(Math.random() * 20) + 1;
			if (roll === 20){
				target_array.push(split_array[i] + invis_chars);
			} else {
				target_array.push(split_array[i]);
			}
		}

		var finished_string = target_array.join('');
		return finished_string
	}

	function mid_oc(target_string, invis_chars){
		console.log('mid_oc inner function');

		var split_array = target_string.split("");
		var target_array = [];

		for (i = 0; i < split_array.length; i++){
			var roll = Math.floor(Math.random() * 6) + 1;
			if (roll === 6){
				target_array.push(split_array[i] + invis_chars);
			} else {
				target_array.push(split_array[i]);
			}
		}

		var finished_string = target_array.join('');
		return finished_string
	}

	function high_oc(target_string, invis_chars){
		console.log('high_oc inner function');
		var split_array = target_string.split("");
		var target_array = [];

		for (i = 0; i < split_array.length; i++){
			var roll = Math.floor(Math.random() * 3) + 1;
			if (roll === 3){
				target_array.push(split_array[i] + invis_chars);
			} else {
				target_array.push(split_array[i]);
			}
		}

		var finished_string = target_array.join('');
		return finished_string
	}

// Get all checkboxes
	var all_checkbox = document.getElementsByClassName('checkbox');

	var a_1 = all_checkbox[0];
	var a_2 = all_checkbox[1];
	var a_3 = all_checkbox[2];
	var a_4 = all_checkbox[3];
	var a_5 = all_checkbox[4];
	var a_6 = all_checkbox[5];
	var b_de = all_checkbox[6];
	var b_0 = all_checkbox[7];
	var b_1 = all_checkbox[8];
	var b_2 = all_checkbox[9];
	var b_3 = all_checkbox[10];
	var b_4 = all_checkbox[11];
	var b_5 = all_checkbox[12];
	var b_6 = all_checkbox[13];
	var b_7 = all_checkbox[14];
	var b_8 = all_checkbox[15];
	var b_9 = all_checkbox[16];
	var b_a = all_checkbox[17];
	var b_b = all_checkbox[18];
	var b_c = all_checkbox[19];
	var b_d = all_checkbox[20];
	var b_e = all_checkbox[21];
	var b_f = all_checkbox[22];

	// get all other elements
	var testbutton = document.getElementsByClassName('test')[0];
	var user_input_box = document.getElementsByClassName('enter_text_here')[0]
	var generate_button = document.getElementsByClassName('generate')[0];
	var results_output_box = document.getElementsByClassName('results_here')[0];
	var copy_to_clipboard_button = document.getElementsByClassName('add_to_clipboard')[0];
	var results_visualized = document.getElementsByClassName('results_visualized')[0];

	generate_button.addEventListener("click", function (event) {

		var original_text = user_input_box.value;
		var invisible_string = '';

		if (b_de.checked){
			invisible_string = invisible_string + char_x;
		}

		if (b_0.checked){
			invisible_string = invisible_string + char_0;
		}

		if (b_1.checked){
			invisible_string = invisible_string + char_1;
		}

		if (b_2.checked){
			invisible_string = invisible_string + char_2;
		}

		if (b_3.checked){
			invisible_string = invisible_string + char_3;
		}

		if (b_4.checked){
			invisible_string = invisible_string + char_4;
		}

		if (b_5.checked){
			invisible_string = invisible_string + char_5;
		}

		if (b_6.checked){
			invisible_string = invisible_string + char_6;
		}

		if (b_7.checked){
			invisible_string = invisible_string + char_7;
		}

		if (b_8.checked){
			invisible_string = invisible_string + char_8;
		}

		if (b_9.checked){
			invisible_string = invisible_string + char_9;
		}

		if (b_a.checked){
			invisible_string = invisible_string + char_a;
		}

		if (b_b.checked){
			invisible_string = invisible_string + char_b;
		}

		if (b_c.checked){
			invisible_string = invisible_string + char_c;
		}

		if (b_d.checked){
			invisible_string = invisible_string + char_d;
		}

		if (b_e.checked){
			invisible_string = invisible_string + char_e;
		}

		if (b_f.checked){
			invisible_string = invisible_string + char_f;
		}


		// Makes sure both options are selected
if (!invisible_string){
	alert('You need to pick some characters to use.');
	return
}

if (!a_1.checked && !a_2.checked && !a_3.checked && !a_4.checked && !a_5.checked && !a_6.checked){
	alert('You need to pick at least one method.');
	return
}

if (!user_input_box.value){
	alert('You need to enter some text.');
	return
};

		if (a_1.checked){
			console.log('running function: Inbetween each character.');
			original_text = each_char(original_text, invisible_string);
		}

		if (a_2.checked){
			console.log('running function: Surrounding each space.');
			original_text = around_space(original_text, invisible_string);
		}

		if (a_3.checked){
			console.log('running function:  After each full stop');
			original_text = at_period(original_text, invisible_string);
		}

		if (a_4.checked){
			console.log('running function:  Low occurrence');
			original_text = low_oc(original_text, invisible_string);
		}

		if (a_5.checked){
			console.log('running function:  Medium occurrence');
			original_text = mid_oc(original_text, invisible_string);
		}

		if (a_6.checked){
			console.log('running function:  high occurrence');
			original_text = high_oc(original_text, invisible_string);
		}

		if (a_1.checked || a_2.checked || a_3.checked || a_4.checked || a_5.checked || a_6.checked){

		results_output_box.value = original_text;


		if (original_text){
			var holder = [];

			var original_text_split = original_text.split('');

			for (i = 0; i < original_text_split.length; i++){

				switch (original_text_split[i]) {
					case char_x:
						console.log('char_d detected');
						original_text_split[i] = '<span style="background-color:blue;">&nbsp;</span>';
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

		original_text_viz = original_text_split.join('');
		results_visualized.innerHTML = original_text_viz;
		}
	});
	
	copy_to_clipboard_button.addEventListener("click", function (event) {

		event.preventDefault();
		results_output_box.select();
		document.execCommand("copy");
		alert('Encoded message is on your clipboard now, paste it to target.');
	});
//end
});



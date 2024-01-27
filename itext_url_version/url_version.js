function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {

function shuffle_array(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

function generate_code() {
	var generated_code = '';
	var alloptionsarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'x'];
	shuffle_array(alloptionsarray);
	for (var i = 0; i < alloptionsarray.length; i++) {
		generated_code = generated_code + alloptionsarray[i];
	}
	return generated_code;
}

function ascii_to_hexa(str){
	var arr1 = [];
	for (var i = 0, len = str.length; i < len; i ++)
	{
		var hex = Number(str.charCodeAt(i)).toString(16);
		if (hex.length == 1 || hex.length == 3 || hex.length == 5){
			hex = '0' + hex.toString();
		}
		arr1.push(hex);
	}
	return arr1.join('');
}

function hexa_to_ascii(hex){
	result = String.fromCharCode(parseInt(hex, 16));
	return result;
}

// Sets original placement of the invisible characters to these variables.
	const delimiter_ori = '\u2060';   // U+2060 WORD JOINER
	const hex0_ori = '\u206C';    // U+206C INHIBIT ARABIC FORM SHAPING   GOOD
	const hex1_ori = '\u00AD';    // U+00AD SOFT HYPHEN                   GOOD
	const hex2_ori = '\u200E';    // U+200E LEFT TO RIGHT MARK            GOOD
	const hex3_ori = '\u2068';    // U+2068 FIRST STRONG ISOLATE NEW      GOOD
	const hex4_ori = '\u202c';    // U+202c DIRECTIONAL FORMATTING        GOOD
	const hex5_ori = '\u2069';    // U+2069 POP DIRECTIONAL ISOLATE       GOOD
	const hex6_ori = '\u206a';    // U+206A INHIBIT SYMMETRIC SWAPPING    GOOD
	const hex7_ori = '\u200B';    // U+200B ZERO WIDTH SPACE              GOOD
	const hex8_ori = '\u200C';    // U+200C ZERO WIDTH NON-JOINER         GOOD
	const hex9_ori = '\u200D';    // U+200D ZERO WIDTH JOINER             GOOD
	const hexa_ori = '\u206D';    // U+206D ACTIVATE ARABIC FORM SHAPING  GOOD
	const hexb_ori = '\u206F';    // U+206F NOMINAL DIGIT SHAPES          GOOD
	const hexc_ori = '\u2062';    // U+2062 INVISIBLE TIMES               GOOD
	const hexd_ori = '\u2063';    // U+2063 INVISIBLE SEPARATOR           GOOD
	const hexe_ori = '\u2064';    // U+2064 INVISIBLE PLUS                GOOD
	const hexf_ori = '\u206E';    // U+206E NATIONAL DIGIT SHAPES         GOOD

	var query_string = window.location.search;
	if (query_string == ''){
		window.location.replace(window.location + '?key=' + generate_code());
	}
	var keyfromurl = query_string.slice(5);
	var insert_get_code = keyfromurl;

	//sets up target elements
	var code_input  =  document.getElementsByClassName('pass_code_i')[0];
	var code_output  =  document.getElementsByClassName('pass_code_o')[0];
	var generate_code  =  document.getElementsByClassName('generate_code')[0];
	var save_get  =  document.getElementsByClassName('save_code_as_get')[0];
	var save_get_2  =  document.getElementsByClassName('save_code_as_get_2')[0];
	var target_output_textbox  =  document.getElementsByClassName('into_this')[0];
	var copy_this_combined_button = document.getElementsByClassName('copy_this')[0];
	var invisible_invis_chars_box = document.getElementsByClassName('hidden_invisible_chars')[0];
	var copy_all_invis_button = document.getElementsByClassName('copy_all_invis_chars_button')[0];
	var dec = document.getElementsByClassName('decod')[0];
	var comb_button = document.getElementsByClassName('combiner')[0];

	//puts get into the boxes if it has been saved
	if (insert_get_code){
		code_input.value = insert_get_code;
		code_output.value = insert_get_code;
	}

	// this part grabs the get and splits it character by character. then replaces each one with the invisible spaces.
	var get_code_as_array = keyfromurl.split("");

	for (var it = 0; it < get_code_as_array.length; it++){

	switch (get_code_as_array[it]) {
		case 'x':
			get_code_as_array[it] = delimiter_ori;
			break;
		case '0':
			get_code_as_array[it] = hex0_ori;
			break;
		case '1':
			get_code_as_array[it] = hex1_ori;
			break;
		case '2':
			get_code_as_array[it] = hex2_ori;
			break;
		case '3':
			get_code_as_array[it] = hex3_ori;
			break;
		case '4':
			get_code_as_array[it] = hex4_ori;
			break;
		case '5':
			get_code_as_array[it] = hex5_ori;
			break;
		case '6':
			get_code_as_array[it] = hex6_ori;
			break;
		case '7':
			get_code_as_array[it] = hex7_ori;
			break;
		case '8':
			get_code_as_array[it] = hex8_ori;
			break;
		case '9':
			get_code_as_array[it] = hex9_ori;
			break;
		case 'a':
			get_code_as_array[it] = hexa_ori;
			break;
		case 'b':
			get_code_as_array[it] = hexb_ori;
			break;
		case 'c':
			get_code_as_array[it] = hexc_ori;
			break;
		case 'd':
			get_code_as_array[it] = hexd_ori;
			break;
		case 'e':
			get_code_as_array[it] = hexe_ori;
			break;
		case 'f':
			get_code_as_array[it] = hexf_ori;
	}
	}

	// Shuffled code is set here to the same as the original version.
	var delimiter = get_code_as_array[0];
	var hex0 = get_code_as_array[1];
	var hex1 = get_code_as_array[2];
	var hex2 = get_code_as_array[3];
	var hex3 = get_code_as_array[4];
	var hex4 = get_code_as_array[5];
	var hex5 = get_code_as_array[6];
	var hex6 = get_code_as_array[7];
	var hex7 = get_code_as_array[8];
	var hex8 = get_code_as_array[9];
	var hex9 = get_code_as_array[10];
	var hexa = get_code_as_array[11];
	var hexb = get_code_as_array[12];
	var hexc = get_code_as_array[13];
	var hexd = get_code_as_array[14];
	var hexe = get_code_as_array[15];
	var hexf = get_code_as_array[16];

copy_this_combined_button.addEventListener("click", function (event) {
		alert('Encoded message is on your clipboard now, paste it to target.');
		event.preventDefault();
		target_output_textbox.select();
		document.execCommand("copy");
});

// This small section sets target as an invisible text area as the target.
	const good_array = [delimiter,hex0,hex1,hex2,hex3,hex4,hex5,hex6,hex7,hex8,hex9,hexa,hexb,hexc,hexd,hexe,hexf];
	var fullycursed = good_array.join('');

	invisible_invis_chars_box.value = fullycursed;

copy_all_invis_button.addEventListener("click", function (event) {
		alert('The full invisible string is on your clipboard.');
		event.preventDefault();
		invisible_invis_chars_box.select();
		document.execCommand("copy");
});

comb_button.addEventListener('click', function () {

		var p1 = document.getElementsByClassName('this_with')[0].value;
		var p2 = document.getElementsByClassName('and_this')[0].value;

		// gets original text
		var vally = document.getElementsByClassName('and_this')[0].value;
		// next line sets target
		var original_as_hex = document.getElementsByClassName('into_this')[0];
		var buildah = "";
		var allashexwithspace = "";

		for (var i = 0; i < vally.length; i++) {
			var checking = ascii_to_hexa(vally.charAt(i));
			if (checking.length === 2){
				buildah = buildah + checking;
			}
			allashexwithspace = allashexwithspace + checking + 'x';
}

		var newval = allashexwithspace;
		var newnewval = '';

		for (var n = 0; n < newval.length; n++){

			switch(newval[n]) {
				case 'x':
					newnewval += delimiter;
					break;
				case '0':
					newnewval += hex0;
					break;
				case '1':
					newnewval += hex1;
					break;
				case '2':
					newnewval += hex2;
					break;
				case '3':
					newnewval += hex3;
					break;
				case '4':
					newnewval += hex4;
					break;
				case '5':
					newnewval += hex5;
					break;
				case '6':
					newnewval += hex6;
					break;
				case '7':
					newnewval += hex7;
					break;
				case '8':
					newnewval += hex8;
					break;
				case '9':
					newnewval += hex9;
					break;
				case 'a':
					newnewval += hexa;
					break;
				case 'b':
					newnewval += hexb;
					break;
				case 'c':
					newnewval += hexc;
					break;
				case 'd':
					newnewval += hexd;
					break;
				case 'e':
					newnewval += hexe;
					break;
				case 'f':
					newnewval += hexf;
					break;
			}
		}

		var pt = document.getElementsByClassName('into_this')[0];
		pt.value = p1 + newnewval + '.';

	});






dec.addEventListener('click', function () {
		var output_key_box_value  =  document.getElementsByClassName('pass_code_o')[0].value;
		//alert(output_key_box_value);
		var vall = document.getElementsByClassName('dec_src')[0].value;

		var get_code_as_array = output_key_box_value.split("");


		// Sets the hex values in order of the code
		for (var it = 0; it < get_code_as_array.length; it++){

			switch (get_code_as_array[it]) {
				case 'x':
					get_code_as_array[it] = delimiter_ori;
					break;
				case '0':
					get_code_as_array[it] = hex0_ori;
					break;
				case '1':
					get_code_as_array[it] = hex1_ori;
					break;
				case '2':
					get_code_as_array[it] = hex2_ori;
					break;
				case '3':
					get_code_as_array[it] = hex3_ori;
					break;
				case '4':
					get_code_as_array[it] = hex4_ori;
					break;
				case '5':
					get_code_as_array[it] = hex5_ori;
					break;
				case '6':
					get_code_as_array[it] = hex6_ori;
					break;
				case '7':
					get_code_as_array[it] = hex7_ori;
					break;
				case '8':
					get_code_as_array[it] = hex8_ori;
					break;
				case '9':
					get_code_as_array[it] = hex9_ori;
					break;
				case 'a':
					get_code_as_array[it] = hexa_ori;
					break;
				case 'b':
					get_code_as_array[it] = hexb_ori;
					break;
				case 'c':
					get_code_as_array[it] = hexc_ori;
					break;
				case 'd':
					get_code_as_array[it] = hexd_ori;
					break;
				case 'e':
					get_code_as_array[it] = hexe_ori;
					break;
				case 'f':
					get_code_as_array[it] = hexf_ori;
			}

		}

		//sets actual hex values
		var delimiter = get_code_as_array[0];
		var hex0 = get_code_as_array[1];
		var hex1 = get_code_as_array[2];
		var hex2 = get_code_as_array[3];
		var hex3 = get_code_as_array[4];
		var hex4 = get_code_as_array[5];
		var hex5 = get_code_as_array[6];
		var hex6 = get_code_as_array[7];
		var hex7 = get_code_as_array[8];
		var hex8 = get_code_as_array[9];
		var hex9 = get_code_as_array[10];
		var hexa = get_code_as_array[11];
		var hexb = get_code_as_array[12];
		var hexc = get_code_as_array[13];
		var hexd = get_code_as_array[14];
		var hexe = get_code_as_array[15];
		var hexf = get_code_as_array[16];

		var magic_array = [];
		var character_string = '';
//Strips things that are not spaces character by character instead of regex
		for (var i = 0; i < vall.length; i++) {
			switch (vall[i]) {
				case delimiter:
					magic_array.push(vall[i]);
					break;
				case hex0:
					magic_array.push(vall[i]);
					break;
				case hex1:
					magic_array.push(vall[i]);
					break;
				case hex2:
					magic_array.push(vall[i]);
					break;
				case hex3:
					magic_array.push(vall[i]);
					break;
				case hex4:
					magic_array.push(vall[i]);
					break;
				case hex5:
					magic_array.push(vall[i]);
					break;
				case hex6:
					magic_array.push(vall[i]);
					break;
				case hex7:
					magic_array.push(vall[i]);
					break;
				case hex8:
					magic_array.push(vall[i]);
					break;
				case hex9:
					magic_array.push(vall[i]);
					break;
				case hexa:
					magic_array.push(vall[i]);
					break;
				case hexb:
					magic_array.push(vall[i]);
					break;
				case hexc:
					magic_array.push(vall[i]);
					break;
				case hexd:
					magic_array.push(vall[i]);
					break;
				case hexe:
					magic_array.push(vall[i]);
					break;
				case hexf:
					magic_array.push(vall[i]);
					break;
			}
}

// Converts detected spaces into actual hex characters.
		for (var j = 0; j < magic_array.length; j++){
			switch(magic_array[j]) {
				case delimiter:
					character_string += 'x';
					break;
				case hex0:
					character_string += '0';
					break;
				case hex1:
					character_string += '1';
					break;
				case hex2:
					character_string += '2';
					break;
				case hex3:
					character_string += '3';
					break;
				case hex4:
					character_string += '4';
					break;
				case hex5:
					character_string += '5';
					break;
				case hex6:
					character_string += '6';
					break;
				case hex7:
					character_string += '7';
					break;
				case hex8:
					character_string += '8';
					break;
				case hex9:
					character_string += '9';
					break;
				case hexa:
					character_string += 'a';
					break;
				case hexb:
					character_string += 'b';
					break;
				case hexc:
					character_string += 'c';
					break;
				case hexd:
					character_string += 'd';
					break;
				case hexe:
					character_string += 'e';
					break;
				case hexf:
					character_string += 'f';
					break;
				default:
					console.log('something went wrong.');
					break;
			}
		}
// Splits the strings around the x delimiter into an array.
		var as_hex_array_converted = character_string.split("x");
		var final_array = [];
// Checks length of each array value to make sure its not empty.
		for (var x = 0; x < as_hex_array_converted.length; x++) {

			if (as_hex_array_converted[x].length == 0) {
				console.log('Zero detected. Skipped.')
			}
			else {
				final_array.push(hexa_to_ascii(as_hex_array_converted[x]));
			}
		}
// Writes output.
		var decode_target = document.getElementsByClassName('decoded_result')[0];
		decode_target.value = final_array.join('');
	});













		// end of decode


















	generate_code.addEventListener("click", function (event) {

		var stringah = '';
		var alloptionsarray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','x'];

		shuffle_array(alloptionsarray);

		for (var i = 0; i < alloptionsarray.length; i++){
			stringah = stringah + alloptionsarray[i];

		}

		var noargs = window.location.href.split('?')[0]

		window.location.replace(noargs + '?key=' + stringah);

	});



	save_get.addEventListener("click", function (event) {
		var code_input  =  document.getElementsByClassName('pass_code_i')[0].value;


		if (code_input) {

		var noargs = window.location.href.split('?')[0]

		window.location.replace(noargs + '?key=' + code_input);


	} else {
		alert('Need to generate a code');
	}

	});

	save_get_2.addEventListener("click", function (event) {
		var code_output  =  document.getElementsByClassName('pass_code_o')[0].value;

		if (code_output) {
			var noargs = window.location.href.split('?')[0]

			window.location.replace(noargs + '?key=' + code_output);

		} else {
			alert('Need to generate a code');
		}
	});
	// End doc ready
});

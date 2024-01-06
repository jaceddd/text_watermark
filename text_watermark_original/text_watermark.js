function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {
// Sets original placement of the invisible characters to these variables.
	const delimiter = '\u2060';   // U+2060 WORD JOINER
	const hex0 = '\u206C';    // U+206C INHIBIT ARABIC FORM SHAPING   GOOD
	const hex1 = '\u00AD';    // U+00AD SOFT HYPHEN                   GOOD
	const hex2 = '\u200E';    // U+200E LEFT TO RIGHT MARK            GOOD
	const hex3 = '\u2068';    // U+2068 FIRST STRONG ISOLATE NEW      GOOD
	const hex4 = '\u202c';    // U+202c DIRECTIONAL FORMATTING        GOOD
	const hex5 = '\u2069';    // U+2069 POP DIRECTIONAL ISOLATE       GOOD
	const hex6 = '\u206a';    // U+206A INHIBIT SYMMETRIC SWAPPING    GOOD
	const hex7 = '\u200B';    // U+200B ZERO WIDTH SPACE              GOOD
	const hex8 = '\u200C';    // U+200C ZERO WIDTH NON-JOINER         GOOD
	const hex9 = '\u200D';    // U+200D ZERO WIDTH JOINER             GOOD
	const hexb = '\u206D';    // U+206D ACTIVATE ARABIC FORM SHAPING  GOOD
	const hexa = '\u206F';    // U+206F NOMINAL DIGIT SHAPES          GOOD
	const hexc = '\u2062';    // U+2062 INVISIBLE TIMES               GOOD
	const hexd = '\u2063';    // U+2063 INVISIBLE SEPARATOR           GOOD
	const hexe = '\u2064';    // U+2064 INVISIBLE PLUS                GOOD
	const hexf = '\u206E';    // U+206E NATIONAL DIGIT SHAPES         GOOD
// Sets up a hidden text box with all the characters in it.
	const good_array = [delimiter,hex0,hex1,hex2,hex3,hex4,hex5,hex6,hex7,hex8,hex9,hexa,hexb,hexc,hexd,hexe,hexf];
	const invisible_invis_chars_box = document.getElementsByClassName('hidden_invisible_chars')[0];
	const joined_invis_chars = good_array.join('');
	invisible_invis_chars_box.value = joined_invis_chars;
// Button to copy it to clipboard.
	const copy_all_invis_button = document.getElementsByClassName('copy_all_invis_chars_button')[0];
// Gets all the other elements.
	const visible_and_invisible =  document.getElementsByClassName('combined_text')[0];
	const copy_combined_button = document.getElementsByClassName('copy_this_button')[0];
	const comb_button = document.getElementsByClassName('combiner_button')[0];
	const dec = document.getElementsByClassName('decod')[0];

// sets up functions
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

	copy_combined_button.addEventListener("click", function (event) {
		alert('Encoded message is on your clipboard now, paste it to target.');
		event.preventDefault();
		visible_and_invisible.select();
		document.execCommand("copy");
	});

	copy_all_invis_button.addEventListener("click", function (event) {
        alert('The full invisible string is on your clipboard.');
		invisible_invis_chars_box.select();
        document.execCommand("copy");
    });

// Encode button.
comb_button.addEventListener('click', function () {
        var p1 = document.getElementsByClassName('visible_text')[0].value;
	    var p2 = document.getElementsByClassName('invisible_text')[0].value;
        if (p1 === ''){
            alert('Please enter your original visible message.');
            return
        }
	    if (p2 === ''){
		    alert('Please enter your original invisible message.');
		    return
	    }
// gets original texts value
        var vally = document.getElementsByClassName('invisible_text')[0].value;
// Target box.
	    var grab_combined = document.getElementsByClassName('combined_text')[0];
// Decode button.
	    var dec = document.getElementsByClassName('decod')[0];
        var all_as_hex_with_x_spacer = "";

        for (i = 0; i < vally.length; i++) {
            var checking = ascii_to_hexa(vally.charAt(i));
	        all_as_hex_with_x_spacer = all_as_hex_with_x_spacer + checking + 'x';
        }

        var invisible_string = '';
// Makes the invisible string
        for (i = 0; i < all_as_hex_with_x_spacer.length; i++){
	        switch(all_as_hex_with_x_spacer[i]) {
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
// Writes the message and the invisible string into the box ready to be sent.
	    grab_combined.value = p1 + invisible_string + '.';
});

// Decode button.
dec.addEventListener('click', function () {
        var vall = document.getElementsByClassName('dec_src')[0].value;
        var magic_array = [];
	    var character_string = '';
//Strips things that are not spaces character by character instead of regex
	    for (i = 0; i < vall.length; i++) {
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
// Converts detected spaces into actual hex characters
	    for (i = 0; i < magic_array.length; i++){
		    switch(magic_array[i]) {
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
// Splits the strings around the delimiter into an array.
	    var as_hex_array_converted = character_string.split("x");
        var final_array = [];
// Checks length of each array value to make sure its not empty.
	    for (i = 0; i < as_hex_array_converted.length; i++) {

		    if (as_hex_array_converted[i].length == 0) {
			    console.log('Zero detected. Skipped.')
		    }
		    else {
			    final_array.push(hexa_to_ascii(as_hex_array_converted[i]));
		    }
	    }
// Writes output.
	    var decode_target = document.getElementsByClassName('decoded_result')[0];
	    decode_target.value = final_array.join('');
});
// End doc ready
});

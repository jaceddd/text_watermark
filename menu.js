function document_ready(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 20);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

document_ready(function() {

	var tw_original = document.getElementsByClassName('tw_original')[0];
	var tw_get = document.getElementsByClassName('tw_get')[0];
	var tw_cookie = document.getElementsByClassName('tw_cookie')[0];
	var add_clip = document.getElementsByClassName('add_clip')[0];
	var spammer = document.getElementsByClassName('spammer')[0];
	var viewer = document.getElementsByClassName('viewer')[0];
	var stealth = document.getElementsByClassName('stealth')[0];
	var head_tag = document.getElementsByClassName('head_tag')[0];

	tw_original.addEventListener("click", function (event) {
		window.location.assign("text_watermark_original/index.html");
	});

	tw_get.addEventListener("click", function (event) {
		window.location.assign("itext_url_version/index.html");
	});

	tw_cookie.addEventListener("click", function (event) {
		window.location.assign("itext_cookie_version/index.html");
	});

	add_clip.addEventListener("click", function (event) {
		window.location.assign("add_to_clipboard/index.html");
	});

	spammer.addEventListener("click", function (event) {
		window.location.assign("zero_width_inserter/index.html");
	});

	viewer.addEventListener("click", function (event) {
		window.location.assign("view_and_remove/index.html");
	});

	stealth.addEventListener("click", function (event) {
		window.location.assign("copy_and_paste_adder/index.html");
	});

	head_tag.addEventListener("click", function (event) {
		loc = window.location.href;
		window.location.assign("meta_tag_tool/index.html");
	});
});
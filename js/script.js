


$(document).ready(function () {
	document.getElementById("epik").addEventListener("click", alive);
	document.getElementById("moyseia").addEventListener("click", alive);
	document.getElementById("sylog").addEventListener("click", alive);
	document.getElementById("lesvos").addEventListener("click", alive);

	document.getElementById("moyseia").addEventListener("click", filleruto);
	document.getElementById("lesvos").addEventListener("click", filleruto2);
	document.getElementById("sylog").addEventListener("click", filleruto3);
	document.getElementById("epik").addEventListener("click", filleruto4);

	document.getElementById("dot2").addEventListener("click", hide2);
	document.getElementById("dot2").addEventListener("mouseover", over2);
	document.getElementById("dot2").addEventListener("mouseout", out2);

	document.getElementById("dot").addEventListener("click", hide);
	document.getElementById("dot").addEventListener("mouseover", over);
	document.getElementById("dot").addEventListener("mouseout", out);

	document.getElementById("dot3").addEventListener("click", hide3);
	document.getElementById("dot3").addEventListener("mouseover", over3);
	document.getElementById("dot3").addEventListener("mouseout", out3);

	function alive() {
		$("#epik").animate({ 'top': '-=176px', 'left': '+=20px', 'height': '-=32px', 'width': '-=32px' }, 'medium');
		$("#moyseia").animate({ 'top': '-=178px', 'right': '+=15px', 'height': '-=27px', 'width': '-=27px' }, 'medium');
		$("#sylog").animate({ 'top': '-=178px', 'left': '+=10px', 'height': '-=25px', 'width': '-=27px' }, 'medium');
		$("#lesvos").animate({ 'top': '-=178px', 'right': '+=1px', 'height': '-=27px', 'width': '-=27px' }, 'medium');

		$("#text").animate({ 'font-size': '21px', 'top': '-=175px', 'right': '+=0px' }, 'medium');

		setTimeout(function () {
			$("#icos").css("background-color", "#212121");
		}, 350);

		document.getElementById("epik").removeEventListener("click", alive);
		document.getElementById("moyseia").removeEventListener("click", alive);
		document.getElementById("sylog").removeEventListener("click", alive);
		document.getElementById("lesvos").removeEventListener("click", alive);

	};


	function filleruto() {
		baka();
	}

	function baka() {
		$("body").css('background-color', '#8E8D8A');
		change();
	}

	function change() {

		$("html").css('overflow-y', 'visible');

		$("#fb").css('visibility', 'hidden');
		$("#twee").css('visibility', 'hidden');

		$("#moyseia").css('box-shadow', '0 0 5px 2px #646464');
		$("#epik").css('box-shadow', '0 0 0px 0px #646464');
		$("#sylog").css('box-shadow', '0 0 0px 0px #646464');
		$("#lesvos").css('box-shadow', '0 0 0px 0px #646464');

		document.getElementById("epik").addEventListener("click", baka4);
		document.getElementById("moyseia").removeEventListener("click", baka);
		document.getElementById("lesvos").addEventListener("click", baka2);
		document.getElementById("sylog").addEventListener("click", baka3);

		$("#dots").css('visibility', 'visible').hide().fadeIn(800);
		$("#dot_act").css('visibility', 'visible');
		$("#context_teriade").css('visibility', 'visible').hide().fadeIn(800);

		$('#head_teriade').css('visibility', 'visible').hide().fadeIn(800);
		$("#dot2").css('visibility', 'visible').hide().fadeIn(800);
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'visible').hide().fadeIn(800);
		$("#dot3_act").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'visible').hide().fadeIn(800);
		$('#text_teriade').css('visibility', 'visible').hide().fadeIn(800);
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'hidden');
		$('#right').css('visibility', 'visible').hide().fadeIn(800);
		$('#left').css('visibility', 'visible').hide().fadeIn(800);

		$('#context_lesvos').css('visibility', 'hidden');
		$('#context_diktyo').css('visibility', 'hidden');
		$('#context_epik').css('visibility', 'hidden');

	}



	function filleruto2() {

		baka2();
	}

	function baka2() {
		$("body").css('background-color', '#5E6657');
		change2();
	}

	function change2() {

		$("html").css('overflow-y', 'visible');

		$("#moyseia").css('box-shadow', '0 0 0px 0px #646464');
		$("#epik").css('box-shadow', '0 0 0px 0px #646464');
		$("#sylog").css('box-shadow', '0 0 0px 0px #646464');
		$("#lesvos").css('box-shadow', '0 0 5px 2px #646464');

		$("#fb").css('visibility', 'hidden');
		$("#twee").css('visibility', 'hidden');

		$("#dot").css('visibility', 'hidden');
		$("#dot_act").css('visibility', 'hidden');
		$("#dot2").css('visibility', 'hidden');
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'hidden');
		$("#dot3_act").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'hidden');
		$('#text_teriade').css('visibility', 'hidden');
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#head_teriade').css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'hidden');
		$('#right').css('visibility', 'hidden');
		$('#left').css('visibility', 'hidden');

		$('#context_lesvos').css('visibility', 'visible').hide().fadeIn(800);
		$('#context_diktyo').css('visibility', 'hidden');
		$('#context_epik').css('visibility', 'hidden');

		document.getElementById("epik").addEventListener("click", baka4);
		document.getElementById("moyseia").addEventListener("click", baka);
		document.getElementById("lesvos").removeEventListener("click", baka2);
		document.getElementById("sylog").addEventListener("click", baka3);
	}





	function filleruto3() {
		baka3();
	}

	function baka3() {
		$("body").css('background-color', '#89724E');
		change3();
	}

	function change3() {

		$("html").css('overflow-y', 'visible');

		$("#moyseia").css('box-shadow', '0 0 0px 0px #646464');
		$("#epik").css('box-shadow', '0 0 0px 0px #646464');
		$("#sylog").css('box-shadow', '0 0 5px 1px #646464');
		$("#lesvos").css('box-shadow', '0 0 0px 0px #646464');

		$("#dots").css('visibility', 'hidden');
		$("#dot").css('visibility', 'hidden');
		$("#dot_act").css('visibility', 'hidden');
		$("#context_teriade").css('visibility', 'hidden');

		$("#fb").css('visibility', 'hidden');
		$("#twee").css('visibility', 'hidden');

		$('#head_teriade').css('visibility', 'hidden');
		$("#dot2").css('visibility', 'hidden');
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'hidden');
		$("#dot3_act").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'hidden');
		$('#text_teriade').css('visibility', 'hidden');
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'hidden');
		$('#right').css('visibility', 'hidden');
		$('#left').css('visibility', 'hidden');

		$('#context_lesvos').css('visibility', 'hidden');
		$('#context_epik').css('visibility', 'hidden');
		$('#context_diktyo').css('visibility', 'visible').hide().fadeIn(800);

		document.getElementById("epik").addEventListener("click", baka4);
		document.getElementById("moyseia").addEventListener("click", baka);
		document.getElementById("lesvos").addEventListener("click", baka2);
		document.getElementById("sylog").removeEventListener("click", baka3);
	}






	function filleruto4() {
		baka4();
	}

	function baka4() {
		$("body").css('background-color', '#685F34');
		change4();
	}

	function change4() {
		$("html").css('overflow-y', 'visible');

		$("#moyseia").css('box-shadow', '0 0 0px 0px #646464');
		$("#epik").css('box-shadow', '0 0 5px 2px #646464');
		$("#sylog").css('box-shadow', '0 0 0px 0px #646464');
		$("#lesvos").css('box-shadow', '0 0 0px 0px #646464');



		$("#fb").css('visibility', 'visible').hide().fadeIn(800);
		$("#twee").css('visibility', 'visible').hide().fadeIn(800);



		$("#dots").css('visibility', 'hidden');
		$("#dot").css('visibility', 'hidden');
		$("#dot_act").css('visibility', 'hidden');
		$("#context_teriade").css('visibility', 'hidden');

		$('#head_teriade').css('visibility', 'hidden');
		$("#dot2").css('visibility', 'hidden');
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'hidden');
		$("#dot3_act").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'hidden');
		$('#text_teriade').css('visibility', 'hidden');
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'hidden');
		$('#right').css('visibility', 'hidden');
		$('#left').css('visibility', 'hidden');

		$('#context_lesvos').css('visibility', 'hidden');
		$('#context_epik').css('visibility', 'visible').hide().fadeIn(800);
		$('#context_diktyo').css('visibility', 'hidden');;











		document.getElementById("epik").removeEventListener("click", baka4);
		document.getElementById("moyseia").addEventListener("click", baka);
		document.getElementById("lesvos").addEventListener("click", baka2);
		document.getElementById("sylog").addEventListener("click", baka3);
	}

	function hide2() {
		$("#dot").css('visibility', 'visible');
		$("#dot_act").css('visibility', 'hidden');
		$("#dot2").css('visibility', 'hidden');
		$("#dot2_act").css('visibility', 'visible');
		$("#dot3").css('visibility', 'visible');
		$("#dot3_act").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'hidden');
		$('#text_teriade').css('visibility', 'visible').hide().fadeIn(500);
		$('#head_teriade').css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'visible').hide().fadeIn(500);
		$('#head_teriade').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'visible').hide().fadeIn(500);
		$('#byznes').css('visibility', 'hidden');
	}


	function over2() {
		$("#onom_oli").css('visibility', 'visible');
	}


	function out2() {
		$("#onom_oli").css('visibility', 'hidden');
	}



	function hide() {
		$("#dot").css('visibility', 'hidden');
		$("#dot_act").css('visibility', 'visible');
		$("#dot2").css('visibility', 'visible');
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'visible');
		$("#dot3_act").css('visibility', 'hidden');
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_byz").css('visibility', 'hidden');
		$('#teriade').css('visibility', 'visible').hide().fadeIn(500);
		$('#text_teriade').css('visibility', 'visible').hide().fadeIn(500);
		$('#head_teriade').css('visibility', 'visible').hide().fadeIn(500);
		$('#head_byz').css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'hidden');
	}


	function over() {
		$("#onom_teriade").css('visibility', 'visible');
	}


	function out() {
		$("#onom_teriade").css('visibility', 'hidden');
	}



	function hide3() {
		$("#dot").css('visibility', 'visible');
		$("#dot_act").css('visibility', 'hidden');
		$("#dot2").css('visibility', 'visible');
		$("#dot2_act").css('visibility', 'hidden');
		$("#dot3").css('visibility', 'hidden');
		$("#dot3_act").css('visibility', 'visible');
		$('#teriade').css('visibility', 'hidden');
		$('#text_teriade').css('visibility', 'visible').hide().fadeIn(500);
		$("#onom_oli").css('visibility', 'hidden');
		$("#onom_teriade").css('visibility', 'hidden');
		$('#head_teriade').css('visibility', 'hidden');
		$('#head_oli').css('visibility', 'hidden');
		$('#head_byz').css('visibility', 'visible').hide().fadeIn(500);
		$('#eliaz').css('visibility', 'hidden');
		$('#byznes').css('visibility', 'visible').hide().fadeIn(500);
	}


	function over3() {
		$("#onom_byz").css('visibility', 'visible');
	}


	function out3() {
		$("#onom_byz").css('visibility', 'hidden');
	}

});
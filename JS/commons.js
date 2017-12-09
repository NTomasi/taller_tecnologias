function resize (){
	var valor_input = $('#text_resize').val();
	if(!isNaN(valor_input)){
		document.body.style.fontSize = valor_input+"px";
	}
}

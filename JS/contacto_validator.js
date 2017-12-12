function validate_form(){
	var nombre_usuario = $('#nombre_usuario').val();
	var email = $('#email').val();
	var consulta = $('#consulta').val();
	var error_msg = "";

	if(nombre_usuario === ''){
		error_msg += "*Debe ingresar el nombre de usuario \n";
	}

	if(email === ''){
		error_msg += "*Debe ingresar el email \n";
	}

	if(consulta === ''){
		error_msg += "*Debe ingresar la consulta \n";
	}

	if(error_msg !== ''){
		alert("ERROR: \n"+ error_msg);
	} else {
		alert("Formulario enviado correctamente");
	}

};

function setAge(){
	var birth = $('#fecha_nacimiento').val();
	//Seteo la fecha en un formato válido
	var new_date = moment(birth);
	var fecha_actual = moment();
	var edad_actual = fecha_actual.diff(new_date,"years");
	$('#age').html(edad_actual + " años");
}
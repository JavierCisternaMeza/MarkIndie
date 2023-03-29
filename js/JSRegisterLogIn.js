// Función para enviar el formulario de registro
$("#register-form").submit(function(event) {
	event.preventDefault();
	var username = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();

	// Validación de campos
	if (username == "") {
		alert("Por favor ingrese su nombre de usuario.");
		return;
	}
	if (email == "") {
		alert("Por favor ingrese su correo electrónico.");
		return;
	}
	if (password == "") {
		alert("Por favor ingrese su contraseña.");
		return;
	}

	// Envío del formulario
	$.ajax({
		url: "register.php",
		type: "POST",
		data: {
			username: username,
			email: email,
			password: password
		},
		success: function(response) {
			alert(response);
			$("#register-form")[0].reset();
		},
		error: function(xhr, status, error) {
			alert("Ha ocurrido un error al procesar su solicitud.");
			console.log(xhr);
			console.log(status);
			console.log(error);
		}
	});
});

// Función para enviar el formulario de inicio de sesión
$("#login-form").submit(function(event) {
	event.preventDefault();
	var email = $("#email").val();
	var password = $("#password").val();

	// Validación de campos
	if (email == "") {
		alert("Por favor ingrese su correo electrónico.");
		return;
	}
	if (password == "") {
		alert("Por favor ingrese su contraseña.");
		return;
	}

	// Envío del formulario
	$.ajax({
		url: "login.php",
		type: "POST",
		data: {
			email: email,
			password: password
		},
		success: function(response) {
			alert(response);
			$("#login-form")[0].reset();
		},
		error: function(xhr, status, error) {
			alert("Ha ocurrido un error al procesar su solicitud.");
			console.log(xhr);
			console.log(status);
			console.log(error);
		}
	});
});

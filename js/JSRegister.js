$(document).ready(function() {
	// Accedemos al formulario de registro y agregamos un evento submit
	$("form").submit(function(event) {
	  // Prevenimos que el formulario se envíe por defecto
	  event.preventDefault();
	  
	  // Accedemos a los valores ingresados por el usuario
	  var nombre = $("#nombre").val();
	  var correo = $("#correo").val();
	  var contraseña = $("#contraseña").val();
	  var confContraseña = $("#conf-contraseña").val();
	  
	  // Verificamos que el nombre no esté vacío
	  if (nombre.trim() == "") {
		alert("Por favor ingresa tu nombre completo.");
		return false;
	  }
	  
	  // Verificamos que el correo sea válido
	  if (!validarCorreo(correo)) {
		alert("Por favor ingresa un correo electrónico válido.");
		return false;
	  }
	  
	  // Verificamos que la contraseña tenga al menos 6 caracteres
	  if (contraseña.length < 6) {
		alert("Por favor ingresa una contraseña con al menos 6 caracteres.");
		return false;
	  }
	  
	  // Verificamos que la confirmación de contraseña sea igual a la contraseña
	  if (contraseña != confContraseña) {
		alert("Las contraseñas no coinciden, por favor ingrésalas de nuevo.");
		return false;
	  }
	  
	  // Si todas las validaciones pasaron, enviamos el formulario
	  alert("Registro exitoso!");
	  $("form")[0].reset();
	  return true;
	});
  });
  
  // Función para validar el correo electrónico
  function validarCorreo(correo) {
	var expresionRegular = /\S+@\S+\.\S+/;
	return expresionRegular.test(correo);
  }
  
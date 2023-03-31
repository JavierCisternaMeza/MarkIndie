$(document).ready(function() {
    // Accedemos al formulario de inicio de sesión y agregamos un evento submit
    $("form").submit(function(event) {
      // Prevenimos que el formulario se envíe por defecto
      event.preventDefault();
      
      // Accedemos a los valores ingresados por el usuario
      var correo = $("#correo").val();
      var contraseña = $("#contraseña").val();
      
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
      
      // Si todas las validaciones pasaron, enviamos el formulario
      alert("Inicio de sesión exitoso!");
      $("form")[0].reset();
      return true;
    });
  });
  
  // Función para validar el correo electrónico
  function validarCorreo(correo) {
    var expresionRegular = /\S+@\S+\.\S+/;
    return expresionRegular.test(correo);
  }
  
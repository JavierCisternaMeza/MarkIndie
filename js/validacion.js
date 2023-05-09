$(document).ready(function() {
  $('#myForm').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: 'required'
    },
    messages: {
      email: {
        required: 'Por favor ingrese su correo electrónico.',
        email: 'Por favor ingrese una dirección de correo electrónico válida.'
      },
      password: 'Por favor ingrese su contraseña.'
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
});

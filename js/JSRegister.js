$(document).ready(function() {
	$('#myForm').validate({
	  rules: {
		name: 'required',
		email: {
		  required: true,
		  email: true
		},
		confirmEmail: {
		  required: true,
		  email: true,
		  equalTo: '#email'
		},
		password: 'required',
		confirmPassword: {
		  required: true,
		  equalTo: '#password'
		}
	  },
	  messages: {
		name: 'Por favor ingrese su nombre.',
		email: {
		  required: 'Por favor ingrese su correo electrónico.',
		  email: 'Por favor ingrese una dirección de correo electrónico válida.'
		},
		confirmEmail: {
		  required: 'Por favor confirme su correo electrónico.',
		  email: 'Por favor ingrese una dirección de correo electrónico válida.',
		  equalTo: 'Los correos electrónicos no coinciden.'
		},
		password: 'Por favor ingrese su contraseña.',
		confirmPassword: {
		  required: 'Por favor confirme su contraseña.',
		  equalTo: 'Las contraseñas no coinciden.'
		}
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
  
$(document).ready(function() {
    // Obtener el campo is_developer
    const isDeveloperField = $("#id_is_developer");
    // Obtener los campos full_name y phone_number
    const fullNameField = $("#id_full_name").parent();
    const phoneNumberField = $("#id_phone_number").parent();
  
    // Función para mostrar/ocultar los campos full_name y phone_number
    function toggleDeveloperFields() {
      if (isDeveloperField.prop("checked")) {
        fullNameField.show();
        phoneNumberField.show();
      } else {
        fullNameField.hide();
        phoneNumberField.hide();
      }
    }
  
    // Llamar a la función al cargar la página y cuando cambie el valor de is_developer
    toggleDeveloperFields();
    isDeveloperField.on("change", toggleDeveloperFields);
  });
  
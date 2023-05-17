
  var correoInput = document.getElementById('correo');
  var fechaInput = document.getElementById('fechaNacimiento');
  var telefonoInput = document.getElementById('telefono');
  var botonEnviar = document.getElementById('enviarBtn');
  var formularioEnviado = false;

  function validarCampos() {
    if (correoInput.checkValidity() && fechaInput.checkValidity() && telefonoInput.checkValidity()) {
      botonEnviar.disabled = false;
      botonEnviar.classList.remove('disabled');
      botonEnviar.classList.remove('disabled-alt');
    } else {
      botonEnviar.disabled = true;
      botonEnviar.classList.add('disabled');
      botonEnviar.classList.add('disabled-alt');
    }
  }

  correoInput.addEventListener('input', validarCampos);
  fechaInput.addEventListener('input', validarCampos);
  telefonoInput.addEventListener('input', validarCampos);

  function mostrarAlerta(mensaje) {
    alert(mensaje);
  }

  telefonoInput.addEventListener('input', function() {
    telefonoInput.value = telefonoInput.value.replace(/\D/g, '');
  });

  function enviarFormulario() {
    if (!formularioEnviado && correoInput.checkValidity() && fechaInput.checkValidity() && telefonoInput.checkValidity()) {
      var boton = document.getElementById("enviarBtn");
      boton.innerHTML = "Enviando datos...";
      boton.disabled = true;
      formularioEnviado = true;

      // Simulación de envío de datos
      setTimeout(function() {
        boton.disabled = false;
        boton.innerHTML = "Enviar";
        formularioEnviado = false;
        resetForm();
      }, 2000); // Cambiar el valor a tu preferencia, en milisegundos

      var form = document.getElementById("myForm");
      form.reset();
    }

    return false; // Evitar el envío real del formulario
  }

  var entregaPropietarioCheckbox = document.getElementById('entrega_propietario');
  var entregaTerceroCheckbox = document.getElementById('entrega_tercero');

  entregaPropietarioCheckbox.addEventListener('change', function() {
    entregaTerceroCheckbox.checked = false;
    toggleEnviarButton();
  });

  entregaTerceroCheckbox.addEventListener('change', function() {
    entregaPropietarioCheckbox.checked = false;
    toggleEnviarButton();

    if (entregaTerceroCheckbox.checked) {
      window.open('FormRegistro_2.html', '_self');
    }
  });

  function toggleEnviarButton() {
    var entregaPropietarioCheckbox = document.getElementById('entrega_propietario');
    var enviarButton = document.getElementById('enviar');

    enviarButton.disabled = !entregaPropietarioCheckbox.checked;
  }
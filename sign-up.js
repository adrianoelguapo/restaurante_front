$(document).ready(function() {
    $('#signup-form').submit(function(e) {
      e.preventDefault();

      $('#error-message').hide().text('');

      var username = $('#signup-username').val().trim();
      var password = $('#signup-password').val().trim();

      if (!username || !password) {
        $('#error-message').text('Todos los campos son obligatorios.').show();
        return;
      }

      $.ajax({
        url: 'http://localhost:5000/api/signup',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
          "signup-username": username,
          "signup-password": password
        }),
        success: function(response) {
          window.location.href = "http://localhost/restaurante_front/index.html";
        },
        error: function(xhr) {
          var response = xhr.responseJSON;
          var errorMsg = (response && response.error) ? response.error : "Error en la conexión con el servidor.";
          $('#error-message').text(errorMsg).show();
        }
      });

    });
    
  });
  
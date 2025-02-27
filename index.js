$(document).ready(function() {
    $('#login-form').submit(function(e) {
      e.preventDefault();
  
      $('#error-message').hide().text('');
  
      let username = $('#login-username').val();
      let password = $('#login-password').val();

      $.ajax({
        url: 'http://localhost:5000/api/login',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
          "login-username": username,
          "login-password": password
        }),
        success: function(response) {
          window.location.href = response.redirectUrl;
          sessionStorage.setItem("username", username);
        },
        error: function(xhr) {
          let response = xhr.responseJSON;
          let errorMsg = (response && response.error) ? response.error : "Error en la conexión con el servidor.";
          $('#error-message').text(errorMsg).show();
        }
      });

    });

  });
  
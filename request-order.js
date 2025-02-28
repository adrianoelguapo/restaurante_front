$(document).ready(function() {
    let total = 0;
    let orderPlates = [];
    
    $.ajax({
      url: 'https://restaurante-back-pi.vercel.app/api/carta',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        let foodMenu = $('.food-menu');
        foodMenu.empty();
    
        data.forEach(function(dish) {
          let dishHtml = `
            <div class = "food-card">

              <h3>${dish.nombre_plato}</h3>
              <p>Price: $${dish.precio}</p>
              <button class = "food-card-button" data-price = "${dish.precio}" data-name = "${dish.nombre_plato}">Add to Order</button>
              
            </div>
          `;
          foodMenu.append(dishHtml);
        });
    
        $('.food-card-button').click(function() {
          let dishName = $(this).data('name');
          let dishPrice = parseFloat($(this).data('price'));
    
          $('#cart-items').append(`<div class = "cart-item">${dishName} - $${dishPrice.toFixed(2)}</div>`);
          orderPlates.push(dishName);
    
          total += dishPrice;
          $('#total-price').text(total.toFixed(2));
        });
      },
      error: function(xhr, status, error) {
        console.error("Error al cargar la carta:", error);
        $('.food-menu').html("<p>Error al cargar la carta. Por favor, inténtalo más tarde.</p>");
      }
    });

    $('.clear-cart').click(function() {
      $('#cart-items').empty();
      orderPlates = [];
      total = 0;
      $('#total-price').text(total.toFixed(2));
    });
    
    $('.submit-order').click(function() {
      let nombreSolicitante = sessionStorage.getItem("username") || "Guest";
    
      let order = {
        nombre_solicitante: nombreSolicitante,
        platos: orderPlates,
        preciototal: total
      };
    
      $.ajax({
        url: 'https://restaurante-back-pi.vercel.app/api/order',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(order),
        success: function(response) {
          alert("Order submitted successfully! Order ID: " + response.orderId);
          $('#cart-items').empty();
          orderPlates = [];
          total = 0;
          $('#total-price').text(total.toFixed(2));
        },
        error: function(xhr) {
          let response = xhr.responseJSON;
          let errorMsg = (response && response.error) ? response.error : "Error en la conexión con el servidor.";
          alert("Error submitting order: " + errorMsg);
        }
      });
    });
  });
  
$(document).ready(function() {
    $.ajax({
      url: 'https://restaurante-back-pi.vercel.app/api/orders',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        let ordersContainer = $('#orders-container');
        ordersContainer.empty();
  
        data.forEach(function(order) {
          let orderId = order._id;
          let cardHtml = `
            <div class = "order-card" data-id = "${orderId}">

              <h2>Order ID: ${orderId}</h2>
              <p><strong>Client:</strong> ${order.nombre_solicitante}</p>
              <p><strong>Plates:</strong> ${order.platos.join(', ')}</p>
              <p><strong>Total Price:</strong> $${order.preciototal}</p>

              <div class = "order-actions">

                <button class = "accept-order" data-id = "${orderId}">Accept</button>
                <button class = "reject-order" data-id = "${orderId}">Reject</button>

              </div>

            </div>
          `;
          ordersContainer.append(cardHtml);
        });
  
        $('.accept-order, .reject-order').click(function() {
          let id = $(this).data('id');
          let action = $(this).hasClass('accept-order') ? "accepted" : "rejected";
  
          $.ajax({
            url: 'https://restaurante-back-pi.vercel.app/api/order/' + id,
            type: 'DELETE',
            success: function(response) {
              alert("Order " + id + " " + action + " and removed.");
              $(`.order-card[data-id = "${id}"]`).remove();
            },
            error: function(xhr) {
              let response = xhr.responseJSON;
              let errorMsg = (response && response.error) ? response.error : "Error en la conexión con el servidor.";
              alert("Error processing order: " + errorMsg);
            }
          });
        });
      },
      error: function(xhr, status, error) {
        console.error("Error al cargar los pedidos:", error);
        $('#orders-container').html("<p>Error al cargar los pedidos. Por favor, inténtalo más tarde.</p>");
      }
    });
  });
  
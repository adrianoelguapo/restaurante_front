$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/api/table-requests',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let tablesContainer = $('#orders-container');
            tablesContainer.empty();

            data.forEach(function(request) {
                let requestId = request._id;
                let cardHtml = `
                    <div class="order-card" data-id="${requestId}">
                        <h2>Request ID: ${requestId}</h2>
                        <p><strong>Client:</strong> ${request.nombresolicitante}</p>
                        <p><strong>Table Number:</strong> ${request.numeromesa}</p>
                        <div class="order-actions">
                            <button class="accept-order" data-id="${requestId}">Accept</button>
                            <button class="reject-order" data-id="${requestId}">Reject</button>
                        </div>
                    </div>
                `;
                tablesContainer.append(cardHtml);
            });

            $('.accept-order, .reject-order').click(function() {
                let id = $(this).data('id');
                let action = $(this).hasClass('accept-order') ? "accepted" : "rejected";

                $.ajax({
                    url: 'http://localhost:5000/api/table-request/' + id,
                    type: 'DELETE',
                    success: function(response) {
                        alert("Request " + id + " " + action + " and removed.");
                        $(`.order-card[data-id="${id}"]`).remove();
                    },
                    error: function(xhr) {
                        let response = xhr.responseJSON;
                        let errorMsg = (response && response.error) ? response.error : "Error en la conexión con el servidor.";
                        alert("Error processing request: " + errorMsg);
                    }
                });
            });
        },
        error: function(xhr, status, error) {
            console.error("Error al cargar las solicitudes de mesa:", error);
            $('#orders-container').html("<p>Error al cargar las solicitudes. Por favor, inténtalo más tarde.</p>");
        }
    });
});

$(document).ready(function() {
    const mesasContainer = $(".mesas");

    $.ajax({
        url: "https://restaurante-back-pi.vercel.app/api/mesas",
        method: "GET",
        dataType: "json",
        success: function(mesas) {
            mesasContainer.empty();

            mesas.forEach(mesa => {
                let mesaElement = `
                    <div class = "mesa">

                        <h2>Table ${mesa.numero}</h2>
                        <p class = "comensales">Comensales máximos: <span>${mesa.maxpeople}</span></p>
                        <p>Status: <span>${mesa.status ? "Libre" : "Ocupada"}</span></p>
                        <button class = "boton-reservar" data-id = "${mesa._id}" data-numero = "${mesa.numero}" ${!mesa.status ? "disabled" : ""}>Reservar</button>
                        
                    </div>
                `;
                mesasContainer.append(mesaElement);
            });
        },
        error: function(error) {
            console.error("Error al cargar las mesas:", error);
        }
    });
});

$(document).on("click", ".boton-reservar", function() {
    const nombreSolicitante = sessionStorage.getItem("username");
    const numeroMesa = $(this).data("numero");

    console.log("Usuario en sesión:", nombreSolicitante);
    console.log("Número de mesa:", numeroMesa);

    if (!nombreSolicitante) {
        alert("Debes iniciar sesión para reservar una mesa.");
        return;
    }

    if (!numeroMesa) {
        alert("Error: No se encontró el número de mesa.");
        return;
    }

    console.log("Enviando reserva:", { nombresolicitante: nombreSolicitante, numeromesa: numeroMesa });

    $.ajax({
        url: "https://restaurante-back-pi.vercel.app/api/solicitar-mesa",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            nombresolicitante: nombreSolicitante,
            numeromesa: numeroMesa
        }),
        success: function(response) {
            console.log("Reserva confirmada:", response);
            alert("Reserva realizada con éxito.");
            location.reload();
        },
        error: function(xhr) {
            console.error("Error en la solicitud de reserva:", xhr.responseText);
            alert("Hubo un error al reservar la mesa. Verifica la consola para más detalles.");
        }
    });
});

$(document).ready(function() {
    $(".logout-button").click(function(){
        sessionStorage.removeItem("username");
        window.location.href = "http://localhost/restaurante_front/index.html";
    })
});
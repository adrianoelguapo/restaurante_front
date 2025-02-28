$(document).ready(function() {
    $(".logout-button").click(function(){
        sessionStorage.removeItem("username");
        window.location.href = "https://restaurante-front-five.vercel.app/index.html";
    })
});
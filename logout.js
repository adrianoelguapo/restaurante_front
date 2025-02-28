$(document).ready(function() {
    $(".logout-button").click(function(){
        sessionStorage.removeItem("username");
        window.location.href = "https://restaurante-front-one.vercel.app/index.html";
    })
});
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
$(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente.");
  });

  $("#addFavorities").click(function () {
    alert("La receta fue añadida correctamente.");
  });

  $("#suscriptionBtn").click(function () {
    alert("Gracias por suscribirte nuestro Newsletter!");
  });

  var isRed = false;

  $("h2").on("dblclick", function () {
    // Si el texto es rojo, cambia el color a negro
    if (isRed) {
      $(this).css("color", "black");
      isRed = false;
    } else {
      // Si el texto es negro, cambia el color a rojo
      $(this).css("color", "red");
      isRed = true;
    }
  });

  // FUNCION SIMPLE PARA CAMBIAR COLOR SOLO A RED SIN REGRESO A BLACK
  // $('h2').on('dblclick', function(){
  //   $(this).attr('style', 'color: red; border-color: red !important');
  // });

  $(".card-title").click(function () {
    $(".card-text, .card-img-top").toggle("slow");
  });
});

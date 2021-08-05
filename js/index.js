

$("#loginbtn").click(function(){

  $(".loginmostrar").hide().show('medium');
});
$("#x").click(function(){
  $(".loginmostrar").slideUp();
});



$("#signup").click(function() {
$("#first").fadeOut("fast", function() {
$("#second").fadeIn("fast");
});
});

$("#signin").click(function() {
$("#second").fadeOut("fast", function() {
$("#first").fadeIn("fast");
});
});



         $(function() {
           $("form[name='login']").validate({
             rules: {

               email: {
                 required: true,
                 email: true
               },
               password: {
                 required: true,

               }
             },
              messages: {
               email: "Porfavor ingrese un email válido",

               password: {
                 required: "Porfavor ingrese una contraseña",

               }

             },
             submitHandler: function(form) {
               form.submit();
             }
           });
         });



$(function() {

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },

    messages: {
      firstname: "Porfavor complete su nombre",
      lastname: "Porfavor complete su apellido",
      password: {
        required: "Porfavor ingrese una contraseña",
        minlength: "Su contraseña debe tener al menos 5 caracteres"
      },
      email: "Porfavor ingrese un email válido"
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});



//oscurecer fondo

//FAB
    $(document).ready(function() {
      $('#loginbtn').floatingActionButton();

      $('#loginbtn').hover(
        function () {
           $('body').css('background-color', 'red');
        },
        function () {
           $('body').css('background-color', 'white');
         }
      );

    });



    // Encuesta

$("#btnencuesta").click(function(){
  $(".contenedor-encuesta").slideDown();
  });

    $("#cerrarencuesta").click(function(){
  $(".contenedor-encuesta").slideUp();
});


$("#ecerrar").click(function(){
$(".contenedor-encuesta").slideUp();
});

// PODCAST

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// PROGRAMACIÓN TV
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// boton para ir arribabtn



$(document).ready(function(){

	$('#irarriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#irarriba').slideDown(300);
		} else {
			$('#irarriba').slideUp(300);
		}
	});

});

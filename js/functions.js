
$('#presentacion').append(`
                            <video id="my-video" class="video" autoplay muted loop>
                            <source src="media/video/Hotel-1188.mp4">
                            </video>
                            <div class="presentacion">
                            <h1 class="h1">Sunrise Hotel&Spa</h1>
                            <span class="span-descripcion">Un mundo de posibilidades</span>
                        </div>                      `)

//Elementos del main

$('#about').append(`<h2 class="title">About us</h2>
                            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit egestas dapibus, augue quam eros habitasse dictum curae bibendum dis vitae, natoque parturient dui malesuada imperdiet sollicitudin quisque odio. Metus facilisis fusce ullamcorper arcu enim auctor hendrerit posuere dapibus, magna bibendum dictumst ac rutrum libero luctus conubia, in felis habitasse dignissim ultrices vitae id sociosqu. Fermentum hac curae ante a conubia nullam at lobortis viverra consequat congue mattis pellentesque, urna ornare commodo dui ac vehicula integer himenaeos porttitor lacus mauris.</p>

                            <p class="text-center">Scelerisque semper feugiat luctus posuere ad, vehicula ridiculus curae ornare ut, commodo habitant morbi duis. Tortor ultrices vel consequat eu sociis accumsan neque dictumst vitae, ornare platea dictum habitant himenaeos inceptos tempus ullamcorper semper, leo praesent a nibh elementum viverra condimentum donec. Congue ridiculus risus arcu luctus neque libero urna rhoncus ad porttitor hendrerit, nam primis euismod fusce pretium dapibus placerat scelerisque sollicitudin.</p>`)

 ScrollReveal().reveal('#about'); 

// appendeamos dos fotos con textos en el index

$('#places').append(`<div class= "main-places">
                        <div class= "col animado">
                            <img src="media/spa_y_piscina/amanecer-tableta-desktop.jpg">
                        </div>
                        <div class= "col animado">
                            <p class="parrDescripcion">Lugares paradisíacos se mezclan con los aromas del mar y los sonidos relajantes de un entorno natural creando experiencias inolvidables</p>
                        </div>
                    </div>
                    <div class= "main-places">
                        <div class= "col animado">
                            <p class="parrDescripcion two">Amaneceres y atardeceres de ensueño. Despierte con la melodía de las aves recibiendo el nuevo día y relajese con el ocaso donde el sol se esconde por detrás del mar permitiendo que la magia de la noche envuelva a quienes se lo permitan</p>
                        </div>
                        <div class= "col animado">
                            <img src="media/spa_y_piscina/atardecer-tableta-desktop.jpg">
                        </div>
                    </div>`)

$('img').css('boxShadow', '7px 5px rgba(100, 100, 100, .1)');


$('#cards-prom').prepend(`
                        <div class="cards">
                            <h3 class="title-cards">También contamos con salón de eventos con el cual le brindamos las siguientes promociones</h3>
                            <button id="see-prom" class="btn-search">Ver promociones</button>
                        </div>
                      `)  

$('#see-prom').css({
                    "align-self": "center",
                    "padding": "1.3em"
})
let idPromo;                        
let counter = true;
$("#see-prom").click(() => { 
    
    
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success" && counter == true){
            let misPromos = respuesta;
            
            for (const promo of misPromos) {

              $(".container-cards").append(`
                                                <div data-aos ="flip-left">
                                                    <h3>${promo.promName}</h3>
                                                    <p> ${promo.description}</p>
                                                    <button class="btn-search danger transparent" id="${promo.id}">Reservar</button>
                                                    <input type="hidden" id="${promo.promName}" value="${promo.id}"
                                                </div>
                                            `);
                                        }  
            
                    $('.transparent').click(function (){
                    idPromo = $(this).attr('id');
                    reservaPromociones.push(idPromo);
                    return idPromo
                })
               
            }
        
            
               
    });
});
            
       
                            

$('.container-cards').on('click','.btn-search', function(){
    
   if (counter) {
    $('#cards-2').prepend(`

    <div id="container-form">
        <span>Ingrese sus datos y nos comunicaremos a la brevedad</span>
        <form id="prom-form">
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre y apellido">
            <input type="email" id="email" name="email" placeholder="ejemplo@email.com">
            <input id="enviar" class="btn-danger" type="submit" value="enviar">
        </form>
    </div>
    `)
    counter = false;
   }
    $('#cards-2').show()          
})
 $('#cards-2').on('click', '#enviar', function(e){
    e.preventDefault();
    persona = $('#nombre').val();
    reservaPromociones.push(persona)
    $('#container-form').hide()
    $('#cards-2').prepend(`<div class="message">
                                <p>Gracias por su reserva; nos estaremos comunicando a la brevedad con ud</p>
                           </div>`)
    
}) 
saveStorage("reservaPromocion", JSON.stringify(reservaPromociones))
function saveStorage(key, value) {
    localStorage.setItem(key, value) 
}


ScrollReveal().reveal('.animado', {delay: 500}); 



// Galería de imágenes **********

$('#container-video').append(`  <video id="my-video-2" class="video" autoplay muted loop>
                                <source src="../media/video/video-para-galeria.mp4">
                                </video>
                                <div class="presentacion">
                                <h1 class="h1">Sunrise Hotel&Spa</h1>
                                <span class="span-descripcion">Vibra con el entorno</span>
                                </div>  
`)


$('#gallery').append(`<h2 class= "title">Galería de imágenes</h2>`)

function addPictures(array) {
    console.log(array)
    for (let i = 0; i < 5; i++) {
       
        $('#gallery').append(`<!-- Trigger the Modal -->
                <img id="${array[i].id}"  src="${array[i].url}" style="width:100%;max-width:300px">
                
                <!-- The Modal -->
                <div id="${array[i].nombre}" class="modal">
                
                    <!-- The Close Button -->
                    <span class="close cross">&times;</span>
                    
                    <!-- Modal Content (The Image) -->
                    <img class="modal-content" src="${array[i].url}">
                    
               </div>
        `)                                
        $("#" + array[i].id).on("click", function(){
            $("#" + array[i].nombre).show()
        })
        $('.close').on('click', function(){
            $("#" + array[i].nombre).hide();
        })
    }
  
}




addPictures(roomsPictures);
addPictures(restaurant);
addPictures(spaAndPool); // las tuve que dejar acá xq en app.js no funciona



/* ******** Restaurant ******** */

$('#container-video-2').append(`
                            <video id="my-video" class="video" autoplay muted loop>
                            <source src="../media/video/sushi.mp4">
                            </video>
                            <div class="presentacion">
                            <h1 class="h1">Sunrise Hotel&Spa</h1>
                            <span class="span-descripcion" style="{font-size: 1.8rem}">Sólo para paladares exquisitos</span>
                        </div>                      `)


$('#container-head').append(`<h3 class="title title-restaurant">Todo el sabor de la tierra directo a su plato</h3>`)

$('#container-body').append(`<h3 class="title title-restaurant">Nuestra historia</h3>
                              
                              <div class="content">
                              
                                <p>
                                Nuestra pasión es generar experiencias memorables cuidando al máximo cada uno de los detalles y poniendo lo mejor de nosotros, logrando así que muchos de nuestros clientes se conviertan en amigos de la casa.
                                Los esperamos en nuestro local ubicado en el Sunrise Hotel&Spa en la rambla de Piriápolis.
                                </p>

                              
                                <img id="image1" class="animate" src="../media/restaurant/restaurant4.jpg">
                                <p>Inaugurado en el 2002 se ha consolidado como uno de los referentes de la gastronomía de la región. Su ambiente cálido y distendido tanto al mediodía como en la noche hacen que sea el lugar predilecto de turistas, políticos, ejecutivos y personalidades de la cultura del ámbito local e internacional.</p>  
                                <button class="reserva-restaurant">Reservar ahora</button>        

                                <img id="image2" class="animate" src="../media/restaurant/restaurant2.jpg">
                                <p>Su variada carta atrae a todo tipo de comensales creando un ámbiente diverso y rico culturalmente. La cálida atención que nos caracteriza cierra un círculo de perfección en donde todos los aspectos estén contemplados para que tenga una experiencia inolvidable.</p>    
                                <button class="reserva-restaurant">Reservar ahora</button>       
                                                         
                                <img id="image3" class="animate" src="../media/restaurant/restaurant3.jpg">
                                <p>En cada plato expresamos nuestro amor, no solo en cuanto al conjunto de sabores y la primera calidad de los alimentos, sino también en su presentación. Somos aquellos que ofrecen platos gourmet, desde la calidéz de una casa o un ambiente exclusivo, con precios populares.</p>
                                <button class="reserva-restaurant">Reservar ahora</button> 
                                

                              </div>
`)
$(document).ready(function(){

	$(window).scroll(function(){
		let bar = $(window).scrollTop();
		let position =  (bar * 0.10);
		
		$('.contenedor-paralax').css({
			'background-position': '0 -' + position + 'px'
		});

	});
    $('.reserva-restaurant').on('click', function(){
        $('#restaurant-form').fadeIn(1000);
        $('#restaurant-form').css('display', 'flex')
    })
    $('.cross').on('click', function() {
        $('#restaurant-form').fadeOut();
        $('#restaurant-form').css('display', 'none')
    })

});
$('#send-form').click(function (){
    userName = $('#form-name').val();
    userEmail = $('#form-email').val();
    personsToEat = $('#persons').val();
    dayToEat = $('#days').val();

    reservaMesa.push(userName);
    reservaMesa.push(userEmail);
    reservaMesa.push(personsToEat);
    reservaMesa.push(dayToEat);

    saveStorage('reservaMesa', JSON.stringify(reservaMesa));
    removeATable(personsToEat);
    $('#restaurant-form').fadeOut();
    $('#restaurant-form').css('display', 'none');
    $('#confirm-table-reserve').fadeIn();

    $('#confirm-table-reserve').append(`
                                <div class="container-message">
                                    <p>Sr/a ${userName}, su reserva se ha procesado correctamente le envíamos un mail a la casilla de correo ${userEmail} para su confirmación</p>
                                    <button class="close">Cerrar</button>
                                </div>
    `)
    $('.close').on('click', function () {
        $('#confirm-table-reserve').fadeOut()
    })

})

function removeATable(val){
    const findTable = restaurantTables.find(table => table.id == val);
    console.log(findTable); 
    let tablesLeft = findTable.cant -= 1;
    console.log(tablesLeft);
}

let imagen1 = document.getElementById('image1');
let imagen2 = document.getElementById('image2');
let imagen3 = document.getElementById('image3');

const chargeImages = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}

const observer = new IntersectionObserver(chargeImages, {
    root: null,
    rootMargin: '300px 0px 100px 0px',
    threshold: 0.7 
});
observer.observe(imagen1);
observer.observe(imagen2);
observer.observe(imagen3);












                    


            

















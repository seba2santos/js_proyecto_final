

myForm.addEventListener('submit', filterRooms);

function filterRooms(e) {
    e.preventDefault();

 if (myForm.adultos.value < 2 && myForm.ninios.value == 0 )  {
     let room = rooms.filter(habitacion => habitacion.capacity < 3);
     console.log(room);
     howManyDays(checkIn, checkOut);
     
     filtered.innerHTML = ` <div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Suite 1</h3>
                                    <div class="images">
                                        <img src="${room[0].img1}">
                                        <img src="${room[0].img2}">
                                    </div>
                                    <span class="price">$${room[0].price} por noche</span>
                                    
                                   
                                    </div>
                                </div>
                            </div>
                            <div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Suite 2</h3>
                                    <div class="images">
                                        <img src="${room[0].img3}">
                                        <img src="${room[0].img4}">
                                    </div>
                                    <span class="price">$${room[0].price} por noche</span>
                                    <div class="buttons">
                                    <button id= "${room[0].id}" class="reserve" data="reserve">Reservar ahora</a></button>
                                    
                                    </div>
                                </div>
                            </div>
                            <div class= "row">
                            <div class="col">
                                <h3 class="h3 text-center">Single</h3>
                                <div class="images">
                                    <img src="${room[1].img1}">
                                    <img src="${room[1].img2}">
                                </div>
                                <span class="price">$${room[1].price} por noche</span>
                                <div class="buttons">
                                <button id="${room[1].id}"class="reserve" data="reserve">Reservar ahora</button>
                                
                                </div>
                            </div>
                        </div>
                        `                      
                      
     
     } else if (myForm.adultos.value == 2 && myForm.ninios.value == 0) { 
        let room = rooms.find(habitacion => habitacion.id === 3);
        console.log(room);
        howManyDays(checkIn, checkOut);
        filtered.innerHTML = `<div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Habitaciones dobles</h3>
                                    <div class="images">
                                        <img src="${room.img1}">
                                        <img src="${room.img2}">
                                    </div>
                                    <span class="price">$${room.price} por noche</span>
                                    <div class="buttons">
                                        <button id="${room.id}"class="reserve">Reservar ahora</button>
                                        
                                    </div>
                                </div>
                             </div>

        `
      } else if(myForm.adultos.value >= 1 && myForm.ninios.value > 0) {
          let room = rooms.filter(habitacion => habitacion.id > 2);
          console.log(room);
          howManyDays(checkIn, checkOut);
          filtered.innerHTML = `
        <div class= "row">
          <div class="col">
              <h3 class="h3 text-center">Habitaciones dobles</h3>
              <div class="images">
                  <img src="${room[0].img1}">
                  <img src="${room[0].img2}">
              </div>
              <span class="price">$${room[0].price} por noche</span>
              <div class="button">
                  <button id="${room[0].id}"class="reserve">Reservar ahora</button>
                
              </div>
          </div>
        </div>
        <div class= "row">
            <div class="col">
                <h3 class="h3 text-center">Habitaciones familiares</h3>
                <div class="images">
                    <img src="${room[1].img1}">
                    <img src="${room[1].img2}">
                </div>
                <span class="price">$${room[1].price} por noche</span>
                <div class="button">
                <button id="${room[1].id}" class="reserve">Reservar ahora</button>
                    
                </div>
            </div>
            </div>
            `
            
    }
}
function filterRooms(e) {
    e.preventDefault();

 if (myForm.adultos.value < 2 && myForm.ninios.value == 0 )  {
     let room = rooms.filter(habitacion => habitacion.capacity < 3);
     console.log(room);
     howManyDays(checkIn, checkOut);
     
     filtered.innerHTML = ` <div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Suite 1</h3>
                                    <div class="images">
                                        <img src="${room[0].img1}">
                                        <img src="${room[0].img2}">
                                    </div>
                                    <span class="price">$${room[0].price} por noche</span>
                                    
                                   
                                    </div>
                                </div>
                            </div>
                            <div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Suite 2</h3>
                                    <div class="images">
                                        <img src="${room[0].img3}">
                                        <img src="${room[0].img4}">
                                    </div>
                                    <span class="price">$${room[0].price} por noche</span>
                                    <div class="buttons">
                                    <button id= "${room[0].id}" class="reserve" data="reserve">Reservar ahora</a></button>
                                    
                                    </div>
                                </div>
                            </div>
                            <div class= "row">
                            <div class="col">
                                <h3 class="h3 text-center">Single</h3>
                                <div class="images">
                                    <img src="${room[1].img1}">
                                    <img src="${room[1].img2}">
                                </div>
                                <span class="price">$${room[1].price} por noche</span>
                                <div class="buttons">
                                <button id="${room[1].id}"class="reserve" data="reserve">Reservar ahora</button>
                                
                                </div>
                            </div>
                        </div>
                        `                      
                      
     
     } else if (myForm.adultos.value == 2 && myForm.ninios.value == 0) { 
        let room = rooms.find(habitacion => habitacion.id === 3);
        console.log(room);
        howManyDays(checkIn, checkOut);
        filtered.innerHTML = `<div class= "row">
                                <div class="col">
                                    <h3 class="h3 text-center">Habitaciones dobles</h3>
                                    <div class="images">
                                        <img src="${room.img1}">
                                        <img src="${room.img2}">
                                    </div>
                                    <span class="price">$${room.price} por noche</span>
                                    <div class="buttons">
                                        <button id="${room.id}"class="reserve">Reservar ahora</button>
                                        
                                    </div>
                                </div>
                             </div>

        `
      } else if(myForm.adultos.value >= 1 && myForm.ninios.value > 0) {
          let room = rooms.filter(habitacion => habitacion.id > 2);
          console.log(room);
          howManyDays(checkIn, checkOut);
          filtered.innerHTML = `
        <div class= "row">
          <div class="col">
              <h3 class="h3 text-center">Habitaciones dobles</h3>
              <div class="images">
                  <img src="${room[0].img1}">
                  <img src="${room[0].img2}">
              </div>
              <span class="price">$${room[0].price} por noche</span>
              <div class="button">
                  <button id="${room[0].id}"class="reserve">Reservar ahora</button>
                
              </div>
          </div>
        </div>
        <div class= "row">
            <div class="col">
                <h3 class="h3 text-center">Habitaciones familiares</h3>
                <div class="images">
                    <img src="${room[1].img1}">
                    <img src="${room[1].img2}">
                </div>
                <span class="price">$${room[1].price} por noche</span>
                <div class="button">
                <button id="${room[1].id}" class="reserve">Reservar ahora</button>
                    
                </div>
            </div>
            </div>
            `
            
    }
}
// función para calcular la cantidad de días que se hospeda

function howManyDays(date1, date2) {
    let totalMs = Math.abs(date2.valueAsDate - date1.valueAsDate);
    days = totalMs = Math.round(totalMs/msPerDay);
    console.log(days)

}



// precio total
function totalPrice(e) {
    if (e.target.classList.contains('reserve')) {
        const findedRoom = rooms.find(hab => hab.id == e.target.id);
        console.log(findedRoom);
        price = findedRoom.price * days
        console.log(price);
    }
} 

function showMessage(e) {
    howManyDays(checkOut, checkIn);
    totalPrice(e);
    confirm.innerHTML = `<p>Estimado/a ${(nombre.value).toUpperCase()}, su reserva ha sido recibida y procesada con éxito. El precio por su estadía asciende a $${price}. Le enviamos un correo a la casilla ${(email.value).toUpperCase()} para su confirmación.`
   
}


     

// función para calcular la cantidad de días que se hospeda

function howManyDays(date1, date2) {
    let totalMs = Math.abs(date2.valueAsDate - date1.valueAsDate);
    days = totalMs = Math.round(totalMs/msPerDay);
    console.log(days)

}

let reservedRoom;

// precio total
function totalPrice(e) {
    if (e.target.classList.contains('reserve')) {
        const findedRoom = rooms.find(hab => hab.id == e.target.id);
        console.log(findedRoom);

        price = findedRoom.price * days
        console.log(price);
        
        let cantDeHabs = findedRoom.cant -= 1;
        console.log(cantDeHabs)

        reservedRoom = findedRoom.kind;
        console.log(reservedRoom);
        saveStorage("roomstock", cantDeHabs)
        
        
        
    }
} 

function showMessage(e) {
    
    howManyDays(checkOut, checkIn);
    totalPrice(e);
    console.log(reservedRoom)
    searchForm.innerHTML = `<div id="confirm-message">
                                <p class="confirm">Estimado/a ${(nombre.value).toUpperCase()}, su reserva ha sido recibida y procesada con éxito. El precio por su estadía asciende a $${price}. Le enviamos un correo a la casilla ${(email.value).toUpperCase()} para su confirmación.</p>
                                <button id="back" class="btn-danger">Cerrar</button>
                            </div>`
    
    let infoReservaUsuario = {nombre: nombre.value, habitacion: reservedRoom}
    console.log(infoReservaUsuario);
    let back = document.getElementById('back');
    back.addEventListener('click', function () {
        searchForm.innerHTML = '';

    })
    
    saveStorage("reserva", JSON.stringify(infoReservaUsuario))
}
let confirmMessage = document.querySelector('#confirm-message');
function close (element) {
    element.css({'display': 'none'})
};




function saveStorage(key, value) {
    localStorage.setItem(key, value) 
}








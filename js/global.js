class User {
    constructor(userName, userEmail, roomSelected){
        this.userName = userName;
        this.userEmail = userEmail;
        this.roomSelected = roomSelected;
    }
}
const rooms = [{id: 1, kind: 'suite', price: 347, cant: 2, 
                img1: '../media/habitaciones/suites/suite-1-cama.jpg', img2: '../media/habitaciones/suites/suite-1-vista.jpg', img3: '../media/habitaciones/suites/suite-2-cama.jpg', img4: '../media/habitaciones/suites/suite-2-vista.jpg', capacity: 2},
               {id: 2, kind: 'single', price: 47, cant: 10, img1: '../media/habitaciones/singles/single2.jpg', img2: '../media/habitaciones/singles/single1.jpg', capacity: 1},
               {id: 3, kind: 'double', price: 80, cant: 12, img1: '../media/habitaciones/dobles/doble1.jpg', img2: '../media/habitaciones/dobles/doble2.jpg', capacity: 2},
               {id: 4, kind: 'familiar', price: 150, cant: 8,  img1: '../media/habitaciones/familiar/familiar1.jpg', img2: '../media/habitaciones/familiar/familiar2.jpg', capacity: 4} 
]
let btnSearch = document.getElementById('btn-search');// obtengo botón para buscar habitación
let filtered = document.getElementById('filtered'); //div que se genera a partir de los filtros de búsqueda
let checkIn = document.getElementById('check-in'); //fecha de llegada
let checkOut = document.getElementById('check-out'); //fecha de salida


const msPerDay = 24 * 60 * 60 * 1000; // hs en un día por mins en 1h por segs en un min por ms en un seg
let days;
let price;
const reservInfo = [];
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let confirm = document.getElementById('confirm');
const userInfo = [];
let cards = document.getElementById('prom-cards');



const URLGET = "../json/cardsProm.json"; 

let myForm = document.getElementById('form');

let searchForm = document.getElementById('search-form');

const roomsPictures = [{url:"../media/habitaciones/suites/suite1.jpg", nombre: 'suite1', id: 1},{ url: "../media/habitaciones/suites/suite2.jpg", nombre: 'suite2', id: 2}, {url: "../media/habitaciones/suites/suite3.jpg", nombre: 'suite3', id: 3}, {url: "../media/habitaciones/suites/suite4.jpg", nombre: 'suite4', id: 4}, {url: "../media/habitaciones/suites/suite-1-cama.jpg", nombre: 'suite5', id: 5}];

const spaAndPool = [{url: "../media/spa_y_piscina/piscina1.jpg", nombre: 'piscina1', id: 6}, {url: "../media/spa_y_piscina/piscina2.jpg", nombre: 'piscina2', id: 7}, {url: "../media/spa_y_piscina/spa1.jpg", nombre: 'piscina3', id: 8}, {url: "../media/spa_y_piscina/spa2.jpg", nombre: 'piscina4', id: 9}, {url: "../media/spa_y_piscina/amanecer-tableta-desktop.jpg", nombre: 'piscina5', id: 10}];

const restaurant = [{url: "../media/restaurant/restaurant1.jpg", nombre: 'restaurant1', id: 11}, {url: "../media/restaurant/restaurant2.jpg", nombre: 'restaurant2', id: 12}, {url: "../media/restaurant/restaurant3.jpg", nombre: 'restaurant3', id: 13}, {url: "../media/restaurant/restaurant4.jpg", nombre: 'restaurant4', id: 14}, {url: "../media/restaurant/restaurant5.jpg", nombre: 'restaurant5', id: 15}]

let reservaPromociones = [];
let persona;

let paralax = document.querySelector('.paralax');
let reservaRestaurant = document.getElementsByClassName('reserva-restaurant')
let restaurantForm = document.querySelector('#restaurant-form');

const restaurantTables = [{id: 1, capacity: 2, cant: 10}, {id: 2, capacity: 4, cant: 8}, {id: 3, capacity: 6, cant: 5}, {id: 4, capacity: 10, cant: 2}];
let userName;
let userEmail;
let personsToEat;
let dayToEat;
const reservaMesa = [];



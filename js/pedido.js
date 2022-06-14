const carro = new Carrito();
const carrito = document.getElementById('carrito');
const consolas = document.getElementById('lista-consolas');
const listaconsolas = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventos();


function cargarEventos(){
    consolas.addEventListener('click', (e)=> {carro.comprarconsola(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarconsola(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
}
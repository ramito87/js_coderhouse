//Listado de consolas

const nintendo = document.querySelector('#nintendo');
const sony = document.querySelector('#sony');
const microsoft = document.querySelector('#microsoft');
microsoft


let consolasNintendo =[
  {
    nombre: "Switch",
    imagen: "img/switch.jpg",
    fabricante: "Nintendo",
    precio: "9000",
    color: "Negro",
  },
  {
    nombre: "Wii U",
    imagen: "img/wiiu.jpg",
    fabricante: "Nintendo",
    precio: "7000",
    color: "Negro",
  },
  {
    nombre: "Wii",
    imagen: "img/wii.jpg",
    fabricante: "Nintendo",
    precio: "5000",
    color: "Blanco",
  }];

  let consolasSony =[ {
    nombre: "Play 5",
    imagen: "img/play5.jpg",
    fabricante: "Sony",
    precio: "15000",
    color: "Blanco",
  },
  {
    nombre: "Play 4",
    imagen: "img/play4.jpg",
    fabricante: "Sony",
    precio: "7000",
    color: "Negro",
  },
  {
    nombre: "Play 3",
    imagen: "img/play3.jpg",
    fabricante: "Sony",
    precio: "5000",
    color: "Blanco",
  }];


  let consolasMicrosoft=[{
    nombre: "Xbox X",
    imagen: "img/xboxx.jpg",
    fabricante: "Microsoft",
    precio: "14000",
    color: "Negro",
  },
  {
    nombre: "Xbox One",
    imagen: "img/xboxone.jpg",
    fabricante: "Microsoft",
    precio: "10000",
    color: "Negro",
  },
  {
    nombre: "Xbox 360",
    imagen: "img/xbox360.jpg",
    fabricante: "Microsoft",
    precio: "5000",
    color: "Blanco",
  }];

consolasNintendo.forEach((item)=>{
    const consolasListado = document.createElement('div')
    consolasListado.classList.add('card', 'mb-4', 'shadow-sm');
    consolasListado.innerHTML = `
                    <div class="card-header">
                        <h4 class="my-0 font-weight-bold">${item.nombre}</h4>
                    </div>
                    <div class="card-body">
                    <div class="fit-img">
                        <img src="${item.imagen}" class="card-img-top">
                        </div>
                        <h1 class="card-title pricing-card-title precio">$ <span class="">${item.precio}</span></h1>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li>${item.fabricante}</li>
                            <li>${item.color}</li>
                        </ul>
                        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
                    </div>
                </div>
    `;
    nintendo.append(consolasListado);
    
});

consolasSony.forEach((item)=>{
    const consolasListado = document.createElement('div')
    consolasListado.classList.add('card', 'mb-4', 'shadow-sm', 'sony');
    consolasListado.innerHTML = `
                    <div class="card-header">
                        <h4 class="my-0 font-weight-bold">${item.nombre}</h4>
                    </div>
                    <div class="card-body">
                    <div class="fit-img">
                    <img src="${item.imagen}" class="card-img-top">
                    </div>
                        <h1 class="card-title pricing-card-title precio">$ <span class="">${item.precio}</span></h1>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li>${item.fabricante}</li>
                            <li>${item.color}</li>
                        </ul>
                        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
                    </div>
                </div>
    `;
    sony.append(consolasListado);
    
});

consolasMicrosoft.forEach((item)=>{
    const consolasListado = document.createElement('div')
    consolasListado.classList.add('card', 'mb-4', 'shadow-sm', 'sony');
    consolasListado.innerHTML = `
                    <div class="card-header">
                        <h4 class="my-0 font-weight-bold">${item.nombre}</h4>
                    </div>
                    <div class="card-body">
                    <div class="fit-img">
                    <img src="${item.imagen}" class="card-img-top">
                    </div>
                        <h1 class="card-title pricing-card-title precio">$ <span class="">${item.precio}</span></h1>

                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li>${item.fabricante}</li>
                            <li>${item.color}</li>
                        </ul>
                        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
                    </div>
                </div>
    `;
    microsoft.append(consolasListado);
    
});
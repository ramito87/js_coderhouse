class Carrito{

    //Añadir al carrito
    comprarconsola(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const consola = e.target.parentElement.parentElement;
            this.leerDatosProdcuto(consola);
        }
    }

    leerDatosProdcuto(consola){
        const infoconsola = {
            imagen: consola.querySelector('img').src,
            titulo: consola.querySelector('h4').textContent,
            precio: consola.querySelector('.precio span').textContent,
            id: consola.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        this.insetarCarrito(infoconsola);
    }

    insetarCarrito(consola){
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>
            <img src="${consola.imagen}" width= 100>
        </td>
        <td>${consola.titulo}</td>
        <td>$${consola.precio}</td>
        <td> 
            <a href="#" class="borrar-consola fas fa-times-circle" data-id="${consola.id}"></a>
        </td>
        `;
        listaconsolas.appendChild(row);
        alert('Consola agregada al carrito');
        this.guardarConsolasLocalStorage(consola);
        console.log(consola);
    }

    eliminarconsola(e){
        e.preventDefault();
        let consola, consolaID;
        if(e.target.classList.contains('borrar-consola')){
            e.target.parentElement.parentElement.remove();
            consola = e.target.parentElement.parentElement;
            consolaID = consola.querySelector('a').getAttribute('data-id');
            alert('Consola eliminada del carrito');
        }
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaconsolas.firstChild){
            listaconsolas.removeChild(listaconsolas.firstChild);
        }
        alert('Carrito vaciado');
        return false;
    }

    guardarConsolasLocalStorage(consola){
        let consolas;
        consolas = this.obtenerConsolasLocalStorage();
        consolas.push(consola);
        localStorage.setItem('consolas', JSON.stringify(consolas));
    }

    obtenerConsolasLocalStorage(){
        let consolaLocalStorage;

        if(localStorage.getItem('consolas') === null){
            consolaLocalStorage = [];
        }else{
            consolaLocalStorage = JSON.parse(localStorage.getItem('consolas'));
        }
        return consolaLocalStorage;
    }
}
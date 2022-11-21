// LLEVAR UN ORDEN EN TU PROYECTO
//carrito 

//1) VARIABLES
let carrito 
if (localStorage.getItem(`carrito`)){
	carrito = JSON.parse(localStorage.getItem(`carrito`))
} else {
	carrito = []
}

console.log(`carrito`, carrito);


//2) SELECTORES
const searchBarInput = document.querySelector(`#searchBarInput`) //input
const searchBarButton = document.querySelector(`#searchBarButton`) //boton
const cardContainer = document.querySelector(`#cardContainer`) //contenedor
//const buttonsCTA = document.querySelectorAll(`.buttonCTA`) //es una class son 3 botones, por esp el puntp (.) y el  All, pero nos convine ponerla junto a la ejecucion por que si no lee antes la ejecucion los botones no existen 


//3) FUNCIONES
const agregarProductoAlCarrito = (e) => {
	const idProductoElegido = e.target.getAttribute(`data-id`)
    const productoElegido = productos.find((producto) => producto.id == idProductoElegido)
    carrito.push(productoElegido)
    console.log(carrito);
    localStorage.setItem(`carrito`, JSON.stringify(carrito))

	// console.log(carrito);

}





//hacemos una funcion de los Articulos
const renderizarProductos = () =>{
	productos.forEach((producto) =>{
	const nuevaCard = document.createElement(`div`)
	nuevaCard.className = `card`
    nuevaCard.innerHTML = `
	   <h3 class="carTitle"> Articulo ${producto.nombre} </h3>
	   <img src="${producto.imgSrc}" class="cardImg">
	   <p class="carDesc"> ${producto.descripcion}</p>
	   <span class="cardPrice"> $${producto.precio} </span>
	   <button class="buttonCTA" data-id="${producto.id}"> Agregar al Carrito </button>
	   `       
	   cardContainer.append(nuevaCard)
	})
	const buttonsCTA = document.querySelectorAll(`.buttonCTA`)
	buttonsCTA.forEach((button) =>{
		button.addEventListener(`click`, agregarProductoAlCarrito)
	})
}




//4) LISTENERS
searchBarButton.addEventListener(`click`, () =>{
	console.log(searchBarInput.value);
})



//5) EJECUCIONES
renderizarProductos() 


  

















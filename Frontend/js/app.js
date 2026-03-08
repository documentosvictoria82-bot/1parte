const $ = document;
const conteinerProductos = $.querySelector('#conteinerProductos')

const newCard = ({name, image, description, price, _id}) =>{
    return `
            <div class="card" id=${_id}>
            <h3 class="cardTitle">${name}</h3>
            <img class="carImag" src=${image} alt="Laptop">
            <p class="cardDescrip">${description.slice(0,40)} </p>
            <strong class="cardPrice">${price}</strong>
            <button class="botonAñadido"> Agregar al carrito </button>
        </div>
        `
}

const renderCards= (array) => {
conteinerProductos.innerHTML = ''
    array.map(item => {
        conteinerProductos.innerHTML += newCard(item)
})
}

const handleDetailCard = (_id) => {
    //console.log('Realizaste click'+ evento.target);
    window.location = `/Frontend/pages/detalle.html?idproducto=${_id}`;
}

const addClickDetailCard = () => {
    const cards = document.querySelectorAll('.card');
   console.log(cards)
    cards.forEach((card) => card.addEventListener('click', (evento) => {
        handleDetailCard(evento.currentTarget.id)
    })
)
}

const getAll = async () => {
try {
    const response = await fetch('http://localhost:3007/api/producto')
  if (response.status !==200) throw new Error('Error en la solicitud')
  const data = await response.json()
    renderCards(data)
} catch (error) {
    alert('error' + error)
}
}

document.addEventListener('DOMContentLoaded', async()=>{
await getAll()
addClickDetailCard()
})


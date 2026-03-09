document.addEventListener('DOMContentLoaded', () => {
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    alert('Producto creado con éxito')

    let body = {
        name: e.target.name.value,
        category: e.target.category.value,
        description: e.target.description.value,
        price: parseFloat(e.target.price.value),
        stock: parseInt(e.target.stock.value),  
        rating: {
            rate: e.target.rate.value,
            count: e.target.count.value,
         },
       images: []
    }
})
fetch ('http://localhost:3007/api/producto', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
})
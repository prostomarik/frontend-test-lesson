function getProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(result => result.json())
        .then(data => {
            // console.log(data)

            const products = document.getElementById('products')

            data.forEach(product => {
                products.innerHTML = products.innerHTML.concat(
                    `<div class="product">
                        <p class="title">${product.title}</p>
                        
                        <img class="image" src="${product.image}" alt="">
                        
                        <div>
                            <p><b>${product.price} $</b></p>
                            <p class="description"><b>Описание:</b> ${product.description}</p>
                        </div>
                    </div>`
                )
            })
        })
}

function sum1(a, b) {
    return a + b
}

const sum2 = (a, b) => a + b

console.log(sum1(2,3), sum2(2,3))

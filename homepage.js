let user = document.getElementById("user")
user.innerText = localStorage.getItem("username")
let fetchData = async () => {
    let data = await fetch("https://fakestoreapi.com/products")
    let finalData = await data.json()
    let container = document.getElementById("card_container")
    finalData.forEach((ele) => {

        container.innerHTML += `
        <main class="card">
        <img src=${ele.image}> 
        <h1>${ele.title.slice(0,10)}</h1>
        <p>${ele.description.slice(0, 100)}</p>
        <b>${ele.price}</b>
        <button onclick='addToCart("${ele.title}", ${ele.price})'>ADD TO CART</button>
        </main>
        `
    })
}
fetchData()
let count = 0;
let cart = []
let cartPrice = []
let cart_value = document.getElementById("cart_value")
let addToCart = (productTitle, productPrice) => {
    // console.log(productPrice)
    // console.log(productTitle)
    count++
    cart_value.innerText = count
    let finalObj = {
        name: productTitle,
        price: productPrice
    }
    cart.push(finalObj)
    let cartItems = document.getElementById("cart_items")
     cartPrice.push(cart[cart.length - 1].price)
   
    let finalPrice = cartPrice.reduce((storage, ele) => {
        return storage += ele
    })
    cartItems.innerHTML += `
    <h1>${cart[cart.length - 1].name} <span>${cart[cart.length - 1].price}</span></h1>
    `
    let priceContainer = document.querySelector("#price_container")
     priceContainer.innerHTML=`
     <p>Your Total Price is:${finalPrice}</p>
    `
    cartItems.style.display = "block"

    
    
}
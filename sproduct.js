const cart = document.querySelectorAll(".cart1");
let carted = JSON.parse(localStorage.getItem("carts")) || [];

function addToCart(newItem) {
   
   
    if (carted.includes(newItem)) {
        alert("Item already added to cart!");
        return;
    }

    carted.push(newItem);
    localStorage.setItem("carts", JSON.stringify(carted));
    

    alert("Item added to the cart!");
    
}

for(let i=0;i<cart.length;i++){
    cart[i].addEventListener("click", (e) => {
        e.stopPropagation();
        var info = cart[i].getAttribute("info");

        addToCart(info);

        
    });
};
function totalPrice() {
    let quantity = document.getElementById("quantity").value;
    let fruit = document.getElementById("fruit").value;
    let total = quantity * fruit;
    document.getElementById("priceResult").innerHTML = "Total Price of ("+quantity + " quantity) : GHc" + total;
}

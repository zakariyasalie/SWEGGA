function calculateTotal() {
    var fPrice = 150.95; // Price for female jacket
    var mPrice = 180.95; // Price for male jacket
    var quantityF = parseInt(document.querySelector('.quantity-f').value);
    var quantityM = parseInt(document.querySelector('.quantity-m').value);
    var totalF = quantityF * fPrice;
    var totalM = quantityM * mPrice;
    var total = totalF + totalM;
    document.getElementById('total').innerText = 'Total Price: R' + total.toFixed(2);
}
document.getElementById('calculateTotal').addEventListener('click', calculateTotal);
let saldo = 0;
const tarjetaValida = "1111";
const nipValido = "1234";

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const cardNumber = document.getElementById("card-number").value;
  const pin = document.getElementById("pin").value;
  if (cardNumber !== tarjetaValida || pin !== nipValido) {
    alert("Número de tarjeta o NIP incorrectos. Por favor, inténtelo de nuevo.");
  } else {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("cajero").style.display = "block";
  }
});

function depositar() {
  const cantidad = parseFloat(document.getElementById("deposito").value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida para depositar.");
    return;
  }
  saldo += cantidad;
  actualizarSaldo();
}

function retirar() {
  const cantidad = parseFloat(document.getElementById("retiro").value);
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida para retirar.");
    return;
  }
  if (cantidad > saldo) {
    alert("No tiene suficiente saldo para retirar esa cantidad.");
    return;
  }
  saldo -= cantidad;
  actualizarSaldo();
}

function actualizarSaldo() {
  document.getElementById("saldo").textContent = "$" + saldo.toFixed(2);
}

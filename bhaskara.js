function calcular() {
  // Pega valores dos inputs
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let delta = (b * b) - (4 * a * c);

  document.getElementById("delta").innerText = "Δ = " + delta;

  if (delta < 0) {
    document.getElementById("x1").innerText = "Não existem raízes reais.";
    document.getElementById("x2").innerText = "";
  } else {

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    document.getElementById("x1").innerText = "x1 = " + x1;
    document.getElementById("x2").innerText = "x2 = " + x2;
  }
}

const form = document.getElementById('Formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calcular()
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("travelForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;

    const result = document.getElementById("result");

    result.innerHTML = `
      <h2>Tu viaje</h2>
      <p>Destino: ${destination}</p>
      <p>Días: ${days}</p>
      <p>Presupuesto: $${budget}</p>
    `;
  });

});

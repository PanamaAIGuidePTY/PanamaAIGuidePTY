alert("Funciona");
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("travelForm");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const destination =
            document.getElementById("destination").value;

        const days =
            Number(document.getElementById("days").value);

        const budget =
            Number(document.getElementById("budget").value);

        const transport =
            document.getElementById("transport").value;

        const interests =
            Array.from(
                document.querySelectorAll(".interests input:checked")
            ).map(input => input.value);

        const result =
            document.getElementById("result");

        const itinerary =
            document.getElementById("itinerary");

        if (interests.length === 0) {
            alert("Selecciona al menos un interés para crear tu viaje.");
            return;
        }

        let activities = [];

        if (interests.includes("playa")) {
            activities.push("🏖️ Disfruta de una experiencia de playa.");
        }

        if (interests.includes("naturaleza")) {
            activities.push("🌿 Explora espacios naturales.");
        }

        if (interests.includes("cultura")) {
            activities.push("🏛️ Descubre la cultura.");
        }

        if (interests.includes("gastronomia")) {
            activities.push("🍽️ Prueba la gastronomía.");
        }

        if (interests.includes("aventura")) {
            activities.push("🏔️ Vive una aventura.");
        }

        const dailyBudget = Math.round(budget / days);

        let html = `<div class="day">
            <h4>🇵🇦 Tu viaje a ${destination}</h4>
        </div>`;

        for (let i = 1; i <= days; i++) {
            html += `<div class="day">
                <h4>📅 Día ${i}</h4>
                <ul>
                    ${activities.slice(0, 3).map(a => <li>${a}</li>).join("")}
                </ul>
                <p>🚗 Transporte: ${transport}</p>
                <p>💰 $${dailyBudget}</p>
            </div>`;
        }

        itinerary.innerHTML = html;
        result.classList.remove("hidden");

    });

});

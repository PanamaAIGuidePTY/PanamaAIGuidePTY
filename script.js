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
            document.querySelectorAll(
                ".interests input:checked"
            )
        ).map(input => input.value);


    const result =
        document.getElementById("result");

    const itinerary =
        document.getElementById("itinerary");


    if (interests.length === 0) {

        alert(
            "Selecciona al menos un interés para crear tu viaje."
        );

        return;

    }


    let activities = [];


    if (interests.includes("playa")) {

        activities.push(
            "🏖️ Disfruta de una experiencia de playa."
        );

    }


    if (interests.includes("naturaleza")) {

        activities.push(
            "🌿 Explora espacios naturales y paisajes."
        );

    }


    if (interests.includes("cultura")) {

        activities.push(
            "🏛️ Descubre la historia y cultura de Panamá."
        );

    }


    if (interests.includes("gastronomia")) {

        activities.push(
            "🍽️ Prueba la gastronomía panameña."
        );

    }


    if (interests.includes("aventura")) {

        activities.push(
            "🏔️ Vive una experiencia de aventura."
        );

    }


    const dailyBudget =
        Math.round(budget / days);


    let html = `

        <div class="day">

            <h4>🇵🇦 Tu viaje a ${destination}</h4>

            <p>
                Hemos creado una experiencia
                personalizada según tus preferencias.
            </p>

        </div>

    `;


    for (let i = 1; i <= days; i++) {

        html += `

            <div class="day">

                <h4>📅 Día ${i}</h4>

                <ul>

                    ${activities
                        .slice(0, 3)
                        .map(
                            activity =>
                            `<li>${activity}</li>`
                        )
                        .join("")
                    }

                </ul>

                <p>
                    🚗 Transporte:
                    ${transport}
                </p>

                <p>
                    💰 Presupuesto sugerido:
                    $${dailyBudget}
                </p>

            </div>

        `;

    }


    html += `

        <div class="total">

            💰 Presupuesto total:
            $${budget}

        </div>

    `;


    itinerary.innerHTML = html;

    result.classList.remove("hidden");

    result.scrollIntoView({
        behavior: "smooth"
    });

});

🎉 ¿Qué tendrás con esto?

Al abrir index.html, ya tendrás una web funcional.

El usuario podrá seleccionar:

Destino → días → presupuesto → intereses → transporte

y al pulsar “Crear mi itinerario”, la página generará un resultado automáticamente.

Pero ojo: esta primera versión todavía no utiliza una IA real. Es el prototipo funcional que vamos a usar como base.

🔥 Siguiente fase

Después podemos convertirla en algo mucho más impresionante:

Panama AI Guide V2

🤖 IA real
🗺️ Mapa interactivo
📍 Ubicación del usuario
🏨 Hoteles
🍽️ Restaurantes
🚗 Transporte
💰 Presupuesto inteligente
🌦️ Clima
💬 Chatbot turístico
🌐 Español/Inglés
📱 Diseño tipo aplicación

Y ahí sí tendríamos una verdadera plataforma de turismo con IA, no solamente una maqueta.

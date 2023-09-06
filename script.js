document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registroForm");

    document.getElementById("enviar").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const data = {
            nombre,
            apellido,
            fechaNacimiento
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
             console.log(data);
        })
        .catch(error => {
            console.error(error)
        });
    });
});

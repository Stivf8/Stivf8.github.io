document.addEventListener("DOMContentLoaded", () => {
  
    const paginaAnterior = document.getElementById("paginaAnterior");

    paginaAnterior.addEventListener("click", () => {
        window.location.href = "inicio.html";
    });
    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const idU = document.getElementById("idU").value;
        const Nombres  = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const ciudad = document.getElementById("ciudad").value;
        const fechaRegistro = document.getElementById("fecha").value;
    
        const data = {
            idU: idU,
            nombres: Nombres,
            telefono: telefono,
            correo: correo,
            ciudad: ciudad,
            fechaRegistro: fecha
        }
        
        fetch("http://apiprosom.somee.com/api/cliente", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
          .then((response) => {
            // Verificar si la respuesta es exitosa (código de estado 200)
            if (response.ok) {
              console.log("Datos enviados correctamente");

              window.location.href = "inicio.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})


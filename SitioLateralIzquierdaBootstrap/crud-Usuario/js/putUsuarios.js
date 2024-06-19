document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const idU = urlParams.get("idU");
 
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("correo");
  const ciudad = document.getElementById("ciudad");
  const fecha = document.getElementById("fecha");

  fetch("http://apiprosom.somee.com/api/cliente/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        nombre.value = user.Nombres;
        telefono.value = user.Telefono;
        correo.value = user.Correo;
        ciudad.value = user.Ciudad;
        fecha.value = user.FechaIngreso.substring(0,10);

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "idU": id,
      "nombres": nombre.value,
      "telefono": telefono.value,
      "correo": correo.value,
      "ciudad": ciudad.value,
      "fecha": fecha.value
  }


    fetch("http://apiprosom.somee.com/api/cliente/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
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
});

document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const IdUURL = urlParams.get("id");
  console.log(IdUURL);
  const IdU = document.getElementById("IdU");
  const Nombres = document.getElementById("Nombres");
  const Telefono = document.getElementById("Telefono");
  const Correo = document.getElementById("Correo");
  const Ciudad = document.getElementById("Ciudad");
  const FechaRegistro = document.getElementById("FechaRegistro");

  fetch("http://apiprosom.somee.com/api/cliente/" + IdUURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        IdU.value = user.IdU;
        Nombres.value = user.Nombres;
        Telefono.value = user.Telefono;
        Correo.value = user.Correo;
        Ciudad.value = user.Ciudad;
        FechaRegistro.value = user.FechaRegistro.substring(0,10);

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos del cliente", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "IdU": IdU.value,
      "Nombres": Nombres.value,
      "Telefono": Telefono.value,
      "Correo": Correo.value,
      "Ciudad": Ciudad.value,
      "FechaRegistro": FechaRegistro.value

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
          window.location.href = "../view/clienteAdmin.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});

document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const IdVURL = urlParams.get("id");
  console.log(IdVURL);
  const IdV = document.getElementById("IdV");
  const Nombres = document.getElementById("Nombres");
  const Cedula = document.getElementById("Cedula");
  const Telefono = document.getElementById("Telefono");
  const Correo = document.getElementById("Correo");
  const FechaRegistro = document.getElementById("FechaRegistro");

  fetch("http://apiprosom.somee.com/api/vendedor/" + IdVURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        IdV.value = user.IdV;
        Nombres.value = user.Nombres;
       Cedula.value = user.Cedula;
        Telefono.value = user.Telefono;
        Correo.value = user.Correo;
        FechaRegistro.value = user.FechaRegistro.substring(0,10);

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos del vendedor", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "IdV": IdV.value,
      "Nombres": Nombres.value,
      "Cedula": Cedula.value,
      "Telefono": Telefono.value,
      "Correo": Correo.value,
      "FechaRegistro": FechaRegistro.value

  }


    fetch("http://apiprosom.somee.com/api/vendedor/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../view/vendedorAdmin.html"
          
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

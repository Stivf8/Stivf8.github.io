document.addEventListener("DOMContentLoaded", () => {
  
  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const IdV = document.getElementById("IdV").value;
      const Nombres  = document.getElementById("Nombres").value;
      const Cedula = document.getElementById("Cedula").value;
      const Telefono = document.getElementById("Telefono").value;
      const Correo = document.getElementById("Correo").value;
      const FechaRegistro = document.getElementById("FechaRegistro").value;
    
      const data = {
        IdV: IdV,
          Nombres: Nombres,
          Cedula: Cedula,
          Telefono: Telefono,
          Correo: Correo,
          FechaRegistro: FechaRegistro,
      }
      
      fetch("http://apiprosom.somee.com/api/vendedor", {
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
            console.log(data);
          
        window.location.href = "../view/vendedorAdmin.html"

          } else {
            console.error("Error al enviar la solicitud:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
        });
    });


})


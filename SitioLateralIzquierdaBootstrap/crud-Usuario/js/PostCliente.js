document.addEventListener("DOMContentLoaded", () => {
  
  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const IdU = document.getElementById("IdU").value;
      const Nombres  = document.getElementById("Nombres").value;
      const Telefono = document.getElementById("Telefono").value;
      const Correo = document.getElementById("Correo").value;
      const Ciudad = document.getElementById("Ciudad").value;
      const FechaRegistro = document.getElementById("FechaRegistro").value;
    
      const data = {
        IdU: IdU,
          Nombres: Nombres,
          Telefono: Telefono,
          Correo: Correo,
          Ciudad: Ciudad,
          FechaRegistro: FechaRegistro,
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
            console.log(data);
          
        window.location.href = "../view/clienteAdmin.html"

          } else {
            console.error("Error al enviar la solicitud:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
        });
    });


})


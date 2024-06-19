document.addEventListener("DOMContentLoaded", () => {
  
  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const Id_Producto = document.getElementById("Id_Producto").value;
      const Nombre  = document.getElementById("Nombre").value;
      const Cantidad = document.getElementById("Cantidad").value;
      const Precio = document.getElementById("Precio").value;
    
      const data = {
        Id_Producto: Id_Producto,
          Nombre: Nombre,
          Cantidad: Cantidad,
          Precio: Precio
      }
      
      fetch("http://apiprosom.somee.com/api/producto", {
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
          
        window.location.href = "../view/productosAdmin.html"

          } else {
            console.error("Error al enviar la solicitud:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
        });
    });


})


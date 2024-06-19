document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const Id_ProductoURL = urlParams.get("id");
  console.log(Id_ProductoURL);
  const Id_Producto = document.getElementById("Id_Producto");
  const Nombre = document.getElementById("Nombre");
  const Cantidad = document.getElementById("Cantidad");
  const Precio = document.getElementById("Precio");

  fetch("http://apiprosom.somee.com/api/producto/" + Id_ProductoURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        Id_Producto.value = user.Id_Producto;
        Nombre.value = user.Nombre;
        Cantidad.value = user.Cantidad;
        Precio.value = user.Precio;

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "Id_Producto": Id_Producto.value,
      "Nombre": Nombre.value,
      "Cantidad": Cantidad.value,
      "Precio": Precio.value
  }


    fetch("http://apiprosom.somee.com/api/producto/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../view/productosAdmin.html"
          
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

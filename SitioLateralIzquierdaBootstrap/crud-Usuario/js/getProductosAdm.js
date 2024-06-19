document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");

  let inicioRegistros = 1;
  let tamañoMaximoRegistros = 5;

   /*function obtenerProductos(inicioRegistros) {
   fetch(`http://localhost:5001/getUsuarios/${inicioRegistros}/${tamañoMaximoRegistros} `  )
      .then((response) => response.json())
      .then((data) => {
        tabla.innerHTML = ""; 
        data.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                  <td class="text-center" >${user.id}</td>
                  <td class="text-center" >${user.nombre}</td>
                  <td class="text-center" >${user.telefono}</td>
                  <td class="text-center" >${user.email}</td>
                  <td class="text-center" >${user.ciudad}</td>
                  <td class="text-center" >${user.fecha}</td>
                  <td> <button id="editar"  value=${user.id} class="btn btn-warning" >editar</button> </td>
                  <td> <button id="borrar"  value=${user.id} class="btn btn-danger" >eliminar</button> </td>
              `;

          tabla.appendChild(row);
          console.log(data);
        });
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }
  **/
  function obtenerProductos(inicioRegistros) {
    fetch(`http://apiprosom.somee.com/api/producto `  )
       .then((response) => response.json())
       .then((data) => {
         tabla.innerHTML = ""; 
         data.forEach((user) => {
           const row = document.createElement("tr");
           row.innerHTML = `
                   <td class="text-center" >${user.Id_Producto}</td>
                   <td class="text-center" >${user.Nombre}</td>
                   <td class="text-center" >${user.Cantidad}</td>
                   <td class="text-center" >${user.Precio}</td>
                   <td> <button id="editar"  value=${user.Id_Producto} class="btn btn-warning" >editar</button> </td>
                   <td> <button id="borrar"  value=${user.Id_Producto} class="btn btn-danger" >eliminar</button> </td>
               `;
 
           tabla.appendChild(row);
           
         });
         console.log(data);
       })
       .catch((error) =>
         console.error("Error al obtener datos de la API:", error)
       );
   }

  obtenerProductos(inicioRegistros);

  //-----------------------------------------------------------------------------------------------------//
  document.getElementById("paginaAnterior").addEventListener("click", () => {
    if (inicioRegistros > 1) {
      inicioRegistros--;
      obtenerProductos(inicioRegistros);
    }
  });
  //-----------------------------------------------------------------------------------------------------//

  document.getElementById("paginaSiguiente").addEventListener("click", () => {
    inicioRegistros++;
    obtenerProductos(inicioRegistros);
  });

  //-----------------------------------------------------------------------------------------------------//
  tabla.addEventListener("click", (event) => {
    if (event.target.id == "borrar") {
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (confirmacion == true) {
        fetch(`http://apiprosom.somee.com/api/producto/${event.target.value}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar el producto");
            }

            event.target.closest("tr").remove();
          })
          .catch((error) => console.error("Error al eliminar producto:", error));
      }
    } else if (event.target.id == "editar") {
      window.location.href = "../view/editarProducto.html?id=" + event.target.value; // Agrega el parámetro a la URL
    }
    
    
  });
});

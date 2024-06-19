
document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");

  let inicioRegistros = 1;
  let tamañoMaximoRegistros = 5;

  function obtenerProductos(inicioRegistros) {
      fetch(`http://apiprosom.somee.com/api/cliente`)
          .then((response) => response.json())
          .then((data) => {
              tabla.innerHTML = "";
              data.forEach((user) => {
                  const row = document.createElement("tr");
                  row.innerHTML = `
                      <td class="text-center">${user.IdU}</td>
                      <td class="text-center">${user.Nombres}</td>
                      <td class="text-center">${user.Telefono}</td>
                      <td class="text-center">${user.Correo}</td>
                      <td class="text-center">${user.Ciudad}</td>
                      <td class="text-center">${user.FechaRegistro}</td>
                      <td> <button id="editar"  value=${user.IdU} class="btn btn-warning" >editar</button> </td>
                      <td> <button id="borrar"  value=${user.IdU} class="btn btn-danger" >eliminar</button> </td>
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
obtenerProducto(inicioRegistros);
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
  fetch(`http://apiprosom.somee.com/api/cliente/${event.target.value}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }

      event.target.closest("tr").remove();
    })
    .catch((error) => console.error("Error al eliminar usuario:", error));
}
} else if (event.target.id == "editar") {
window.location.href = "../view/editarCliente.html?id=" + event.target.value; // Agrega el parámetro a la URL
}


  });
});

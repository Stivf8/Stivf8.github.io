document.addEventListener("DOMContentLoaded", () => {

  const paginaAnterior = document.getElementById("paginaAnterior");

  paginaAnterior.addEventListener("click", () => {
      window.location.href = "../view/inicio.html";
  });
  

  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var userType = document.getElementById("userType").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      const data = {
          username: username,
          password: password
      };

      // Determinar el endpoint basado en el tipo de usuario
      let endpoint = "";
      if (userType === "cliente") {
          endpoint = "http://apiprosom.somee.com/api/cliente";
      } else if (userType === "administrador") {
          endpoint = "http://apiprosom.somee.com/api/vendedor"; // Endpoint para administrador, ajusta según tu API
      }

      fetch(endpoint, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then((response) => {
          // Verificar si la respuesta es exitosa (código de estado 200)
          if (response.ok) {
              console.log("Datos enviados correctamente");
              return response.json(); // Convertir la respuesta a JSON
          } else {
              throw new Error("Error al enviar la solicitud:", response.status);
          }
      })
      .then((userData) => {
          // Verificar si los datos coinciden con la base de datos
          if (userType === "administrador") {
              // Aquí asumimos que userData contiene los campos Nombres y Cedula
              if (userData.Nombres === username && userData.Cedula === password) {
                  console.log("Credenciales de administrador válidas. Redirigiendo...");
                  window.location.href = "../view/productosAdmin.html"; // Redirigir a productosAdmin.html si las credenciales son válidas
              } else {
                  console.error("Credenciales de administrador inválidas");
              }
          } else {
              // Otros tipos de usuario (cliente, vendedor)
              // Lógica de verificación de credenciales para otros tipos de usuario si es necesario
          }
      })
      .catch((error) => {
          console.error(error);
      });
  });
});

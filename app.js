 // URL del API
 const apiUrl = 'https://api.escuelajs.co/api/v1/users'; // Cambia esta URL a la de tu API

 // Función para consumir el API y mostrar los datos
 async function fetchUserData() {
     try {
         const response = await fetch(apiUrl);
         const users = await response.json();

         // Selecciona el elemento donde se mostrará la lista
         const userList = document.getElementById('user-list');

         // Itera sobre los usuarios y crea los elementos de la lista con los datos recibidos
         users.forEach(user => {
             const userItems = `
                 <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
                 <li class="list-group-item"><strong>Password:</strong> ${user.password}</li>
                 <li class="list-group-item"><strong>Nombre:</strong> ${user.name}</li>                        <li class="list-group-item"><strong>Rol:</strong> ${user.role}</li>
                 <li class="list-group-item"><strong>Avatar:</strong> <img src="${user.avatar}" alt="Avatar" class="img-fluid rounded-circle" style="max-width: 100px;"></li>
             `;

             // Crea un elemento <li> contenedor y agrega los datos del usuario
             const listItem = document.createElement('li');
             listItem.classList.add('list-group-item');
             listItem.classList.add('mb-3');
             listItem.innerHTML = userItems;
             
             // Inserta el elemento en el HTML
             userList.appendChild(listItem);
         });
     } catch (error) {
         console.error('Error al consumir el API:', error);
     }
 }

 // Llama a la función para consumir el API al cargar la página
 window.onload = fetchUserData;
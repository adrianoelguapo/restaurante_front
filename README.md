# Savory - Sistema de Gestión de Restaurante

## 📌 Descripción del Proyecto
Savory es un sistema de gestión para restaurantes que permite a los clientes reservar mesas y realizar pedidos de comida, mientras que los administradores pueden gestionar estas solicitudes a través de un panel de control. 

El proyecto está dividido en dos partes:
1. **Front-end (`restaurante_front`)**: Desarrollado en HTML, CSS y JavaScript (con jQuery) para la interfaz de usuario.
2. **Back-end (`restaurante_back`)**: Construido con Node.js, Express y MongoDB Atlas para manejar las solicitudes y almacenamiento de datos.

---

## 🚀 Tecnologías Utilizadas

### **Front-end:**
- **HTML5**: Para la estructura de las páginas web.
- **CSS3**: Para los estilos y diseño responsivo.
- **JavaScript (jQuery)**: Para la interacción dinámica con la API y manipulación del DOM.

### **Back-end:**
- **Node.js**: Para la ejecución del servidor.
- **Express.js**: Para la creación de las API REST.
- **MongoDB Atlas**: Base de datos NoSQL utilizada para almacenar usuarios, pedidos y reservas de mesas.
- **Morgan y Helmet**: Para seguridad y monitoreo de solicitudes.
- **Cors**: Para permitir comunicación entre el front-end y back-end.
- **Dotenv**: Para la configuración de variables de entorno.

---

## 📂 Estructura del Proyecto

```
Savory/
│── restaurante_front/            # Código del Front-end
│   ├── index.html                # Página de inicio de sesión
│   ├── home.html                 # Página principal
│   ├── about.html                # Página sobre nosotros
│   ├── admin.html                # Página de landeo del admin
│   ├── request-order.html        # Página de pedidos
│   ├── book-table.html           # Página de reservas
│   ├── order-requests.html       # Página de pedidos (Admin)
│   ├── table-requests.html       # Página de reservas (Admin)
│   ├── sign-up.html              # Página de Login
│   ├── style.css                 # Estilos generales
│   ├── index.js                  # Lógica de la página de Login
│   ├── book-table.js             # Lógica de reservas
│   ├── request-order.js          # Gestión de pedidos
│   ├── order-requests.js         # Gestión de pedidos (Admin)
│   ├── table-requests.js         # Gestión de reservas (Admin)
│   ├── sign-up.js                # Lógica de crear usuario nuevo
│   ├── logout.js                 # Lógica de cerrar sesión
│   ├── README.md                 # Documentación del proyecto
│
│── restaurante_back/             # Código del Back-end
│   ├── api/
│   │   ├── app.js                # Configuración del servidor y API
│   │   ├── index.js              # Entrada del servidor
│   │   ├── middlewares.js        # Gestión de errores y seguridad
│   ├── .env                      # Variables de entorno
│
```


### **4️⃣ Funcionalidades Disponibles**
✅ **Clientes:**
- Pueden registrarse e iniciar sesión.
- Pueden reservar mesas desde `book-table.html`.
- Pueden realizar pedidos desde `request-order.html`.

✅ **Administradores:**
- Pueden ver y gestionar pedidos desde `order-requests.html`.
- Pueden aprobar o rechazar reservas de mesas desde `table-requests.html`.


## 📌 API Endpoints
### **Usuarios**
- `POST /api/signup` → Registrar un usuario.
- `POST /api/login` → Iniciar sesión.

### **Pedidos**
- `GET /api/orders` → Obtener todos los pedidos.
- `POST /api/order` → Crear un pedido.
- `DELETE /api/order/:id` → Eliminar un pedido.

### **Reservas de Mesas**
- `GET /api/table-requests` → Obtener todas las reservas de mesas.
- `POST /api/solicitar-mesa` → Crear una nueva reserva.
- `DELETE /api/table-request/:id` → Eliminar una reserva.
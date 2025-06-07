# 🛒 Proyecto Final - Backend Ecommerce (Coderhouse)

Este es un servidor backend profesionalizado para un sistema de ecommerce, desarrollado con Node.js, Express, MongoDB y Passport. El proyecto incluye autenticación, autorización, creación de productos, manejo de carritos, generación de tickets, control de stock, tests automatizados, documentación con Swagger e imagen Docker publicada.

---

##  📦  Trabajo Final Backend III - Mejoras aplicadas

### Documentación Swagger
Se documentó el módulo /api/users con Swagger, incluyendo:

- GET /api/users/: Obtener todos los usuarios.
- GET /api/users/current: Obtener usuario autenticado simulado.

[Ruta para acceder a la documentación:](http://localhost:8080/api-docs)

---

## ✅ Tests funcionales

Se implementaron pruebas funcionales sobre el router adoption.router.js utilizando Jest + Supertest:

- GET /api/adoptions/: Lista todas las adopciones
- GET /api/adoptions/:aid: Devuelve adopción por ID
- POST /api/adoptions/:uid/:pid: Crea una nueva adopción simulada

### 🚦 Ejecución de tests

Para ejecutar la suite de tests funcionales, utiliza el siguiente comando en la raíz del proyecto:

```bash
npm run test
```

Esto ejecutará todas las pruebas definidas con Jest y Supertest, permitiéndote validar el correcto funcionamiento de las rutas y funcionalidades principales.

---

## Dockerización del proyecto

Se creó un archivo Dockerfile que permite generar una imagen funcional del proyecto y ejecutarla en un contenedor.

### 🐳 Construcción y despliegue con Docker

**1. Construir la imagen Docker:**
```bash
docker build -t conecta-bien-api .
```

**2. Ejecutar el contenedor con variables de entorno personalizadas:**
```bash
docker run -d \
    --name conecta-bien-api \
    -p 8080:8080 \
    -e MONGO_URI="mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombreBaseDeDatos>?retryWrites=true&w=majority" \
    conecta-bien-api
```

> 💡 Reemplaza `"TU_STRING_DE_CONEXIÓN"` por tu cadena de conexión de MongoDB Atlas o local.

**3. Verifica que la API esté corriendo en** [http://localhost:8080](http://localhost:8080)

**4. Logs del contenedor (opcional):**
```bash
docker logs -f conecta-bien-api
```

[Imagen publicada en DockerHub:](https://hub.docker.com/r/tomimoure08/conecta-bien-api)

---

## 🧪 Mocking de datos (Backend 3 - Primera entrega)

- Nueva ruta: `/api/mocks/mockingusers` → genera 50 usuarios falsos (no se guardan).
- Nueva ruta: `/api/mocks/generateData?users=50&pets=0` → inserta los mocks en MongoDB Atlas.
- Compatible con el modelo de usuarios actual.

---

## 🚀 Tecnologías utilizadas

- Node.js + Express
- MongoDB + Mongoose
- Passport (estrategias local y JWT)
- JSON Web Tokens (JWT)
- Swagger + swagger-jsdoc
- Jest + Supertest
- Docker
- DAO + DTO + Repository pattern
- Variables de entorno (.env)

---

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repo>
cd <nombre-del-proyecto>
```

2. Instalar dependencias:
```bash
npm install
```

4. Ejecutar en modo desarrollo:
```bash
npm run dev
```

---

## 📄 Variables de entorno (.env)

PORT=8080
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombreBaseDeDatos>?retryWrites=true&w=majority

---

## 🧪 Funcionalidades principales

- Registro y login de usuarios (`/api/sessions/register` y `/api/sessions/login`)
- Autenticación con Passport + JWT
- Rol Admin para crear/editar/eliminar productos
- Rol User para agregar al carrito y finalizar compra
- Creación de ticket al finalizar compra
- Persistencia en MongoDB (con acceso abierto configurado a `0.0.0.0/0`)
- Estructura escalable: DAO, DTO, controller, service

---

## 🧑‍💻 Desarrollado por

Tomás Moure

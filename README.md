# 🛒 Proyecto Final - Backend Ecommerce (Coderhouse)

Este es un servidor backend profesionalizado para un sistema de ecommerce, desarrollado con Node.js, Express, MongoDB y Passport. El proyecto incluye autenticación, autorización, creación de productos, manejo de carritos, generación de tickets y control de stock.

---

## 🚀 Tecnologías utilizadas

- Node.js + Express
- MongoDB + Mongoose
- Passport (estrategias local y JWT)
- JSON Web Tokens (JWT)
- DAO + DTO + Repository pattern
- Variables de entorno (.env)
- Nodemailer (no implementado en esta entrega)

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
MONGO_URI=mongodb+srv://tomimoure8:2N0VrSAof7Iyedri@cluster0.ivyka1s.mongodb.net/conectaBienDB?retryWrites=true&w=majority&appName=Cluster0

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

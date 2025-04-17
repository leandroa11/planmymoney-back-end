# Gestión de Gastos e Ingresos - Backend

## Descripción

Este es el backend de la aplicación **Gestión de Gastos e Ingresos**, encargado de manejar la lógica de negocio y la persistencia de datos. Proporciona una API RESTful para la gestión de usuarios, ingresos, gastos y saldos financieros.

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript.
- **Express.js** - Framework para construir API RESTful.
- **MongoDB + Mongoose** - Base de datos NoSQL para almacenar la información financiera.
- **JWT (JSON Web Token)** - Para autenticación segura.
- **bcrypt.js** - Para el cifrado de contraseñas.
- **CORS** - Middleware para permitir solicitudes desde diferentes dominios.

## Instalación y Configuración

1. Clona el repositorio:
   ```sh
   git clone https://github.com/usuario/gestion-gastos-backend.git
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd gestion-gastos-backend
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Configura las variables de entorno creando un archivo `.env`:
   ```sh
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/gestion_gastos
   JWT_SECRET=supersecreto
   ```
5. Inicia el servidor:
   ```sh
   npm start
   ```

## Endpoints Principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/register` | Registra un nuevo usuario |
| POST | `/api/auth/login` | Inicia sesión y devuelve un token JWT |
| GET | `/api/user/:id` | Obtiene información del usuario |
| PUT | `/api/user/:id` | Actualiza datos del usuario |
| GET | `/api/finanzas/:id` | Obtiene los datos financieros de un usuario |
| PUT | `/api/finanzas/:id` | Actualiza los datos financieros de un usuario |

## Uso

1. Registra un usuario enviando una solicitud a `/api/auth/register`.
2. Inicia sesión en `/api/auth/login` para obtener un token.
3. Usa el token para autenticar solicitudes a los endpoints protegidos.
4. Maneja ingresos y gastos con los endpoints de finanzas.

## Documentación Relacionada

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)

## Autor

Leandro Angulo
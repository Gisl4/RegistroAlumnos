# Proyecto de Registro de Alumnos

Este proyecto es una aplicación CRUD construida con Node.js en el backend y MySQL como base de datos para la gestión de registros de alumnos.

## Requisitos previos

- Node.js (versión recomendada: >= 14)
- MySQL Server

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL del repositorio>
   cd <directorio_del_proyecto>

2. **Instalar dependencias En el directorio raíz del proyecto, ejecuta:**
   ```bash
   npm install

## Configuración de la Base de Datos

1. **Crear la base de datos en MySQL**
   Accede a MySQL con tu usuario root o un usuario con permisos y ejecuta los siguientes comandos para crear la base de datos y la tabla de alumnos:
   ```bash
   CREATE DATABASE registroAlumnos;
    USE registroAlumnos;
    
    CREATE TABLE alumnos(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        address VARCHAR(255),
        phone VARCHAR(25),
        email VARCHAR(100),
        birthdate DATE 
    );
    
    SELECT * FROM alumnos;
    ****

2. **Configurar las credenciales de la base de datos**
   Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno, reemplazando con tus credenciales de acceso a MySQL:
   ```bash
   DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=registroAlumnos
   
## Ejecución del Proyecto
  ```bash
    npm run dev

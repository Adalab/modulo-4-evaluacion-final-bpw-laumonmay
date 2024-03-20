// 1. IMPORTACIÓN DE BIBLIOTECAS //
//================================
const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql2/promise');
require ('dotenv').config();

// 2. CREACIÓN DEL SERVIDOR //
//===========================
const server = express();

// 3. CONFIGURACIÓN DEL SERVIDOR //
//================================
server.use (express.json({limit:'25mb'}));
server.use (cors());

// 4. ARRANCAMOS EL SERVIDOR EN UN PUERTO //
//=========================================
const port = 3000;

server.listen(port, () => {
    console.log(`El servidor esta iniciado en <http://localhost:${port}>`);
})

// 5. CREACIÓN DE LA CONEXIÓN A MYSQL //
//=====================================

async function getConnection() {
    const connection = await mysql.createConecction ({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_SCHEMA,
    });

    await connection.connect();
    console.log(`conexión establecida con la base de datos (identificador =${connection.threadId})`);

    return connection;

}








// 6. ENDPOINTS //
//=============================
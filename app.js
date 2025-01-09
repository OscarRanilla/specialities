//creacion y configuracion de un servidor express

const express = require('express');
const app = express();
const PORT = 3000;

//Datos de usuarios 

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// Función para filtrar usuarios por especialidad
function filterUsersBySpecialty(specialty) {
    return usersData.filter((user) => user.specialty.toLowerCase() === specialty.toLowerCase());
}


//creacion de rutas

//RUTA PAGINA PRINCIPAL 

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head><title>Especialidades</title></head>
        <body>
        <h1>Bienvenidos</h1>
        <h2>Elige una especialidad:</h2>
        <nav>
            <a href="/marketing">Marketing</a> |
            <a href="/developers">Developers</a> |
            <a href="/QAs">QAs</a> |
            <a href="/ventas">Ventas</a>
        </nav>
        </body>
    </html>
    `);
});

// Ruta para especialidades dinámicas

app.get('/:specialty', (req, res) => {
    const specialty = req.params.specialty;
    const users = filterUsersBySpecialty(specialty);
    if (users.length > 0) {
    res.send(`
        <html>
        <head><title>${specialty.toUpperCase()}</title></head>
        <body>
            <h1>Especialidad: ${specialty.toUpperCase()}</h1>
            <p>Número de personas: ${users.length}</p>
            <ul>
            ${users.map((user) => `<li>${user.name}, ${user.age} años</li>`).join('')}
            </ul>
            <nav>
                <a href="/">Volver al inicio</a>
            </nav>
        </body>
        </html>
    `);
    } else {
    res.status(404).send(`
        <html>
        <head><title>404 - No Encontrado</title></head>
        <body>
            <h1>Error 404</h1>
            <p>La especialidad "${specialty}" no tiene datos registrados.</p>
            <nav>
                <a href="/">Volver al inicio</a>
            </nav>
        </body>
        </html>
    `);
    }
});

// Manejo de errores 404 para rutas no definidas
app.use((req, res) => {
    res.status(404).send(`
    <html>
        <head><title>404 - No Encontrado</title></head>
        <body>
        <h1>Error 404</h1>
        <p>La página solicitada no existe.</p>
        <nav>
            <a href="/">Volver al inicio</a>
        </nav>
        </body>
    </html>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
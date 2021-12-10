# pokemon-lazy-game

## Requisitos

1. Tener instalado [git](https://git-scm.com/downloads)
2. Tener instalado [Node.js](https://nodejs.org/en/download/)

## 1. Clonar el repositorio

En una terminal ejecuta el siguiente comando:

```
git clone https://github.com/Niriot/pokemon-lazy-game.git
```

## 2. Configurar tu base de datos SQL Server local

Con ayuda de tu herramienta para configurar y administrar bases de datos SQL Server, tales como SQL Server Management Studio (SSMS) o Azure Data Studio, realiza lo siguiente:

1. Crea tu base de datos
2. Agrega un nuevo usuario con permisos de administrador
3. Corre el script que esta dentro de '../pokemon-lazy-game/back/scripts/InitDatabase.sql' para la creacion y configuracion de tablas.
4. Importa el archivo pokemons.csv (creado a partir del script de python) a una nueva tabla llamada 'pokemons'.

`Nota: Los datos de conexion de base de datos tales como tu usuario y contrasenia, ademas del host y el nombre de la base de datos los utilizaras mas adelante.`

## 3. Instalar dependencias del proyecto

Usando la terminal, dirigete dentro de tu carpeta del repositorio '../pokemon-lazy-game' y corre el siguiente comando:

```
npm run inst-all
```

## 4. Correr servidor (backend)

Crea un nuevo archivo llamado .env para usar las variables de entorno, donde copiaras lo que esta en el archivo '../pokemon-lazy-game/back/.env-example' y pondras los valores que tu creaste anteriormente en la [configuracion de tu base de datos SQL Server local](#2-configurar-tu-base-de-datos-sql-server-local).

Usando la terminal dentro de la carpeta '../pokemon-lazy-game', corre el siguiente comando para activar el servidor:

```
npm run back
```

Ahora, podras dirigirte en tu navegador a http://localhost:8080/. Asegurate que te aparezca la leyenda `"Corriendo el servidor de pokemon-lazy-game..."`

## 5. Correr cliente (frontend)

Usando la terminal dentro de la carpeta '../pokemon-lazy-game', corre el siguiente comando para activar el servidor

```
npm run front
```

Ahora, podras dirigirte en tu navegador a http://localhost:3000/ y

`¡comenzar con esta increible aventura!`

```Para temas de testing dentro del frontend, puedes usar las siguientes credenciales:
Username: user
Password: pass123
```

# IMPORTANTE

Puedes ver una demostracion del frontend [aqui.](https://youtu.be/UZtOppxvYE0)

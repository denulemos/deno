# Deno ❤️

### ¿Qué es Deno?

NodeJS existe hace 10 años aprox y Deno se empezo a crear hace 2 años, en donde NodeJS no tenia aun promises. Deno fue desarollado por el mismo autor de Node, ofrece lo mismo pero de otra forma.
Todavia no es tan madura como Node pero probablemente sea su reemplazo en el futuro.

* Es un runtime para Javascript y Typescript sin segundas configuraciones.
* Esta basado en el lenguaje Rust.
* Es seguro por defecto.
* No hay acceso a archivos, red o entorno a menos que este explicitamente habilitado.

### ¿Cómo instalar Deno?

Shell (Mac, Linux):

```bash flex overflow-y-auto p-4
$curl -fsSL https://deno.land/x/install/install.sh | sh
```

PowerShell (Windows):

```bash flex overflow-y-auto p-4
$iwr https://deno.land/x/install/install.ps1 -useb | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno) (Mac):

```bash flex overflow-y-auto p-4
$brew install deno
```

[Chocolatey](https://chocolatey.org/packages/deno) (Windows):

```bash flex overflow-y-auto p-4
$choco install deno
```

[Scoop](https://scoop.sh/) (Windows):

```bash flex overflow-y-auto p-4
$scoop install deno
```

Build and install from source using [Cargo](https://crates.io/crates/deno)

```bash flex overflow-y-auto p-4
$cargo install deno
```

### Crear proyecto Deno

1. Creamos un index.ts.
2. Para ejecutar el archivo hacemos `deno run index.ts` parados sobre el archivo del proyecto.

### Proyectos

1. Un simple "Hola mundo" en consola
2. Un proyecto donde pasamos un String a base64 y viceversa.
3. Un proyecto donde encriptamos una contraseña usando la herramienta **bcrypt**, usado para guardar passwords en bases de datos.
   Para correr este proyecto necesitamos correr un `deno run --unstable --allow-net index.ts` para permitirle acceder a la net.
4. Consumir una API externa con Fetch. Lo llamamos de la siguiente manera pasando al servicio como argumento `deno run --allow-net=jsonplaceholder.typicode.com index.ts https://jsonplacerholder.typicode.com/todos/1` definimos el Host al cual queremos dar acceso.
5. Uso de variables de entorno en Deno. Para ejecutar debemos dar permisos de lectura y permisos a las variables de entorno `deno run --allow-read --allow-env index.ts`
6. Cronjobs en Deno, es decir, tareas programadas, se usa para llevar a cabo tareas periodicas (Como chequear en la base de datos que el usuario expiró por ejemplo) `deno run --allow-write index.ts`, en este proyecto creamos un archivo por minuto.
7. Un pequeño CRUD hecho en Deno, de Heroes, handlea todas las peticiones HTTP posibles a nuestro servidor Deno.
8. Leer archivos con Deno. Hay un pequeño archivo para consumir la API en postman.

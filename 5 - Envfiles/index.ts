//Importamos denv, para usar el archivo de variables de entorno que se encuentra en la carpeta raiz
import "https://deno.land/x/denv/mod.ts";
//El nombre de la app sera el nombre definido en APP_NAME en el archivo de entorno .env
const appName = await Deno.env.get('APP_NAME') as string;
console.log(appName);

//EJECUTAR -----> deno run --allow-read --allow-env index.ts
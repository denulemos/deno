//Pasamos el file por parametros al ejecutar
const file = await Deno.open(Deno.args[0]);
//Mostrar el contenido del archivo
await Deno.copy(file, Deno.stdout);
//Cerramos el archivo
file.close();

//EJECUTAR -> deno run --allow-read index.ts password.txt
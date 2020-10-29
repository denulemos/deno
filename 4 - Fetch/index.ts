//Pasar variables al ejecutar Deno ---> deno run index.ts google.com
const url = Deno.args[0];
//Le hacemos un fetch a la url
const res = await fetch(url);
//Converimos la respuesta en un ArrayBuffer para mostrarlo en consola
const body = await new Uint8Array(await res.arrayBuffer());
//Escribimos en consola la respuesta del fetch hecho
await Deno.stdout.write(body);

// EJECUTAR ---> deno run --allow-net=jsonplaceholder.typicode.com index.ts https://jsonplacerholder.typicode.com/todos/1
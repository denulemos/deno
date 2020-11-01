//Instancia aplicacion
import { Application } from "https://deno.land/x/abc/mod.ts";
import { create, findAll, findOne, remove } from "./handler.ts";

const app = new Application();

//Cada metodo HTTP va a llamar a un metodo distinto del handler
app
    .get('/', findAll)
    .get('/:id', findOne)
    .post('/', create)
    .delete('/:id', remove)
    .start({ port: 5000 }); //Puerto 5000

console.log("server listening on http://localhost:5000");

// EJECUTAR SERVIDOR -->  deno run --allow-net index.ts
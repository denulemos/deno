import { Application } from "https://deno.land/x/abc/mod.ts";
import { create, findAll, findOne, remove } from "./handler.ts";

const app = new Application();

app
    .get('/', findAll)
    .get('/:id', findOne)
    .post('/', create)
    .delete('/:id', remove)
    .start({ port: 5000 });

console.log("server listening on http://localhost:5000");
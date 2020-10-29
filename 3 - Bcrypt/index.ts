//Bcrypt se usa para guardar contraseñas en BD
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

//Hasheamos un String
const hash: string = await bcrypt.hash("SUPER DENO PASSWORD 🦕");
//Imprimimos el hash resultante
console.log(hash);

//EJECUTAR ---->  deno run --unstable --allow-net index.ts
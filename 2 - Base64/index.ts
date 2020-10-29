//Importamos todo de base64 desde el servidor de deno, la URL posee codigo TS para usar en este codigo. 
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

// Definimos un String en base64
const b64: string = base64.fromUint8Array(
    new TextEncoder().encode("Datos para generar el BASE64")
);
console.log(b64);

//Devolvemos de base64 a String
const buf: Uint8Array = base64.toUint8Array(b64);
//Podemos utilizar await sin el async necesariamente
await Deno.stdout.write(buf);
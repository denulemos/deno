//Importamos Cron de Deno
import { Cron } from "https://deno.land/x/crontab/cron.ts";

const cron = new Cron();

//Por minuto se creará un archivo con la fecha de hoy llamado now.txt
cron.add('* * * * *', () => {
    console.log("CREANDO O ACTUALIZANDO UN ARCHIVO...");
    //Creamos un archivo, DEBEMOS dar permisos de escritura en el script con --allow-write
    Deno.writeTextFileSync('./now.txt', `🦕 ${Date.now()} 🦕`);
});

cron.start();

//EJECUTAR -----> deno run --allow-write index.ts
import type { HandlerFunc } from "https://deno.land/x/abc/mod.ts";
import { Hero, IHero } from "./hero.ts";

//array de heroes y lo inicializamos vacio
let heroes: Hero[] = [];

//Manejamos todas las peticiones a nuestro servidor 

//Traemos a todos los heroes
export const findAll: HandlerFunc = () => heroes;

//Buscamos al heroe por ID pasado por params
export const findOne: HandlerFunc = (c) => {
    const { id } = c.params as { id: string };
    return heroes.find((hero) => hero.id.toString() === id);
}

export const create: HandlerFunc = async (c) => {
    const { name } = await c.body<IHero>();
    const hero = new Hero({ name });
    heroes.push(hero);
    return hero;
}

export const remove: HandlerFunc = async (c) => {
    const { id } = c.params as unknown as { id: string };
    const heroId = parseInt(id);
    heroes = heroes.filter((hero) => {
        return hero.id !== heroId;
    });
    return `Hero with id ${id} removed`;
}
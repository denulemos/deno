let heroId = 1;
//Generar ID del heroe
function genHeroId(): number {
    return heroId++; //Incrementamos el ID a medida que vamos creando heroes
}

//Heroe tiene un id y un nombre
export class Hero {
    id: number;
    name: string;
    constructor(hero: IHero) {
        this.id = genHeroId();
        this.name = hero.name;
    }
}

export interface IHero {
    name: string
}
let heroId = 1;
function genHeroId(): number {
    return heroId++;
}

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
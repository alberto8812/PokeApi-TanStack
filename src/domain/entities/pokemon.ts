

export class PokemonEntity {
    public id:number;
    public name:string;
    public types:string[];
    public avatar:string;
    public sprites:string[];
    constructor(
        id:number,
        name:string,
        types:string[],
        avatar:string,
        sprites:string[]

    ){
        this.id=id;
        this.name=name;
        this.types=types;
        this.avatar=avatar;
        this.sprites=sprites;
    }
}

export interface Pokemon {
    id:number;
    name:string;
    types:string[];
    avatar:string;
    sprites:string[];
}
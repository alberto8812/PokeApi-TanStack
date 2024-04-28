export class PokemonEntity {
  constructor(
    public id: number,
    public name: string,
    public types: string[],
    public avatar: string,
    public sprites: string[],
  ) {}

  static fromOjbt(object: {[key: string]: any}) {
    const {id, name, types, avatar, sprites} = object;

    return new PokemonEntity(id, name, types, avatar, sprites);
  }
}

// export interface Pokemon {
//   id: number;
//   name: string;
//   types: string[];
//   avatar: string;
//   sprites: string[];
// }

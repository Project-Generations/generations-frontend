export interface Pokemons {
  pokeList: Pokemon[];
}

export interface Type {
  id: number;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  spriteUrl: string;
  types: Type[];
}

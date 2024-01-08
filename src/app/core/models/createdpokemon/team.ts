import { CreatedPokemon } from './createdpokemon';

export type Root = Root2[];

export interface Root2 {
  id: number;
  name: string;
  format: string;
}

export interface Team {
  id: number;
  name: string;
  format: string;
  pokemonTeam: CreatedPokemon[];
}

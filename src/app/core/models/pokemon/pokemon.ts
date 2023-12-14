import { Mfe } from './move';
import { Ability } from './ability';
import { Form } from './form';
import { Stat } from './stat';
import { Type } from './type';

export interface Pokemons {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  stats: Stat[];
  types: Type[];
  weight: number;
}

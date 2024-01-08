import { EvSpread } from './EvSpread';
import { HeldItem } from './HeldItem';
import { IvSpread } from './IvSpread';

export interface CreatedPokemon {
  id: number;
  name: string;
  level: number;
  happiness: number;
  ability: string;
  isShiny: boolean;
  gender: string;
  heldItem: HeldItem;
  evSpread: EvSpread;
  ivSpread: IvSpread;
  moves: any[];
}

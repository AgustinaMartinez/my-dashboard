export interface Result {
  name: string;
  url: string;
}

export interface PokemonsList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Pokemon {
  id: string;
  name: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: PokemonAbility[];
  forms: Pokemon[];
  sprites: PokemonSprites;
  location_area_encounters: string;
  moves: PokemonMove[];
  types: PokemonType[];
}

export interface PokemonMove {
  move: Move;
}

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  type: Type;
}

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface Type {
  id: string;
  name: string;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Pokemon;
}

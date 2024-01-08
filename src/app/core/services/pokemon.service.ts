import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { Pokemon, Pokemons } from '../models/pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPokemons(): Observable<Pokemons> {
    return this.httpClient.get<Pokemons>(
      `${env.externalApiUrl}/pokemon?limit=1300&offset=0`
    );
  }

  getSinglePokemon(pokemonName: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `${env.externalApiUrl}/pokemon/${pokemonName}`
    );
  }

  //TODO: Implement these HTTP calls
  getPokemonByType(typeId: number) {}
}

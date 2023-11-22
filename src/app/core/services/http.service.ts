import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiBaseUrl = 'https://localhost:7166/api';
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.apiBaseUrl}/pokemon`);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiBaseUrl}/pokemon/${pokemonId}`);
  }

  //TODO: Implement these HTTP calls
  getPokemonByType(typeId: number) {}
  getItems() {}
  getItemById(itemId: number) {}
}

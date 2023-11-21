import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http.get('https://localhost:7166/api/pokemon');
  }

  getPokemonById(pokemonId: string) {
    return this.http.get(`https://localhost:7166/api/pokemon/${pokemonId}`);
  }
}

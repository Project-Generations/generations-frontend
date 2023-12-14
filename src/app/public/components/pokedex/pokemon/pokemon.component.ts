import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { take } from 'rxjs';
import { Pokemons } from '../../../../core/models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemons;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pokemonService
      .getAllPokemons()
      .pipe(take(1))
      .subscribe((data) => {
        this.pokemons = data;
      });
  }
}

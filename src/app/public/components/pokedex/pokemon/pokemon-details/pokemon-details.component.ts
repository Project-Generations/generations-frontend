import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../../../core/services/pokemon.service';
import { take } from 'rxjs';
import { Pokemon } from '../../../../../core/models/pokemon/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  routeParam: string;
  pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
    this.getSinglePoke();
  }

  getRouteParams() {
    if (!this.routeParam) {
      return (this.routeParam = this.activatedRoute.snapshot.params['name']);
    } else {
      throw Error('Route params are null');
    }
  }

  getSinglePoke() {
    this.pokemonService
      .getSinglePokemon(this.routeParam)
      .pipe(take(1))
      .subscribe((data) => {
        this.pokemon = data;
      });
  }
}

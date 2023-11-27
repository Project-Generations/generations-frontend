import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../../../core/models/pokemon';
import { PokemonService } from '../../../../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  routeParam: number = 0;
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
      return (this.routeParam = this.activatedRoute.snapshot.params['id']);
    } else {
      throw Error('Route params are null');
    }
  }

  getSinglePoke() {
    this.pokemonService.getPokemonById(this.routeParam).subscribe((data) => {
      this.pokemon = data;
    });
  }
}

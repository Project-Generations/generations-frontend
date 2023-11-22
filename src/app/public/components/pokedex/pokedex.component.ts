import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Pokemons } from '../../../core/models/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemons;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpService.getAllPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }
}

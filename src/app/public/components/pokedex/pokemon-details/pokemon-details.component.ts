import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../../core/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  routeParam: number = 0;
  pokemon: Pokemon;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeParam = this.activatedRoute.snapshot.params['id'];
    this.httpService.getPokemonById(this.routeParam).subscribe((data) => {
      this.pokemon = data;
    });
  }
}

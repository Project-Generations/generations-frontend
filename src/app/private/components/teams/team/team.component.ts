import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../core/services/team.service';
import { Team } from '../../../../core/models/createdpokemon/team';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../../core/models/pokemon/pokemon';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  routeParam: number;
  team: Team;
  pokemons: Pokemon[];

  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
    this.getData();
  }

  getRouteParams() {
    if (!this.routeParam) {
      return (this.routeParam = this.activatedRoute.snapshot.params['id']);
    } else {
      throw Error('Route params are null');
    }
  }

  getData() {
    this.teamService
      .getTeamById(this.routeParam)
      .pipe(take(1))
      .subscribe((data) => {
        this.team = data;
      });
  }
}

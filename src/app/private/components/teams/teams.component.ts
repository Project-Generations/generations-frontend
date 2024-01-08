import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../core/services/team.service';
import { Root } from '../../../core/models/createdpokemon/team';
import { take } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent implements OnInit {
  teams: Root;
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.teamService
      .GetTeams()
      .pipe(take(1))
      .subscribe((data) => {
        this.teams = data;
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, Root } from '../models/createdpokemon/team';
import { environment as env } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private httpClient: HttpClient) {}

  GetTeams(): Observable<Root> {
    return this.httpClient.get<Root>(`${env.generationsBackend}/team`);
  }

  getTeamById(teamId: number): Observable<Team> {
    return this.httpClient.get<Team>(
      `${env.generationsBackend}/team/${teamId}`
    );
  }
  DeleteTeam(teamId: number) {
    return this.httpClient.delete(
      `${env.generationsBackend}/team/delete/${teamId}`
    );
  }
  CreateTeam() {}
}

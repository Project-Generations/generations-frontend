import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeambuilderComponent } from './components/teambuilder/teambuilder.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/teams/team/team.component';
import { EditTeamComponent } from './components/teams/team/edit-team/edit-team.component';
import { CreateTeamComponent } from './components/teams/team/create-team/create-team.component';

@NgModule({
  declarations: [DashboardComponent, TeambuilderComponent, TeamsComponent, TeamComponent, EditTeamComponent, CreateTeamComponent],
  imports: [CommonModule, PrivateRoutingModule],
  bootstrap: [PrivateComponent],
})
export class PrivateModule {}

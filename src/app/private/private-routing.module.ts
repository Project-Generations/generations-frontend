import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeambuilderComponent } from './components/teambuilder/teambuilder.component';
import { TeamComponent } from './components/teams/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EditTeamComponent } from './components/teams/team/edit-team/edit-team.component';
import { CreateTeamComponent } from './components/teams/team/create-team/create-team.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'teambuilder', component: TeambuilderComponent },
  {
    path: 'teams',
    children: [
      { path: '', component: TeamsComponent },
      {
        path: ':id',
        children: [
          { path: '', component: TeamComponent },
          { path: 'edit', component: EditTeamComponent },
          { path: 'create', component: CreateTeamComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

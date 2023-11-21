import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeambuilderComponent } from './components/teambuilder/teambuilder.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'teambuilder', component: TeambuilderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

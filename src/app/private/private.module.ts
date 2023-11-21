import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeambuilderComponent } from './components/teambuilder/teambuilder.component';

@NgModule({
  declarations: [DashboardComponent, TeambuilderComponent],
  imports: [CommonModule, PrivateRoutingModule],
  bootstrap: [PrivateComponent],
})
export class PrivateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeambuilderComponent } from './components/teambuilder/teambuilder.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, TeambuilderComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
  bootstrap: [PrivateComponent],
})
export class PrivateModule {}

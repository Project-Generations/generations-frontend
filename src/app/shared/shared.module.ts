import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavpanelComponent } from './components/navpanel/navpanel.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NotfoundComponent, NavbarComponent, NavpanelComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, NavpanelComponent],
})
export class SharedModule {}

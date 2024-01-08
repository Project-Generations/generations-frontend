import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NotfoundComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailsComponent } from './components/pokedex/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'pokedex',
    children: [
      { path: '', component: PokedexComponent, pathMatch: 'full' },
      { path: ':id', component: PokemonDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

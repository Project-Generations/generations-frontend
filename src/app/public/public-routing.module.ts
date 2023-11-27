import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailsComponent } from './components/pokedex/pokemon/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './components/pokedex/pokemon/pokemon.component';
import { ItemComponent } from './components/pokedex/item/item.component';
import { ItemDetailsComponent } from './components/pokedex/item/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'pokedex',
    children: [
      { path: '', component: PokedexComponent },
      {
        path: 'pokemon',
        children: [
          { path: '', component: PokemonComponent, pathMatch: 'full' },
          { path: ':id', component: PokemonDetailsComponent },
        ],
      },
      {
        path: 'items',
        children: [
          { path: '', component: ItemComponent },
          { path: ':id', component: ItemDetailsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

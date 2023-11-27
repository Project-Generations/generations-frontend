import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonDetailsComponent } from './components/pokedex/pokemon/pokemon-details/pokemon-details.component';
import { NgOptimizedImage } from '@angular/common';
import { ItemDetailsComponent } from './components/pokedex/item/item-details/item-details.component';
import { PokemonComponent } from './components/pokedex/pokemon/pokemon.component';
import { ItemComponent } from './components/pokedex/item/item.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PokedexComponent,
    PokemonDetailsComponent,
    ItemComponent,
    ItemDetailsComponent,
    PokemonComponent,
    ItemComponent,
  ],
  imports: [CommonModule, NgOptimizedImage, PublicRoutingModule],
  bootstrap: [PublicComponent],
})
export class PublicModule {}

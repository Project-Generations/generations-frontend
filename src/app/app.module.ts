import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [AppComponent, PrivateComponent, PublicComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

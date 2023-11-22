import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PrivateComponent, PublicComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}

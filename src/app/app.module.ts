import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { SharedModule } from './shared/shared.module';
import { authInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent, PrivateComponent, PublicComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

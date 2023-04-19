import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CreaPersonaggioComponent } from './components/crea-personaggio/crea-personaggio.component';
import { VisualizzaPersonaggiComponent } from './components/visualizza-personaggi/visualizza-personaggi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreaPersonaggioComponent,
    VisualizzaPersonaggiComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

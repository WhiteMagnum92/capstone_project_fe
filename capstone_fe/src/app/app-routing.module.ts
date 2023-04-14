import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VisualizzaPersonaggiComponent } from './components/visualizza-personaggi/visualizza-personaggi.component';
import { CreaPersonaggioComponent } from './components/crea-personaggio/crea-personaggio.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path:'', component: SignupComponent,
  },
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'dashboard/:id', component: DashboardComponent,
  },
  {
      path:'crea-personaggio', component: CreaPersonaggioComponent,
  },
  {
    path:'visualizza-personaggi', component: VisualizzaPersonaggiComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

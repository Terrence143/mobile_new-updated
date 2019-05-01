import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },  { path: 'pets', loadChildren: './pages/pets/pets.module#PetsPageModule' },
  { path: 'petreg', loadChildren: './pages/pets/petreg/petreg.module#PetregPageModule' },
  { path: 'petupdate', loadChildren: './pages/pets/petupdate/petupdate.module#PetupdatePageModule' },



  //{ path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
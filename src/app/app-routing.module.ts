import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'registro-usuarios',
    loadChildren: () =>
      import(
        './pages/registros/registro-usuarios/registro-usuarios.module'
      ).then((m) => m.RegistroUsuariosPageModule),
  },
  {
    path: 'registro-cultivos',
    loadChildren: () =>
      import(
        './pages/registros/registro-cultivos/registro-cultivos.module'
      ).then((m) => m.RegistroCultivosPageModule),
  },
  {
    path: 'listado-cultivos',
    loadChildren: () =>
      import('./pages/listado-cultivos/listado-cultivos.module').then(
        (m) => m.ListadoCultivosPageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

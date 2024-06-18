import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCultivosPage } from './registro-cultivos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCultivosPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCultivosPageRoutingModule {}

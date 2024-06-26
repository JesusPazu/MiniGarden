import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoCultivosPage } from './listado-cultivos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoCultivosPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoCultivosPageRoutingModule {}

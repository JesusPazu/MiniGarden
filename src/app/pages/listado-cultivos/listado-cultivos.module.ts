import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoCultivosPageRoutingModule } from './listado-cultivos-routing.module';

import { ListadoCultivosPage } from './listado-cultivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoCultivosPageRoutingModule,
  ],
  declarations: [ListadoCultivosPage],
})
export class ListadoCultivosPageModule {}

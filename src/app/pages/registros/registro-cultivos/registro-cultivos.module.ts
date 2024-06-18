import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCultivosPageRoutingModule } from './registro-cultivos-routing.module';

import { RegistroCultivosPage } from './registro-cultivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroCultivosPageRoutingModule,
  ],
  declarations: [RegistroCultivosPage],
})
export class RegistroCultivosPageModule {}

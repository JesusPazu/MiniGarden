import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CultivoDto } from 'src/app/dtos/cultivo-dto';
import { CultivosService } from 'src/app/servicios/cultivos/cultivos.service';

@Component({
  selector: 'app-registro-cultivos',
  templateUrl: './registro-cultivos.page.html',
  styleUrls: ['./registro-cultivos.page.scss'],
})
export class RegistroCultivosPage implements OnInit {
  cultivo: CultivoDto = {} as CultivoDto;

  temMin = 24.0;
  temMax = 28.0;
  HumMin = 60;
  HumMax = 85;

  constructor(
    private router: Router,
    private cultivosService: CultivosService,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit(): void {
    console.log('Init');
  }

  async guardarCultivo() {
    const loader = await this.loadingCtrl.create({
      message: 'Guardando...',
    });
    loader.present();

    this.cultivo.temperatura = Math.floor(
      Math.random() * (this.temMax - this.temMin) + this.temMin,
    );
    this.cultivo.humedad = Math.floor(
      Math.random() * (this.HumMax - this.HumMin) + this.HumMin,
    );
    this.cultivosService.guardarCultivo(this.cultivo).then(() => {
      loader.dismiss();
      this.router.navigateByUrl('home');
    });
  }
}

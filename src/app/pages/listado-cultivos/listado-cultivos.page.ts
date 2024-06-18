import { Component, OnInit } from '@angular/core';
import { CultivoDto } from 'src/app/dtos/cultivo-dto';
import { CultivosService } from 'src/app/servicios/cultivos/cultivos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listado-cultivos',
  templateUrl: './listado-cultivos.page.html',
  styleUrls: ['./listado-cultivos.page.scss'],
})
export class ListadoCultivosPage implements OnInit {
  cultivos: CultivoDto[] = [];

  constructor(private cultivosService: CultivosService, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    loader.present();

    this.cultivosService
      .buscarListaCultivos()
      .subscribe((cultivos: CultivoDto[]) => {
        this.cultivos = cultivos;
        loader.dismiss();
      });
  }
}

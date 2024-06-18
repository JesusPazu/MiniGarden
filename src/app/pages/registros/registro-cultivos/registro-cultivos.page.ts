import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CultivoDto } from 'src/app/dtos/cultivo-dto';
import { CultivosService } from 'src/app/servicios/cultivos/cultivos.service';

@Component({
  selector: 'app-registro-cultivos',
  templateUrl: './registro-cultivos.page.html',
  styleUrls: ['./registro-cultivos.page.scss'],
})
export class RegistroCultivosPage implements OnInit {
  cultivo: CultivoDto = {} as CultivoDto;

  constructor(
    private router: Router,
    private eventService: CultivosService,
  ) {}

  ngOnInit(): void {
    console.log('Init');
  }

  guardarCultivo() {
    this.eventService.guardarCultivo(this.cultivo).then(() => {
      this.router.navigateByUrl('home');
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private route: Router,
  ) {}

  logout() {
    this.authService.logout().then(() => {
      this.route.navigateByUrl('/login');
    });
  }
}

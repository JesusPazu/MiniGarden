import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.formSubmitted = false;
  }

  async loginUser(event: Event) {
    const loader = await this.loadingCtrl.create({
      message: 'Ingresando...',
    });
    loader.present();
    
    this.formSubmitted = true;
    event.preventDefault();
    if (this.loginForm?.valid) {
      const value = this.loginForm.value;
      this.authService
        .loginUser(value.email, value.password)
        .then(async (result) => {
          if (result) {
            loader.dismiss();
            this.router.navigateByUrl('home');
          } else {
            loader.dismiss();
            const alert = this.alertController.create({
              message: 'Correo o Contraseña Incorrecta.',
              buttons: [{ text: 'OK', role: 'cancel' }],
            });
            (await alert).present();
          }
        })
        .catch((error) => {
          loader.dismiss();
          console.log(error);
        });
    } else {
      loader.dismiss();
    }
  }

  invalidField(field: string): Boolean {
    if (this.loginForm.get(field)!.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  getErrorMessage(field: string): string {
    let message = '';
    if (this.loginForm.get(field)!.hasError('required')) {
      message = 'Este campo es Requerido.';
    } else if (this.loginForm.get(field)!.hasError('email')) {
      message = 'Este campo NO cumple con el formato de correo.';
    }
    return message;
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passField() {
    return this.loginForm.get('password');
  }
}

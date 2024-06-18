import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {
  registerForm: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.formSubmitted = false;
  }

  signUpUser(event: Event) {
    this.formSubmitted = true;
    event.preventDefault();
    if (this.registerForm?.valid) {
      const value = this.registerForm.value;
      this.authService
        .signUpUser(value.email, value.password)
        .then((result) => {
          if (result) {
            this.router.navigateByUrl('login');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  invalidField(field: string): boolean {
    if (this.registerForm.get(field)!.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  getErrorMessage(field: string): string {
    let message = '';
    if (this.registerForm.get(field)!.hasError('required')) {
      message = 'Este campo es Requerido.';
    } else if (this.registerForm.get(field)!.hasError('email')) {
      message = 'Este campo NO cumple con el formato de correo';
    }
    return message;
  }

  get emailField() {
    return this.registerForm?.get('email');
  }

  get passwordField() {
    return this.registerForm?.get('password');
  }
}

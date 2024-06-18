import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async loginUser(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  async signUpUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    let user = this.auth.currentUser;
    return user;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'minigarden-940ae',
        appId: '1:242665288956:web:c3df2a122bf7970b6e1379',
        storageBucket: 'minigarden-940ae.appspot.com',
        apiKey: 'AIzaSyDEjSo94CQ2XKsZ4yboxCaz-UqwK1o9ZV0',
        authDomain: 'minigarden-940ae.firebaseapp.com',
        messagingSenderId: '242665288956',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

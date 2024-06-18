import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
  runTransaction,
} from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { CultivoDto } from 'src/app/dtos/cultivo-dto';

@Injectable({
  providedIn: 'root',
})
export class CultivosService {
  constructor(
    public fireStore: Firestore,
    private authService: AuthService,
  ) {}

  async guardarCultivo(cultivo: CultivoDto) {
    let user = this.authService.getUser();
    const placeRef = collection(
      this.fireStore,
      `userProfile/${user?.uid}/cropList`,
    );
    return await addDoc(placeRef, cultivo);
  }

  buscarListaCultivos() {
    let user = this.authService.getUser();
    const placeRef = collection(
      this.fireStore,
      `userProfile/${user?.uid}/cropList`,
    );
    return collectionData(placeRef, { idField: 'id' });
  }

  buscarDetalleCultivo(cultivoId: string) {
    let user = this.authService.getUser();
    const placeRef = doc(
      this.fireStore,
      `userProfile/${user?.uid}/cropList/${cultivoId}`,
    );
    return getDoc(placeRef);
  }
}

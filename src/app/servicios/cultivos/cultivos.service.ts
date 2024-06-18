import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { CultivoDto } from 'src/app/dtos/cultivo-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CultivosService {
  constructor(
    public fireStore: Firestore,
    private authService: AuthService,
  ) {}

  async guardarCultivo(cultivo: CultivoDto) {
    const placeRef = collection(this.fireStore, 'cropList');
    return await addDoc(placeRef, cultivo);
  }

  buscarListaCultivos() {
    const placeRef = collection(this.fireStore, 'cropList');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      CultivoDto[]
    >;
  }

  buscarDetalleCultivo(cultivoId: string) {
    const placeRef = doc(this.fireStore, `cropList/${cultivoId}`);
    return getDoc(placeRef);
  }
}

import { Injectable } from '@angular/core';
import { config } from './config/app.config';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private db: AngularFirestore) { }
  user_login(email: string, password: string): Observable<any> {
    return this.db.collection(config.collection_endpoint, ref => ref.where("email", '==', email)).snapshotChanges();
  }
}

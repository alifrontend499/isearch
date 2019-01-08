import { Injectable } from '@angular/core';
import { config } from './config/app.config';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private db: AngularFirestore) { }
  // USER LOGIN
  user_login(email: string): Observable<any> {
    return this.db.collection(config.collection_endpoint, ref => ref.where("email", '==', email)).snapshotChanges();
  }
  // USER SIGNUP
  user_signup(email: string, first_name: string, last_name: string, password: string) {
    let data = {
      'email': email,
      'first_name': first_name,
      'last_name': last_name,
      'password': password
    }
    // CHECKING USER
    return this.db.collection(config.collection_endpoint).add(data);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators/map';

// import { FirebaseApp } from "angularfire2";
// import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../pages/models/user.model';
 
@Injectable()
export class UserService {
 
   users: FirebaseListObservable<User[]>;

   constructor(public af: AngularFireDatabase, public http: Http) {

    this.users = this.af.list(`/users`);

    }

    create (user: User): firebase.Promise<void> {
        return this.users.push(user);
    }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../providers/user.service';
import { SignupPage } from '../signup/signup';
import { User } from 'firebase/app';
import 'rxjs/add/operator/do';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;

  constructor(public navCtrl: NavController, public userService: UserService) {
  }

  ionViewDidLoad() {
    var users = this.userService.users;
  }
  
  onChatCreate(user: User): void {
    console.log("Usuário:", user);
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

}

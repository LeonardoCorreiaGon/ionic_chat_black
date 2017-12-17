import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { UserService } from '../providers/user.service';
import { HttpModule } from '@angular/http';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyA7GDdouTSEM3yK5XWut6CTvD_eONIo5hY",
  authDomain: "ionic-firebase-chatblack.firebaseapp.com",
  databaseURL: "https://ionic-firebase-chatblack.firebaseio.com",
  // projectId: "ionic-firebase-chatblack",
  storageBucket: "ionic-firebase-chatblack.appspot.com",
  messagingSenderId: "679721672313"
};

@NgModule({
  declarations: [
    SignupPage,
    MyApp,
    HomePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SignupPage,
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

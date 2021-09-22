import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAqHDLRtJdQNp2-l6l_WGlbXbp6KX8n0cQ",
  authDomain: "acty-mobile.firebaseapp.com",
  databaseURL: "https://acty-mobile-default-rtdb.firebaseio.com",
  projectId: "acty-mobile",
  storageBucket: "acty-mobile.appspot.com",
  messagingSenderId: "49057294840",
  appId: "1:49057294840:web:299255d2b8a1ebd78ace0d",
  measurementId: "G-LS7PZ0L0FG"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

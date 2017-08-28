import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { MainComponent } from './main.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MdGridListModule, MdInputModule, MdButtonModule, MdToolbarModule, MdCardModule } from '@angular/material';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MessagesComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [ MessageService, AuthService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { KeycloakAngularModule } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ContactComponent } from './contact/contact.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { UpdataBooksComponent } from './updata-books/updata-books.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { KeycloakService } from 'keycloak-angular';
import { LoginComponent } from './login/login.component';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8080/',
//         realm: 'Testing',
//         clientId: 'angular',
//       },
//       initOptions: {
//         onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
//         flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
//       },
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbookComponent,
    ContactComponent,
    ContactviewComponent,
    UpdataBooksComponent,
    ViewbookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2OrderModule,
    KeycloakAngularModule
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeKeycloak,
  //     multi: true,
  //     deps: [KeycloakService],
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
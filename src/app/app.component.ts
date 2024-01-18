import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public keycloak:KeycloakService){

  }
  title = 'bookproject';

  // public name=this.keycloak.getUsername();

  // logout(){
  //   this.keycloak.logout();
  // }
}

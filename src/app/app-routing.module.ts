import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { UpdataBooksComponent } from './updata-books/updata-books.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'addbook',component:AddbookComponent},
{path:'contact',component:ContactComponent},
{path:'contactview',component:ContactviewComponent},
{path:'updatebook/:id',component:UpdataBooksComponent},
{path:'viewbook',component:ViewbookComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

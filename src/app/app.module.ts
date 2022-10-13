import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchempComponent } from './searchemp/searchemp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddemployeeComponent
  },
  {
    path:"search",component:SearchempComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    NavbarComponent,
    SearchempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

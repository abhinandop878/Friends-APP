import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import {HttpClientModule} from '@angular/common/http';
import { AddFriendComponent } from './add-friend/add-friend.component'
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
    path:"",component:AddFriendComponent
  },
  {
    path:"viewFriends",component:ViewFriendsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewFriendsComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

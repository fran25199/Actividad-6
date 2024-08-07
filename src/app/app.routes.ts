import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UserComponent } from './pages/user/user.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo:'home'},
    {path: "home", component: HomeComponent},
    {path: "newuser", component: NewuserComponent},
    {path: "user", component: UserComponent},
    {path: "updateuser", component: UpdateuserComponent},
    {path:"**" , component:Page404Component}
];


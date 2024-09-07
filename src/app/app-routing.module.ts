import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home Page'
  },
  {
    path: 'loginPage',
    component: LoginPageComponent,
    title: 'Login Page'
  },
  {
    path: 'loginPage/listUsers',
    component: UserListComponent,
    title: 'User List'
  },
  {
    path: 'loginPage/listUsers/addUser',
    component: UserAddComponent,
    title: 'Add User'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

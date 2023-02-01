import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { IgxButtonModule } from 'igniteui-angular';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user/user-role/user-role.component';

const routes: Routes=[
{
  path:"",
  component:UserListComponent
},
{
  path:":id",
  component:UserComponent,
  children:[
    {
      path:"details",
      component:UserDetailsComponent
    },
    {
      path:"role",
      component:UserRoleComponent
    },
    {
      path:"",
      redirectTo:"details",
      pathMatch:"full"
    }
  ]
}
]


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),IgxButtonModule
  ]
})
export class UserModule { }

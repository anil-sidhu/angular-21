import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { AddUser } from './components/add-user/add-user';
export const routes: Routes = [
    {path:"",component:UserList},
    {path:"add",component:AddUser}
];

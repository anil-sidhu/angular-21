import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';
import { Profile } from './pages/profile/profile';
import { Setting } from './pages/setting/setting';


export const routes: Routes = [
{path:'',component:Home},
{path:'user',component:User,
    children:[
        {path:'',redirectTo:"profile",pathMatch:"full"},
        {path:'profile', component:Profile},
        {path:'setting',component:Setting},

    ]},

];

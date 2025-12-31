import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"about/:name/:age",component:About},
    {path:"about/:name",component:About},
    {path:"about",component:About},
    {path:"login",component:Login},
    {path:"profile",component:Profile},
    {path:"users",component:Users},
    {path:"user-details/:id",component:UserDetails},

];

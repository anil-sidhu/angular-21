import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"about",component:About},
    {path:"login",component:Login},
    {path:"profile",component:Profile},
];

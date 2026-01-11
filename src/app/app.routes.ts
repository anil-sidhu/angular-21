import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
{
    path:'', component:ProductList
},
{
    path:'details/:id', component:ProductDetails
},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TypesComponent } from './pages/types/types.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'types/:tipo', component: TypesComponent},
    { path: '**', redirectTo: '' }
];

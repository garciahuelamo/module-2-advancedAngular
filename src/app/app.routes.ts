import { Routes } from '@angular/router';
import { TooltipComponent } from '../components/tooltip/tooltip.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
    {
        path: 'tooltip',
        component: TooltipComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];


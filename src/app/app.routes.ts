import { Routes } from '@angular/router';
import { ActivityComponent } from './pages/activity/activity.component';

export const routes: Routes = [
    { path: 'activity', component: ActivityComponent },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(c => c.AdminComponent)
    },
    { path: '**', component: ActivityComponent }
];

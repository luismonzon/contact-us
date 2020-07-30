import { lazy } from 'react';

const LoginComponent = lazy(() => import('./components/Login'));

export const routes = [
    { path: '/login', component: LoginComponent, exact: true }
]

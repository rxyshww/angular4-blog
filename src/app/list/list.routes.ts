import { ListComponent } from './list.component';

export const listRoutes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':id',
        component: ListComponent
    }
];

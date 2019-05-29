import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = 
[ 
    { path: '', component: HomeComponent },
    /* We're using dummy route, so we don't have to specify the route guard for all of them */
    {
        path: '', // this string is glued to the beginning of children paths
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    /* wildcard route (used when none of the above are correct), should be on the bottom, it redirects user to 'redirectTo'
     parameter value */
    { path: '**', redirectTo: '', pathMatch: 'full'} 
];
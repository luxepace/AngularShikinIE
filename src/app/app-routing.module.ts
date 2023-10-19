import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AccessRoleGuard } from './access-role.guard';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'postlist',
    component: PostListComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: ':id',
        component: PostDetailsComponent,
      },
    ],
  },
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

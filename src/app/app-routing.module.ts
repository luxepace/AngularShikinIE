import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Post1Component } from './post1/post1.component';
import { testResolver } from './test.resolver';


const routes: Routes = [
  {
    path: 'post1',
    component: Post1Component,
    resolve: [testResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

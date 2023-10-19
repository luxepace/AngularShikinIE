import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule, FormsModule],
  declarations: [					
    AppComponent,
    ErrorComponent,
    MainComponent,
    PostListComponent,
    PostDetailsComponent,
    PostsComponent
   ],
  bootstrap: [AppComponent],
  providers: [DataService, AccessRoleGuard],
})
export class AppModule {}

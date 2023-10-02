import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MainComponent } from './main/main.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [		
    AppComponent,
      BookComponent,
      MainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

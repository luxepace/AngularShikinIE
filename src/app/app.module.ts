import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,

   ],
   providers: [
    CounterService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

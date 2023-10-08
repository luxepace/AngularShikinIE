import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { ResponseService } from './response.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,  MatSlideToggleModule ],
  declarations: [	AppComponent ],
  providers:    [ ResponseService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
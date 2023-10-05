import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { InputComponent } from './Input/Input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,  MatSlideToggleModule, SliderComponent,  InputComponent],
  declarations: [	AppComponent, ButtonComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
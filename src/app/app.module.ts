import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamicComponent/dynamicComponent.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  declarations: [AppComponent, DynamicComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

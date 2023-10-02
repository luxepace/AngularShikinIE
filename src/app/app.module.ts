import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { PipePlusFivePipe } from './pipePlusFive.pipe';

@NgModule({
  declarations: [		
    AppComponent,
      ButtonComponent,
      PipePlusFivePipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

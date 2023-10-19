import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { TodoState } from 'src/store/todo.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxsModule.forRoot([TodoState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
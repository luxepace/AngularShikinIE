import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

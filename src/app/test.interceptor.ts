import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('https://jsonplaceholder.typicode.com/todos')) {
      const paramReq = request.clone({
          params: request.params.set(
              'id',
              '1'
          )
      });
      return next.handle(paramReq);
  } else {
      return next.handle(request);
  }
  }
}

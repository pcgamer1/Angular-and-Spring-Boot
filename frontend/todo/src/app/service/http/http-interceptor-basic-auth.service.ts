import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUserService } from '../get-user.service';

@Injectable()
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private getUserService: GetUserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.getUserService.getAuthenticatedToken();
    let username = this.getUserService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }

    return next.handle(req);
  }
}

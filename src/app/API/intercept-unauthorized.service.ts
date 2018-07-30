import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';

import { LoginService } from '../login/login.service';

@Injectable()
export class InterceptUnauthorizedService implements HttpInterceptor {
  constructor(private login: LoginService, private route: ActivatedRoute) { }

  getXT(): string {
    return localStorage.getItem('xt') || 'undefined';
  }
  // Need to change handle solution instance call
  getSI(): string {
    if (localStorage.getItem('si')) {
      return JSON.parse(localStorage.getItem('si')).solutionId;
    }
  }

  setRedirectParams() {
    // debugger
    // localStorage.setItem('appRedirect',this.route.snapshot.queryParams.id)
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('/solution/v2/instances') !== -1) {
      return next.handle(request);
    } else {
      const headers = request.headers.append('XSRFToken', this.getXT());
      const authReq = request.clone({
        headers: headers.append('solutionInstanceId', this.getSI()),
        withCredentials: true
      }
      );
      return next.handle(authReq)
        // .map((event:HttpEvent<any>) => {
        //   console.log(event)
        // })
        .catch((err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            if (err.error && err.error.status === 401) {
              this.setRedirectParams();
              this.login.redirectToSSO();
            }
            if (err.error && err.error.status === 400 && err.error.apiStatusCode === 'token.validation.failed') {
              this.setRedirectParams();
              this.login.redirectToSSO();
            }
          }
          return _throw(err);
        });
    }

  }
}

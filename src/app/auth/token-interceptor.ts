import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        return next.handle(request).pipe(catchError((error, caught) => {
            console.log(error);
            this.handleAuthError(error);
            return of(error);
        }) as any);
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // tratando erro de autenticação
        if (err.status === 401) {
            console.log('handled error ' + err.status);
            this.router.navigate(['/']);
            return of(err.message);
        }
        throw err;
    }

}

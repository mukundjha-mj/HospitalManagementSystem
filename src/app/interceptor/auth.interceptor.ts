import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = sessionStorage.getItem('token'); // Check for common token

        // Or check specific tokens based on role if needed, but usually a single token key is better
        if (!token) {
            if (sessionStorage.getItem('adminUsername')) {
                // Retrieve admin token if stored separately (will update login service to store properly)
                token = sessionStorage.getItem('token');
            }
        }

        if (token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}

import {
  HttpErrorResponse,
  type HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error! instanceof HttpErrorResponse) {
        console.log('An error has occured');
      }
      if (error.error! instanceof ErrorEvent) {
        switch (error.status) {
          case 0:
            console.log(error.statusText);
            break;
          case 401:
            console.log(error.statusText);
            break;
          case 404:
            console.log(error.statusText);
            break;
        }
      }

      console.log('Error event');
      return throwError(() => new Error(error.statusText));
    })
  );
};

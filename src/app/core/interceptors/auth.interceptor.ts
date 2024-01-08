import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  request = request.clone({
    setHeaders: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYmVuQHRlc3QudGVzdCIsInVzZXJuYW1lIjoiYmVudGVzdCJ9LCJpYXQiOjE3MDQyOTI1MzgsImV4cCI6MTcwOTQ3NjUzOH0.sxnmGBHQXpxPDPOpawRteQpObmdE1L0ORJN40hne5DE'
          ? `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYmVuQHRlc3QudGVzdCIsInVzZXJuYW1lIjoiYmVudGVzdCJ9LCJpYXQiOjE3MDQyOTI1MzgsImV4cCI6MTcwOTQ3NjUzOH0.sxnmGBHQXpxPDPOpawRteQpObmdE1L0ORJN40hne5DE`
          : '',
    },
  });
  return next(request);
};

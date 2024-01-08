import type { HttpInterceptorFn } from '@angular/common/http';

export const postRequestInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

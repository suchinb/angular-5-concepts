import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { HttpHandlerService } from '../API/http-handler.service';

@Injectable()
export class SolutionResolveService implements Resolve<any> {

  constructor(private httpHandler: HttpHandlerService) { }
  resolve() {
    return this.httpHandler.getSolutionDetails();
  }
}

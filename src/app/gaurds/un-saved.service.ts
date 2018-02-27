import { Injectable } from '@angular/core';

import { CanDeactivate } from '@angular/router';
import { RxjsSearchComponent } from '../rxjs-search/rxjs-search.component';

@Injectable()
export class UnSavedService implements CanDeactivate<RxjsSearchComponent>{

  constructor() { }

  canDeactivate( component:RxjsSearchComponent):boolean{
    console.log("checking for unsaved changes")
    return component.canDeactivate() || window.confirm("Are you sure")
  }

}

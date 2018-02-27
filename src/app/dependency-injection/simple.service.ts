import { Injectable , Inject} from '@angular/core';

import { OtherService } from './other.service';

// @Injectable()
export class SimpleService {

  constructor(@Inject(OtherService) otherSerivce:OtherService) { }
  value:string

}

import { Injectable } from '@angular/core';

// @injectable is not needed if all dependent has any decorators
// like @component or @decorators, otherwise need to explicitly tell angular to inject this service in dependent constructor.
// @Injectable()
export class OtherService {

  constructor() { }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import {HttpClient ,HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Subject } from 'rxjs/subject';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { APICALLS } from './APICALLS';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HttpHandlerService {

  constructor(private http:HttpClient) { }
  baseURL:string = environment.apiBase;
  data:any
  getURIParameters(call,options):string{
    Object.keys(options).forEach(key => {
      if(key!=='data'&& key!='qs'){
        call=call.replace(`{${key}}`,encodeURIComponent(options[key]))
      }
    });
    return call;
  }

  getQueryParameters(qs):HttpParams {
    let params= new HttpParams()
    qs.forEach(queryString => {
      params= params.append(queryString[0],queryString[1])
    });
    return params
  }

  getSolutionDetails():Subject<any> {
    let options= {params:new HttpParams().set('originUri',environment.originUri)}
    let subject= new Subject()
    this.http.get(environment.siUrl+'/solution/v2/instances',options).subscribe(subject)
    subject.subscribe(data => {
     localStorage.setItem('si',JSON.stringify(data))
    })
    return subject
  }

  handleRequest(cmd, options):Subject<any>{
    let subject= new Subject()
    let callData=APICALLS.find(data => data.cmd===cmd)
    if(options){
      callData.call=this.getURIParameters(callData.call,options)
    }
    let httpOptions:any={
      headers:new HttpHeaders({
        'Content-Type':callData.contentType,
        'Accept':callData.accepts
      })
    }
    
    if(options && options.qs){
      httpOptions.params = this.getQueryParameters(options.qs)
    }
    switch(callData.type) {
      case "GET": this.http.get(environment.apiBase+callData.call,httpOptions).subscribe(subject)
        break
      case "POST": 
        if(options && options.data)
          this.http.post(environment.apiBase+callData.call,options.data,httpOptions).subscribe(subject);
        else
          this.http.post(environment.apiBase+callData.call,httpOptions).subscribe(subject);
          break;
      default:break
    }
    // subject.pipe(
    //   catchError(this.handleError)
    // )
    return subject;
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import {of} from "rxjs/observable/of";
import { tap, map } from "rxjs/operators";

import { environment } from '../../environments/environment';
import { HttpHandlerService } from "../API/http-handler.service"
@Injectable()
export class UserServiceService {

  constructor(private httpHandler:HttpHandlerService) { }
  user:any

  isLoggedIn():Observable<boolean> {
    if (this.user) {
      return of(true)
    }
    else{
      let userId= localStorage.getItem('userId')
      if(userId){
        return this.getPersonDetails(userId)
      }
      else{
        return this.getPersonDetails(null)
      }      
      
    }
  }

  getPersonDetails(userId):Observable<boolean> {
    // let subject= new Subject()
    return Observable.forkJoin([this.httpHandler.handleRequest('getPerson',{userId:userId}), this.httpHandler.handleRequest('getPersonRoles',{userId:userId})])
    .pipe(
      tap((data) => {
          this.user={
          user:data[0],
          roles:data[1]
        }
      }),
      // modifying to return an observable of boolean as I need to return boolean observable in canActivate()
      map(val => {return true})
    )
    // subject.subscribe( data => {
    //   this.user={
    //     user:data[0],
    //     roles:data[1]
    //   }
    // })
    // return subject
    // .pipe(
    //   tap(() => {
    //     this.user.user
    //   })
    // )
    

  }
}

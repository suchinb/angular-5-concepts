import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
// ANOTHER METHOD OF USING OPERATORS
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/delay'
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do'
import { debounceTime,distinctUntilChanged, switchMap,tap} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-search',
  templateUrl: './rxjs-search.component.html',
  styleUrls: ['./rxjs-search.component.css']
})

export class RxjsSearchComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) {
  }
  orgs=['test1','test2','suchin','sathish','onemore','anotherone']
  searchOrg:FormControl
  searchResults:string[]
  loading:boolean =false
  showresults=false;
  forDisplay=`
  import { debounceTime,distinctUntilChanged, switchMap,tap} from 'rxjs/operators';
  ngOnInit(){
      this.searchOrg=new FormControl()
    this.searchOrg.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap( () => {
        this.loading=true ;
        this.showresults=true
      }),
      switchMap( val => this.getData(val)),
      tap( () => this.loading=false)
    ).subscribe(res => this.searchResults=res)
    }`

  ngOnInit(){
    this.searchOrg=new FormControl()
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.searchOrg.setValue(params['name'],{emitEvent:false})
      }
    })
    
    this.searchOrg.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap( () => {
        this.loading=true ;
        this.showresults=true;
      }),
      switchMap( val => this.getData(val)),
      tap( () => this.loading=false)
    ).subscribe(res => this.searchResults=res)

// ANOTHER METHOD OF USING OPERATORS
    // this.searchOrg.valueChanges
    // .debounceTime(500)
    // .distinctUntilChanged()    
    // .do(() => {this.loading=true; console.log(this.loading)})
    // .switchMap( val => this.getData(val))
    // .do(() => {this.loading=false;this.showresults=true})
    // .subscribe(res => this.searchResults=res)
  }

  getData(search:string):Observable<string[]> {
        return of(this.orgs.filter(org => org.indexOf(search)>=0)).delay(1000)
  }

  selectOrg(val:string) {
    this.showresults=false
    this.router.navigate(['rxjsSearch', {name:val}])
    this.searchOrg.setValue(val,{emitEvent:false})
  }

  canDeactivate():boolean {
    return !this.showresults
  }
}


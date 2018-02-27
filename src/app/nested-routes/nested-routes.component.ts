import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';

import { RxjsSearchComponent } from '../rxjs-search/rxjs-search.component';

@Component({
  selector: 'app-nested-routes',
  templateUrl: './nested-routes.component.html',
  styleUrls: ['./nested-routes.component.css']
})
export class NestedRoutesComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }
  // activeId can be set based on URL to show correct active tab
  activeId="1";
  ngOnInit() {

  }

  navigateToChildren($event:NgbTabChangeEvent) {
    if ($event.nextId=="2") {
      this.router.navigate(['nestedChild2'],{relativeTo:this.route})
    }
    else{
      this.router.navigate(['nestedChild1'],{relativeTo:this.route})
    }
  }

}

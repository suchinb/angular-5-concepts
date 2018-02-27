import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RxjsSearchComponent } from './rxjs-search/rxjs-search.component';
import { CustomTwoWayBindingComponent } from './custom-two-way-binding/custom-two-way-binding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { NestedRoutesComponent } from './nested-routes/nested-routes.component';
import { Child1Component } from './nested-routes/child1/child1.component';
import { Child2Component } from './nested-routes/child2.component';
import { AlwaysAuthGaurdService } from './gaurds/always-auth-gaurd.service';
import { OnlyLoggedInGaurdService } from './gaurds/only-logged-in-gaurd.service';
import { UnSavedService } from './gaurds/un-saved.service';

const routes=[
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: DashboardComponent,canActivate:[AlwaysAuthGaurdService]},
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'rxjsSearch', component: RxjsSearchComponent,canActivate:[OnlyLoggedInGaurdService],canDeactivate:[UnSavedService]},
  { path: 'customTwoWayBinding', component: CustomTwoWayBindingComponent},
  { path:'dependencyInjection', component: DependencyInjectionComponent},
  { path: 'nestedRoutes', 
    component: NestedRoutesComponent,
    canActivateChild:[AlwaysAuthGaurdService],
    children: [
      {path:'', redirectTo:'nestedChild1', pathMatch:'full'},
      {path:'nestedChild1',component:Child1Component},
      {path:'nestedChild2', component:Child2Component}
    ]
  },
  {path:'**', redirectTo:'/overview'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }

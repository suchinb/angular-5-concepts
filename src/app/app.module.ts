import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RxjsSearchComponent } from './rxjs-search/rxjs-search.component';
import { CustomTwoWayBindingComponent } from './custom-two-way-binding/custom-two-way-binding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SizerComponent } from './custom-two-way-binding/sizer.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { OtherService } from './dependency-injection/other.service';
import { SimpleService } from './dependency-injection/simple.service';
import { ParentComponent } from './dependency-injection/parent/parent.component';
import { ChildComponent } from './dependency-injection/child/child.component';
import { NestedRoutesComponent } from './nested-routes/nested-routes.component';
import { Child1Component } from './nested-routes/child1/child1.component';
import { Child2Component } from './nested-routes/child2.component';
import { AlwaysAuthGaurdService } from './gaurds/always-auth-gaurd.service';
import { OnlyLoggedInGaurdService } from './gaurds/only-logged-in-gaurd.service';
import { UserServiceService } from './gaurds/user-service.service';
import { UnSavedService } from './gaurds/un-saved.service';
import { TemplateformComponent } from './templateform/templateform.component';
import { EmailDomainValidatorDirective } from './templateform/email-domain-validator.directive';
import { LoginService } from './login/login.service';
import { HttpHandlerService } from './API/http-handler.service';
import { SolutionResolveService } from './login/solution-resolve.service';
import { InterceptUnauthorizedService } from './API/intercept-unauthorized.service';
import { AuthComponent } from './login/auth.component';
import { AuthResolveService } from './login/auth-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    RxjsSearchComponent,
    CustomTwoWayBindingComponent,
    DashboardComponent,
    SideNavigationComponent,
    SizerComponent,
    DependencyInjectionComponent,
    ParentComponent,
    ChildComponent,
    NestedRoutesComponent,
    Child1Component,
    Child2Component,
    TemplateformComponent,
    EmailDomainValidatorDirective,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Validators,
    OtherService,
    SimpleService,
    AlwaysAuthGaurdService,
    OnlyLoggedInGaurdService,
    UserServiceService,
    UnSavedService,
    LoginService,
    HttpHandlerService,
    SolutionResolveService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptUnauthorizedService, multi: true},
    AuthResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

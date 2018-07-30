// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { SideNavigationComponent } from './side-navigation.component';
// // import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';

// describe('SideNavigationComponent', () => {
//   let component: SideNavigationComponent;
//   let fixture: ComponentFixture<SideNavigationComponent>;
//   let linkDes, routerLinks

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SideNavigationComponent, RouterLinkDirectiveStub ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SideNavigationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     // find DebugElements with an attached RouterLinkStubDirective
//     linkDes= fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub))
//      // get attached link directive instances
//     // using each DebugElement's injector
//     routerLinks= linkDes.map(de => de.injector.get( RouterLinkDirectiveStub))
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('can get RouterLinks from template' , () => {
//     expect(routerLinks[0].linkParams).toBe('/overview')
//   });
//   it('can click overview link from template', () => {
//     const overviewDe=linkDes[0] //get overview link debug element
//     const overview = routerLinks[0] // get overview link directive

//     expect(overview.navigatedTo).toBeNull('Should not have navigated yet')
//     overviewDe.triggerEventHandler('click',null)
//     expect(overview.navigatedTo).toBe('/overview')
//   })
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DependencyInjectionComponent } from './dependency-injection.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SimpleService } from './simple.service';
import { OtherService } from './other.service';


describe('DependencyInjectionComponent', () => {
  let component: DependencyInjectionComponent;
  let fixture: ComponentFixture<DependencyInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectionComponent, ParentComponent, ChildComponent ],
      imports: [FormsModule],
      providers: [{provide: SimpleService, useValue: {value: 'test'}}, OtherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

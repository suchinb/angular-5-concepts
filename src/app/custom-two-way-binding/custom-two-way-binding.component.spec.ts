import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwoWayBindingComponent } from './custom-two-way-binding.component';
import { SizerComponent } from './sizer.component';

describe('CustomTwoWayBindingComponent', () => {
  let component: CustomTwoWayBindingComponent;
  let fixture: ComponentFixture<CustomTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTwoWayBindingComponent, SizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EmailDomainValidatorDirective } from './email-domain-validator.directive';


@Component({
  template: `<form #mockForm="ngForm">
      <input type="text" name="email" #email="ngModel" appEmailDomain="gmail.com" [(ngModel)]="e1">
    </form>`
})
class TestAppDomainValidatorComponent {
  e1: string;
}

describe('Directive: EmailDomainValidatorDirective', () => {
  let component: TestAppDomainValidatorComponent;
  let fixture: ComponentFixture<TestAppDomainValidatorComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EmailDomainValidatorDirective, TestAppDomainValidatorComponent]
    });
    fixture = TestBed.createComponent(TestAppDomainValidatorComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new EmailDomainValidatorDirective();
    expect(directive).toBeTruthy();
  });

  it('should make the input field to be valid', () => {
    component.e1 = 'test@gmail.com';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(inputEl.references['email'].valid).toBe(true);
    });
  });

  it('should make the input field to be invalid', () => {
    component.e1 = 'test@unknown.com';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(inputEl.references['email'].valid).toBe(false);
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginGuestComponent } from './dialog-login-guest.component';

describe('DialogLoginGuestComponent', () => {
  let component: DialogLoginGuestComponent;
  let fixture: ComponentFixture<DialogLoginGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoginGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

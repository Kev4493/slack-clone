import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChannelComponent } from './current-channel.component';

describe('CurrentChannelComponent', () => {
  let component: CurrentChannelComponent;
  let fixture: ComponentFixture<CurrentChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

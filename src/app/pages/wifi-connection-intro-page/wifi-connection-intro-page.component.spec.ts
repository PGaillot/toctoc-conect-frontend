import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionIntroPageComponent } from './wifi-connection-intro-page.component';

describe('WifiConnectionIntroPageComponent', () => {
  let component: WifiConnectionIntroPageComponent;
  let fixture: ComponentFixture<WifiConnectionIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionIntroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

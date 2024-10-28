import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionSuccessComponent } from './wifi-connection-success.component';

describe('WifiConnectionSuccessComponent', () => {
  let component: WifiConnectionSuccessComponent;
  let fixture: ComponentFixture<WifiConnectionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

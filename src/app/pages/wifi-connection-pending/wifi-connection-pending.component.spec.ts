import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionPendingComponent } from './wifi-connection-pending.component';

describe('WifiConnectionPendingComponent', () => {
  let component: WifiConnectionPendingComponent;
  let fixture: ComponentFixture<WifiConnectionPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

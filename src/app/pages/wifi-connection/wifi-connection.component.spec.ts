import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionComponent } from './wifi-connection.component';

describe('WifiConnectionComponent', () => {
  let component: WifiConnectionComponent;
  let fixture: ComponentFixture<WifiConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

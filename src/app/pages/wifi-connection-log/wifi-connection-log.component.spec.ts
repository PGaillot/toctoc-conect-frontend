import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionLogComponent } from './wifi-connection-log.component';

describe('WifiConnectionLogComponent', () => {
  let component: WifiConnectionLogComponent;
  let fixture: ComponentFixture<WifiConnectionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

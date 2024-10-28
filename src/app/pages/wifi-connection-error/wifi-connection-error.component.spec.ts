import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiConnectionErrorComponent } from './wifi-connection-error.component';

describe('WifiConnectionErrorComponent', () => {
  let component: WifiConnectionErrorComponent;
  let fixture: ComponentFixture<WifiConnectionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiConnectionErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiConnectionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

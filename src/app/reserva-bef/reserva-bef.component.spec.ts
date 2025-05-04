import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaBefComponent } from './reserva-bef.component';

describe('ReservaBefComponent', () => {
  let component: ReservaBefComponent;
  let fixture: ComponentFixture<ReservaBefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaBefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaBefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

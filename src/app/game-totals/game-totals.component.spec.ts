import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTotalsComponent } from './game-totals.component';

describe('GameTotalsComponent', () => {
  let component: GameTotalsComponent;
  let fixture: ComponentFixture<GameTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

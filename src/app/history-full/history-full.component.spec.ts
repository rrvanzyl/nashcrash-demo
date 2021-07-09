import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFullComponent } from './history-full.component';

describe('HistoryFullComponent', () => {
  let component: HistoryFullComponent;
  let fixture: ComponentFixture<HistoryFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

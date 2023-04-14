import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaPersonaggiComponent } from './visualizza-personaggi.component';

describe('VisualizzaPersonaggiComponent', () => {
  let component: VisualizzaPersonaggiComponent;
  let fixture: ComponentFixture<VisualizzaPersonaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaPersonaggiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaPersonaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

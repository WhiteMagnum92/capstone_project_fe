import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPersonaggioComponent } from './crea-personaggio.component';

describe('CreaPersonaggioComponent', () => {
  let component: CreaPersonaggioComponent;
  let fixture: ComponentFixture<CreaPersonaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaPersonaggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaPersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

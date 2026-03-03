import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooperado } from './cooperado';

describe('Cooperado', () => {
  let component: Cooperado;
  let fixture: ComponentFixture<Cooperado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooperado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cooperado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

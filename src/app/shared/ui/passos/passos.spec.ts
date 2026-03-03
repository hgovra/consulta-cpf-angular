import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passos } from './passos';

describe('Passos', () => {
  let component: Passos;
  let fixture: ComponentFixture<Passos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

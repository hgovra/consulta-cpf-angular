import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipiente } from './recipiente';

describe('Recipiente', () => {
  let component: Recipiente;
  let fixture: ComponentFixture<Recipiente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recipiente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recipiente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCpf } from './consulta-cpf';

describe('ConsultaCpf', () => {
  let component: ConsultaCpf;
  let fixture: ComponentFixture<ConsultaCpf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaCpf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCpf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

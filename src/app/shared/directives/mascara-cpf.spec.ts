import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { beforeEach, describe, expect, it } from 'vitest';

import { MascaraCpf } from './mascara-cpf';

@Component({
  standalone: true,
  imports: [FormsModule, MascaraCpf],
  template: `<input mascaraCpf [(ngModel)]="cpf" />`
})
class HostComponent {
  cpf = '';
}

describe('MascaraCpf', () => {

  let fixture: any;
  let input: HTMLInputElement;
  let host: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;

    fixture.detectChanges();

    input = fixture.nativeElement.querySelector('input');
  });

  it('deve formatar o CPF ao escrever valor via writeValue', () => {
    const directive = fixture.debugElement
      .query((d: any) => d.injector.get(MascaraCpf))
      .injector.get(MascaraCpf);

    directive.writeValue('12345678901');

    fixture.detectChanges();

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve formatar o CPF enquanto o usuário digita', () => {
    input.value = '12345678901';

    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve remover caracteres não numéricos ao digitar', () => {
    input.value = 'abc12345678901';

    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve limitar o CPF a 11 dígitos', () => {
    input.value = '123456789012345';

    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve marcar o campo como tocado ao perder foco', () => {
    const directive = fixture.debugElement
      .query((d: any) => d.injector.get(MascaraCpf))
      .injector.get(MascaraCpf);

    let touched = false;

    directive.registerOnTouched(() => {
      touched = true;
    });

    input.dispatchEvent(new Event('blur'));

    expect(touched).toBe(true);
  });

  it('deve desabilitar o input quando setDisabledState for chamado', () => {
    const directive = fixture.debugElement
      .query((d: any) => d.injector.get(MascaraCpf))
      .injector.get(MascaraCpf);

    directive.setDisabledState(true);

    expect(input.disabled).toBe(true);
  });

});

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MascaraCpf } from './mascara-cpf';

@Component({
  standalone: true,
  imports: [FormsModule, MascaraCpf],
  template: `<input mascaraCpf [(ngModel)]="cpf" />`
})
class HostComponent {
  cpf = '';
}

@Component({
  standalone: true,
  imports: [MascaraCpf],
  template: `<div mascaraCpf><input /></div>`
})
class HostWrapperComponent {}

@Component({
  standalone: true,
  imports: [MascaraCpf],
  template: `<div mascaraCpf></div>`
})
class HostSemInputComponent {}

describe('MascaraCpf', () => {

  let fixture: any;
  let input: HTMLInputElement;
  let directive: MascaraCpf;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);

    fixture.detectChanges();

    input = fixture.nativeElement.querySelector('input');

    directive = fixture.debugElement
      .query((d: any) => d.injector.get(MascaraCpf))
      .injector.get(MascaraCpf);
  });

  it('deve formatar CPF completo via writeValue', () => {
    directive.writeValue('12345678901');

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve formatar CPF com até 3 dígitos', () => {
    directive.writeValue('123');

    expect(input.value).toBe('123');
  });

  it('deve formatar CPF com até 6 dígitos', () => {
    directive.writeValue('123456');

    expect(input.value).toBe('123.456');
  });

  it('deve formatar CPF com até 9 dígitos', () => {
    directive.writeValue('123456789');

    expect(input.value).toBe('123.456.789');
  });

  it('deve remover caracteres não numéricos ao digitar', () => {
    const onChange = vi.fn();

    directive.registerOnChange(onChange);

    input.value = 'abc12345678901';

    directive.aoDigitar();

    expect(input.value).toBe('123.456.789-01');
    expect(onChange).toHaveBeenCalledWith('12345678901');
  });

  it('deve limitar o CPF a 11 dígitos', () => {
    input.value = '123456789012345';

    directive.aoDigitar();

    expect(input.value).toBe('123.456.789-01');
  });

  it('deve chamar onTouched ao sair do campo', () => {
    const onTouched = vi.fn();

    directive.registerOnTouched(onTouched);

    directive.aoSair();

    expect(onTouched).toHaveBeenCalled();
  });

  it('deve desabilitar o input quando setDisabledState for chamado', () => {
    directive.setDisabledState(true);

    expect(input.disabled).toBe(true);
  });

  it('não deve processar input quando estiver desabilitado', () => {
    const onChange = vi.fn();

    directive.registerOnChange(onChange);

    directive.setDisabledState(true);

    input.value = '12345678901';

    directive.aoDigitar();

    expect(onChange).not.toHaveBeenCalled();
  });

  it('deve encontrar input interno quando aplicado em container', async () => {
    const fixtureWrapper = TestBed.createComponent(HostWrapperComponent);

    fixtureWrapper.detectChanges();

    const container = fixtureWrapper.nativeElement.querySelector('div');
    const inputInterno = container.querySelector('input');

    inputInterno.value = '12345678901';

    container.dispatchEvent(new Event('input'));

    fixtureWrapper.detectChanges();

    expect(inputInterno.value).toBe('123.456.789-01');
  });

  it('deve lançar erro quando não existir input interno', async () => {
    const fixtureErro = TestBed.createComponent(HostSemInputComponent);

    const directiveErro = fixtureErro.debugElement
      .query((d: any) => d.injector.get(MascaraCpf))
      .injector.get(MascaraCpf);

    expect(() => directiveErro.writeValue('123')).toThrow();
  });
});

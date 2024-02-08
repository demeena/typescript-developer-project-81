import { describe, it, expect } from 'vitest';
import HexletCode from '../src/hexletCode';

describe('HexletCode.formFor', () => {
  it('creates a form with no fields with default method and action', () => {
    const template = {};
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {});
    expect(form).toBe('<form action="#" method="POST"></form>');
  });

  it('creates a form with a custom action URL', () => {
    const template = {};
    const form = HexletCode.formFor(template, { method: 'post', action: '/users' }, (f) => {});
    expect(form).toBe('<form action="/users" method="POST"></form>');
  });

  // Тесты для проверки вставки полей в форму
  it('creates a form with input fields based on the template', () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name');
      f.input('job');
      f.input('gender');
    });
    expect(form).toContain('<label for="name">name</label>');
    expect(form).toContain('<input name="name" type="text" value="rob"/>');
    expect(form).toContain('<label for="job">job</label>');
    expect(form).toContain('<input name="job" type="text" value="hexlet"/>');
    expect(form).toContain('<label for="gender">gender</label>');
    expect(form).toContain('<input name="gender" type="text" value="m"/>');
  });
});

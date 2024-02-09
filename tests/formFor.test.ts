import { describe, it, expect } from 'vitest';
import HexletCode from '../src/hexletcode';

describe('HexletCode.formFor', () => {
  it('creates a form with no fields with default method and action', () => {
    const template = {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {});
    expect(form).toBe('<form action="#" method="POST"></form>');
  });

  it('creates a form with a custom action URL', () => {
    const template = {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const form = HexletCode.formFor(template, { method: 'post', action: '/users' }, (f) => {});
    expect(form).toBe('<form action="/users" method="POST"></form>');
  });

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

  it('creates a form with a textarea field', () => {
    const template = { job: 'hexlet' };
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('job', { as: 'textarea' });
    });
    expect(form).toContain('<label for="job">job</label>');
    expect(form).toContain('<textarea cols="20" rows="40" name="job">hexlet</textarea>');
  });

  it('throws an error for a non-existing field', () => {
    const template = { name: 'rob' };
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      HexletCode.formFor(template, { method: 'post' }, (f) => {
        f.input('age');
      });
    }).toThrow("Field 'age' does not exist in the template.");
  });
});

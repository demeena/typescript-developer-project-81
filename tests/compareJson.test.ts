
import { describe, it, expect } from 'vitest';
import { compareJson } from '../dist/compareJson';

describe('compareJson', () => {
  it('returns true for two identical JSON objects', () => {
    const json1 = { name: 'John', age: 30 };
    const json2 = { name: 'John', age: 30 };
    expect(compareJson(json1, json2)).toBe(true);
  });

  it('returns false for two different JSON objects', () => {
    const json1 = { name: 'John', age: 30 };
    const json2 = { name: 'Jane', age: 25 };
    expect(compareJson(json1, json2)).toBe(false);
  });

  it('considers order of keys', () => {
    const json1 = { name: 'John', age: 30 };
    const json2 = { age: 30, name: 'John' };
    expect(compareJson(json1, json2)).toBe(true); 
  });
});

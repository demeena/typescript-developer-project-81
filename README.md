### Hexlet tests and linter status:
[![Actions Status](https://github.com/demeena/typescript-developer-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/demeena/typescript-developer-project-81/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6239f6d142e713955302/test_coverage)](https://codeclimate.com/github/demeena/typescript-developer-project-81/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/6239f6d142e713955302/maintainability)](https://codeclimate.com/github/demeena/typescript-developer-project-81/maintainability)

# HexletCode

## Пример использования

```typescript
import HexletCode from '@hexlet/code';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
  f.input('gender');
});

console.log(form);

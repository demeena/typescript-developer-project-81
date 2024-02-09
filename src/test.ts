import HexletCode, { FormBuilderInterface } from './hexletcode.js';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f: FormBuilderInterface) => {
  f.input('name');
  f.input('job', { as: 'textarea' }); 
  f.submit('Wow');
});

console.log(form);


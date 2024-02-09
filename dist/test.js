import HexletCode from './hexletcode.js';
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
});
console.log(form);
// <div></div>
/*
 <form action="#" method="post">
      <label for="name">Name</label>
      <input name="name" type="text" value="rob">
      <label for="job">Job</label>
      <textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea>
      <input type="submit" value="Wow">
  </form>
*/

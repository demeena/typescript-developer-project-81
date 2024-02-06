import HexletCode, { FormBuilderInterface, Tag } from './HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f: FormBuilderInterface) => {
  f.input('name');
  f.input('job', { as: 'textarea' }); 
  f.submit('Wow');
});

/*console.log(form);*/
console.log(new Tag("br").toString());
// <br>

console.log(new Tag("img", { src: "path/to/image" }).toString());
// <img src="path/to/image">

console.log(new Tag("input", { type: "submit", value: "Save" }).toString());
// <input type="submit" value="Save">

// Для парных тегов надо придумать как лучше
console.log(new Tag("label", {}, "Email").toString());
// <label>Email</label>

console.log(new Tag("label", { for: "email" }, "Email").toString());
// <label for="email">Email</label>

console.log(new Tag("div").toString());
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


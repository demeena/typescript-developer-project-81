"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HexletCode_1 = __importDefault(require("./HexletCode"));
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode_1.default.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
});
console.log(form);
/*
 <form action="#" method="post">
      <label for="name">Name</label>
      <input name="name" type="text" value="rob">
      <label for="job">Job</label>
      <textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea>
      <input type="submit" value="Wow">
  </form>
*/

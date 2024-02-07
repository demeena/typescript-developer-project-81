"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HexletCode_1 = __importStar(require("./HexletCode"));
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode_1.default.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
});
/*console.log(form);*/
console.log(new HexletCode_1.Tag("br").toString());
// <br>
console.log(new HexletCode_1.Tag("img", { src: "path/to/image" }).toString());
// <img src="path/to/image">
console.log(new HexletCode_1.Tag("input", { type: "submit", value: "Save" }).toString());
// <input type="submit" value="Save">
// Для парных тегов надо придумать как лучше
console.log(new HexletCode_1.Tag("label", {}, "Email").toString());
// <label>Email</label>
console.log(new HexletCode_1.Tag("label", { for: "email" }, "Email").toString());
// <label for="email">Email</label>
console.log(new HexletCode_1.Tag("div").toString());
// <div></div>


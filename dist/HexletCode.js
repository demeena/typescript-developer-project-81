"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
class Tag {
    constructor(name, attributes = {}, content) {
        this.name = name;
        this.attributes = attributes;
        this.content = content;
    }
    formatAttributes() {
        return Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');
    }
    wrapContent() {
        const attrs = this.formatAttributes();
        return `<${this.name}${attrs ? ' ' + attrs : ''}>${this.content}</${this.name}>`;
    }
    selfClosingTag() {
        const attrs = this.formatAttributes();
        const spaceBeforeSlash = attrs ? ' ' : '';
        return `<${this.name}${spaceBeforeSlash}${attrs}/>`;
    }
    toString() {
        const isSingleTag = this.name === 'img' || this.name === 'input' || this.name === 'br';
        return this.content !== undefined || !isSingleTag
            ? this.wrapContent()
            : this.selfClosingTag();
    }
}
exports.Tag = Tag;
class FormBuilder {
    constructor(template) {
        this.template = template;
        this.fields = [];
    }
    input(fieldName, options = {}) {
        if (!Object.prototype.hasOwnProperty.call(this.template, fieldName)) {
            throw new Error(`Field '${fieldName}' does not exist in the template.`);
        }
        const value = this.template[fieldName];
        let fieldHtml;
        if (options.as === 'textarea') {
            fieldHtml = new Tag('label', { for: fieldName }, fieldName).toString() +
                new Tag('textarea', { cols: "20", rows: "40", name: fieldName }, value).toString();
        }
        else {
            fieldHtml = new Tag('label', { for: fieldName }, fieldName).toString() +
                new Tag('input', { name: fieldName, type: "text", value }).toString();
        }
        this.fields.push(fieldHtml);
    }
    submit(value) {
        this.fields.push(new Tag('input', { type: "submit", value }).toString());
    }
    getFields() {
        return this.fields;
    }
}
class HexletCode {
    static formFor(template, options, callback) {
        const formBuilder = new FormBuilder(template);
        callback(formBuilder);
        const formFields = formBuilder.getFields().join('');
        const formAction = options.action || '#';
        const formMethod = options.method.toUpperCase();
        return `<form action="${formAction}" method="${formMethod}">${formFields}</form>`;
    }
}
exports.default = HexletCode;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormBuilder {
    constructor(template) {
        this.template = template;
        this.fields = [];
    }
    input(fieldName, options = {}) {
        const value = this.template[fieldName];
        let fieldHtml;
        if (options.as === 'textarea') {
            fieldHtml = `<label for="${fieldName}">${fieldName}</label>
<textarea cols="20" rows="40" name="${fieldName}">${value}</textarea>`;
        }
        else {
            fieldHtml = `<label for="${fieldName}">${fieldName}</label>
<input name="${fieldName}" type="text" value="${value}">`;
        }
        this.fields.push(fieldHtml);
    }
    submit(value) {
        this.fields.push(`<input type="submit" value="${value}">`);
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

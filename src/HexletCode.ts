type Template = {
  [key: string]: string;
};

type Options = {
  method: string;
  action?: string;
};

export interface FormBuilderInterface {
  input: (fieldName: string, options?: { as?: string }) => void;
  submit: (value: string) => void;
  getFields: () => string[];
}

class FormBuilder implements FormBuilderInterface {
  private template: Template;
  private fields: string[];

  constructor(template: Template) {
    this.template = template;
    this.fields = [];
  }

  input(fieldName: string, options: { as?: string } = {}) {
    const value = this.template[fieldName];
    let fieldHtml;

    if (options.as === 'textarea') {
      fieldHtml = `<label for="${fieldName}">${fieldName}</label>
<textarea cols="20" rows="40" name="${fieldName}">${value}</textarea>`;
    } else {
      fieldHtml = `<label for="${fieldName}">${fieldName}</label>
<input name="${fieldName}" type="text" value="${value}">`;
    }

    this.fields.push(fieldHtml);
  }

  submit(value: string) {
    this.fields.push(`<input type="submit" value="${value}">`);
  }

  getFields() {
    return this.fields;
  }
}

export default class HexletCode {
  static formFor(template: Template, options: Options, callback: (f: FormBuilderInterface) => void) {
    const formBuilder = new FormBuilder(template);
    callback(formBuilder);

    const formFields = formBuilder.getFields().join('');
    const formAction = options.action || '#';
    const formMethod = options.method.toUpperCase();

    return `<form action="${formAction}" method="${formMethod}">${formFields}</form>`;
  }
}

  

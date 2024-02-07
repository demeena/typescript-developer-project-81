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
export class Tag {
  private name: string;
  private attributes: { [key: string]: string };
  private content?: string;

  constructor(name: string, attributes: { [key: string]: string } = {}, content?: string) {
    this.name = name;
    this.attributes = attributes;
    this.content = content;
  }

  private formatAttributes(): string {
    return Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }

  private wrapContent(): string {
    const attrs = this.formatAttributes();
    return `<${this.name}${attrs ? ' ' + attrs : ''}>${this.content}</${this.name}>`;
  }

  private selfClosingTag(): string {
    const attrs = this.formatAttributes();
    const spaceBeforeSlash = attrs ? ' ' : '';
    return `<${this.name}${spaceBeforeSlash}${attrs}/>`;
  }

  toString(): string {
    const isSingleTag = this.name === 'img' || this.name === 'input' || this.name === 'br';
    return this.content !== undefined || !isSingleTag
      ? this.wrapContent()
      : this.selfClosingTag();
  }
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
      fieldHtml = new Tag('label', { for: fieldName }, fieldName).toString() +
        new Tag('textarea', { cols: "20", rows: "40", name: fieldName }, value).toString();
    } else {
      fieldHtml = new Tag('label', { for: fieldName }, fieldName).toString() +
        new Tag('input', { name: fieldName, type: "text", value }).toString();
    }
  
    this.fields.push(fieldHtml);
  }
  
  submit(value: string) {
    this.fields.push(new Tag('input', { type: "submit", value }).toString());
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

  

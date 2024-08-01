class F8 {
  constructor() {}
  static component(name, options) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
          this.data = options?.data?.() || {};
          this.template = options?.template;
          this.render();
        }
        render() {
          if (this.template) {
            const parsedTemplate = this.parseTemplate(this.template);
            this.shadowRoot.innerHTML = parsedTemplate;
            this.attachEvents();
          }
        }
        parseTemplate(template) {
          return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
            return this.data[key];
          });
        }
        attachEvents() {
          const events = {
            click: "click",
            dblclick: "dblclick",
          };

          Object.keys(events).forEach((event) => {
            this.shadowRoot
              .querySelectorAll(`[v-on\\:${event}]`)
              .forEach((el) => {
                const methodName = el.getAttribute(`v-on:${event}`);
                el.addEventListener(event, () => {
                  if (methodName.includes("++")) {
                    this.data.count++;
                  } else if (methodName.includes("--")) {
                    this.data.count--;
                  } else {
                    const match = methodName.match(/['"]([^'"]+)['"]/);
                    if (match) {
                      this.data.title = match[1];
                    }
                  }
                  this.render();
                });
              });
          });
        }
      }
    );
  }
}

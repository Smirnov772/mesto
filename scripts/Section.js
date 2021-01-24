export class Section {
  constructor({ items, renderer }, templateSelector) {
    this.items = items;
    this.renderer = renderer;
    this._container = templateSelector;
  }
  renderedItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}

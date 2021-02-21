export class Section {
  constructor({renderer }, templateSelector) {
    //this.items = items;
    this.renderer = renderer;
    this._container = templateSelector;
  }
  renderedItems(items) {
    items.forEach((item) => {
      this.renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}

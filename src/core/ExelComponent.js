import {DomListener} from '@core/DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // Возвразает шаблон компонента
  toHTML() {
    return ''
  }

  init(event) {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}

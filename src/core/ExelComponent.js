import {DomListener} from '@core/DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubsribes = []
    this.prepare()
  }

  prepare() {}

  // Возвразает шаблон компонента
  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubsribes.push(unsub)
  }

  init(event) {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubsribes.forEach(unsub => unsub())
  }
}

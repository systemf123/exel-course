export class Emitter {
  constructor() {
    this.listeners = {}
  }

  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => {
        return listener !== fn
      })
    }
  }
}

// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('test', data => console.log('Sub', data))
// emitter.subscribe('test2', data => console.log('Sub', data))
// emitter.emit('23232', 42)
//
// setTimeout(() => {
//   emitter.emit('test', 'after to 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('test', 'after to 4 seconds')
//   emitter.emit('test2', 'ater test2 method')
// }, 5000)

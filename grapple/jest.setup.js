/* eslint-disable class-methods-use-this */

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }

  observe() {
    this.callback([{ isIntersecting: true }])
  }

  unobserve() {
    return null
  }
}

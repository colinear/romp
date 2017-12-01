export function changeView(state) {
  return {
    type: 'CHANGE_VIEW',
    view: state
  }
}

export function increment() {
  return {
    type: 'INCREMENT'
  }
}

export function decrement() {
  return {
    type: 'DECREMENT'
  }
}
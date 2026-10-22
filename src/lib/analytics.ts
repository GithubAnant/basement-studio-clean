const noop = (..._args: unknown[]) => {}

const analytics = {
  capture: noop,
  captureException: noop,
  init: noop,
  loadToolbar: noop
}

export default analytics

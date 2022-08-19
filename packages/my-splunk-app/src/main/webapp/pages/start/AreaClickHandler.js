class AreaClickHandler {
  constructor(options) {
    this.options = options
  }

  canHandle(event) {
    console.log('event', event)
    return (
      event.type === 'area.click' && event.payload.name
    )
  }

  handle(event) {
    return [
      {
        type: 'setToken',
        payload: {
          tokens: {
            area: event.payload.name
          }
        }
      }
    ]
  }
}

export default AreaClickHandler

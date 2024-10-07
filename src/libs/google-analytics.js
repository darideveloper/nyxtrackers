/**
 * Track open form event
 * @param {string} eventName - The name of the event
 */
export function submitEvent(eventName, value = 1) {
  gtag('event', eventName, {
    'event_category': "buy_form",
    'event_label': eventName,
    'value': value
  })

  console.log({ eventName, value })
}
import { sleep } from '../tools/events.js'

export async function getPromoCodeDiscount (promoCode) {

  // Simullate api call
  const validPromoCodes = {
    'NYXTRACKERS10': {
      "type": "amount",
      "value": 10,
    },
    'NYXTRACKERS15': {
      "type": "amount",
      "value": 15,
    },
    'NYXTRACKERS20': {
      "type": "amount",
      "value": 20,
    },
  }

  // Simulate api call
  await sleep(2)

  // Validate promo code
  if (validPromoCodes.hasOwnProperty(promoCode)) {
    return validPromoCodes[promoCode]
  } else {
    return { "type": "amount", "value": 0 }
  }
}
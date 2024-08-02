import { sleep } from '../tools/events.js'

export async function ValidatePromoCode (promoCode) {

  // Simullate api call
  const validPromoCodes = {
    'NYXTRACKERS10': 10,
    'NYXTRACKERS15': 15,
    'NYXTRACKERS20': 20,
  }

  // Simulate api call
  await sleep(2)

  // Validate promo code
  if (validPromoCodes.includes(promoCode)) {
    return validPromoCodes[promoCode]
  } else {
    return 0
  }
}
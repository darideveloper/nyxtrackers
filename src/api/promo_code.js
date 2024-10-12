import { sleep } from '../tools/events.js'

const VITE_DASHBOARD_API = import.meta.env.VITE_DASHBOARD_API

export async function getPromoCodeDiscount (promoCode) {

  const enpoint = `${VITE_DASHBOARD_API}/store/promo-code/`

  // Simulate api call with promo code as json
  const response = await fetch(enpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "promo_code": promoCode }),
  })
  const jsonData = await response.json()
  return jsonData["data"]
}
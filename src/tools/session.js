const dashboardHost = import.meta.env.VITE_DASHBOARD_HOST

/**
 * Set the nyx cookies
 * @returns {Object} - The username and email
 * @returns {string} - return.username - The session username
 * @returns {string} - return.email - The session email
 */
export function getCookies () {
  const cookies = document.cookie.split(';')
  const nyxCookieUsername = cookies.find(cookie => cookie.includes("nyx_username"))
  const nyxCookieEmail = cookies.find(cookie => cookie.includes("nyx_email"))

  if (nyxCookieUsername && nyxCookieEmail) {
    const username = nyxCookieUsername.split('=')[1].replaceAll('"', '')
    const email = nyxCookieEmail.split('=')[1]
    return { username, email }
  }
  
  return { username: "", email: "" }
}

/**
 * Clear the nyx cookies
 * @param {boolean} redirectDashboard - Redirect to the dashboard logout page
 */
export function clearCookies(redirectDashboard = false) {

  // Delete nyx cookies
  const deletebase = `expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  const deleteCookies = [
    "nyx_username",
    "nyx_email"
  ]
  deleteCookies.forEach(cookie => {
    const cookieExpired = `${cookie}=; ${deletebase}`
    document.cookie = cookieExpired
    console.log("Clearing cookie:", { cookie, cookieExpired })
  })

  // Refresh page
  setTimeout(() => window.location.reload(), 100)

  // Go to dashboard in new tab
  if (redirectDashboard) {
    const logoutLink = `${dashboardHost}/admin/logout`
    window.open(logoutLink, '_blank')
  }
}
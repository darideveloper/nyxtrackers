let autoPlayRunning = true
let autoPlayStarted = false

function goNext() {
  if (autoPlayRunning) {
    const buttonNext = document.querySelector('.splide__arrow--next')
    buttonNext.click()
  }
}

export function autoPlay() {

  if (autoPlayStarted) {
    return
  }

  autoPlayStarted = true

  // Detect when mouse is over the gallery
  const gallery = document.querySelector('.splide__list')
  gallery.addEventListener('click', () => {
    autoPlayRunning = false
  })
  gallery.addEventListener('touchstart', () => {
    autoPlayRunning = false
  })
  gallery.addEventListener('mousedown', () => {
    autoPlayRunning = false
  })

  // Go next first time 
  setTimeout(() => {
    goNext()
    // Go next after first image
    setInterval(() => {
      goNext()
    }, 4000)
  }, 8000)
}
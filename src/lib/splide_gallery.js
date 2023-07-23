let autoPlayRunning = true
let autoPlayStarted = false

function goNext() {
  if (autoPlayRunning) {
    console.log('goNext')
    const buttonNext = document.querySelector('.splide__arrow--next')
    buttonNext.click()
  } else {
    console.log('no goNext')
  }
}

export function autoPlay() {

  console.log('autoPlay start')

  if (autoPlayStarted) {
    console.log('autoPlay already started')
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
    console.log('goNext first time')
    goNext()
    // Go next after first image
    setInterval(() => {
      console.log('goNext after first')
      goNext()
    }, 4000)
  }, 5000)
}
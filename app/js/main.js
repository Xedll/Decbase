// @ts-nocheck
document.addEventListener('click', (e) => {
   e.preventDefault()
})

const serviceSlider = document.querySelector('.service__content')
const serviceSliderLine = document.querySelector('.service__line')
const serviceSliderNext = document.querySelector('.service__next')
const serviceSliderPrev = document.querySelector('.service__prev')
let serviceOffset = 0

const feedbackSlider = document.querySelector('.feedback__slider')
const feedbackSliderLine = document.querySelector('.feedback__line')
const feedbackSliderNext = document.querySelector('.feedback__next')
const feedbackSliderPrev = document.querySelector('.feedback__prev')
let feedbackOffset = 0


serviceSliderNext.addEventListener('click', () => {
   if (serviceOffset - 462 < serviceSliderLine.offsetWidth * -1 + 462 * 2) {
      serviceOffset = 0
   } else {
      serviceOffset -= 462
   }
   serviceSliderLine.style.left = `${serviceOffset}px`
})
serviceSliderPrev.addEventListener('click', () => {
   if (serviceOffset + 462 > 0) {
      serviceOffset = -1 * (serviceSliderLine.offsetWidth - 462 * 2 - 425)
   } else {
      serviceOffset += 462
   }
   serviceSliderLine.style.left = `${serviceOffset}px`
})

feedbackSliderNext.addEventListener('click', () => {
   if (feedbackOffset - 670 < feedbackSliderLine.offsetWidth * -1 + 670 * 1) {
      feedbackOffset = 0
   } else {
      feedbackOffset -= 670
   }
   feedbackSliderLine.style.left = `${feedbackOffset}px`
})
feedbackSliderPrev.addEventListener('click', () => {
   if (feedbackOffset + 670 > 0) {
      feedbackOffset = -1 * (feedbackSliderLine.offsetWidth - 670 * 2 - 590)
   } else {
      feedbackOffset += 670
   }
   feedbackSliderLine.style.left = `${feedbackOffset}px`
})

document.querySelectorAll('.about__itemImage').forEach((item, index) => {
   if (index % 2 == 1) {
      item.classList.add('rev')
   }
})

document.querySelectorAll('.feedback__itemImage').forEach(item => {
   item.style.top = `${(item.closest('.feedback__item').offsetHeight - item.offsetHeight) / 2}px`
})
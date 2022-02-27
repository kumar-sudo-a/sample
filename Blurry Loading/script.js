const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) //blurring function will be called for an interval of every 30 milli-seconds. 

function blurring() {
  load++

  if (load > 99) { 
    clearInterval(int) // clearInterval function will make it stop at 100.
  }

  loadText.innerText = `${load}%` // This number will start fully opaque and will fade out as it loads up.
  loadText.style.opacity = scale(load, 0, 100, 1, 0) //For the number (%)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // For the image, we only want maximum 30% of blur effect.
}

// Below is the function which has been used to map a range of numbers from (1 to 100) to (0 to 1) at the same amount of time. 
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
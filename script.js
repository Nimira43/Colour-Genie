const containerEl = document.querySelector('.container')

for (let i = 0; i < 30; i++) {
  const colourContainerEl = document.createElement('div')
  colourContainerEl.classList.add('colour-container')
  containerEl.appendChild(colourContainerEl)
}

const generateColours = () => {
  colourContainerEls.forEach((colourContainerEl) => {
    const newColourCode = randomColour()
    colourContainerEl.style.backgroundColor = '#' + newColourCode
    colourContainerEl.innerText = '#' + newColourCode
  })
}

const randomColour = () => {
  const chars = '0123456789abcdef'
  const colourCodeLength = 6
  let colourCode = ''
  for (let i = 0; i < colourCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    colourCode += chars.substring(randomNum, randomNum + 1)
  }
  return colourCode
}

const colourContainerEls = document.querySelectorAll('.colour-container')
generateColours()
const images = document.querySelectorAll('img')

const updateImageSource = images => {
  for (let i = 0, l = images.length; i < l; i++) {
    const image = images[i]

    image.src = image.src.replace(/media\.discordapp\.net/i, 'cdn.discordapp.com')
    img.style.imageOrientation = 'from-image'
  }
}

new MutationObserver(mutations => {
  const newImages = []

  for (let i = 0, l = mutations.length; i < l; i++) {
    const addedNodes = mutations[i].addedNodes

    for (let k = 0, s = addedNodes.length; k < s; k++) {
      const addedNode = addedNodes[k]

      if (addedNode.tagName === 'IMG') {
        newImages.push(addedNode)
      }
    }
  }

  updateImageSource(newImages)
})
  .observe(document.body, {
    childList: true,
    subtree: true
  })

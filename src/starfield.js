import _ from 'lodash'

export const makeStarfield = (canvas) => {
  const ctx = canvas.getContext('2d')
  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height

  window.onresize = _.debounce(() => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }, 50)

  // Generate stars
  const limit = 100
  const stars = []

  _.times(limit, () => {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.5,
      speed: _.random(0.8, 1.1)
    })
  })

  // Draw stars to canvas
  const drawStars = () => {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'white'
    ctx.beginPath()
    _.times(limit, i => {
      const star = stars[i]
      ctx.moveTo(star.x, star.y)
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, true)
    })
    ctx.fill()
    moveStars()
  }

  const moveStars = () => {
    _.times(limit, i => {
      const star = stars[i]

      star.x -= 1 * star.r * 0.5

      if (star.x < 0) {
        star.x = width + 2
        star.y = Math.random() * height
      }
    })
  }

  setInterval(drawStars, 30)
}

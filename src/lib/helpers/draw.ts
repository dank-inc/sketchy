export const arc = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  start = 0,
  end = Math.PI * 2,
) => {
  //
  context.beginPath()

  context.arc(x, y, r, start, end)

  context.closePath()
}

export const saver = (context: CanvasRenderingContext2D, body: () => void) => {
  context.save()

  body()

  context.restore()
}

export const drawShape = (
  context: CanvasRenderingContext2D,
  points: [number, number][],
) => {
  context.beginPath()
  const [x, y] = points[0]

  context.moveTo(x, y)
  for (let [x, y] of points) {
    context.lineTo(x, y)
  }
  context.lineTo(x, y)
}

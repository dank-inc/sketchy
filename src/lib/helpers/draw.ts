type ArtOptions = {
  fill?: boolean
  stroke?: boolean
  start?: number
  end?: number
}

export const arc = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  {
    fill = true,
    stroke = false,
    start = 0,
    end = Math.PI * 2,
  }: ArtOptions = {},
) => {
  //
  context.beginPath()

  context.arc(x, y, r, start, end)

  context.closePath()
  if (stroke) context.stroke()
  if (fill) context.fill()
}

export const saver = (context: CanvasRenderingContext2D, body: () => void) => {
  context.save()

  body()

  context.restore()
}

type ShapeOptions = {
  fill?: boolean
  stroke?: boolean
  closed?: boolean
}

export const drawShape = (
  context: CanvasRenderingContext2D,
  points: [number, number][],
  { fill = false, stroke = false, closed = true }: ShapeOptions = {},
) => {
  context.beginPath()
  const [x, y] = points[0]

  context.moveTo(x, y)
  for (let [x, y] of points) {
    context.lineTo(x, y)
  }
  if (closed) context.lineTo(x, y)

  if (stroke) context.stroke()
  if (fill) context.fill()
}

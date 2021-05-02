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

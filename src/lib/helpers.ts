// context wrappers

// export type SetFillStyleFn = (ctx: CanvasRenderingContext2D) => (cb: HSLFn | RGBFn)

// helper fns
export type BlurFn = (u: number, range: number) => string
export const blur: BlurFn = (u, range) => `blur(${u * range}px)`

export type HSLFn = (hu: number, su: number, lu: number, a?: number) => string
export const hsl: HSLFn = (hu, su, lu, a = 1) => {
  const h = hu * 360
  const s = su * 100
  const l = lu * 100
  return `hsla(${h}, ${s}%, ${l}%, ${a})`
}

export type RGBFn = (r: number, g: number, b: number, a?: number) => string
export const rgb: RGBFn = (ru, gu, bu, a = 1) => {
  const r = ru * 255
  const g = gu * 255
  const b = bu * 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

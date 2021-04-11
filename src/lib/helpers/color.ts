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

export const hex = (ru: number, gu: number, bu: number) => {
  const r = Math.floor(ru * 255).toString(16)
  const g = Math.floor(gu * 255).toString(16)
  const b = Math.floor(bu * 255).toString(16)
  return `#${r}${g}${b}`
}

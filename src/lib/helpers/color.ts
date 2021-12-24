import { BlendMode } from '../types'

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

export const hex = (ru: number, gu?: number, bu?: number) => {
  const r = Math.floor(ru * 255).toString(16)
  const g = Math.floor((gu || ru) * 255).toString(16)
  const b = Math.floor((bu || ru) * 255).toString(16)
  return `#${r}${g}${b}`
}

export const createLinearGradient = (
  context: CanvasRenderingContext2D,
  c1: string,
  c2: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => {
  var grd = context.createLinearGradient(x1, y1, x2, y2)
  grd.addColorStop(0, c1)
  grd.addColorStop(1, c2)
  return grd
}

export const blendModes: BlendMode[] = [
  'source-over',
  'source-in',
  'source-out',
  'source-atop',
  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',
  'lighter',
  'copy',
  'xor',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
]

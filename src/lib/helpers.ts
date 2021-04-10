export const domString = (body: DOMStringMap): string => {
  return ''
}

export const blur = (u: number, range: number) => `blur(${u * range}px)`

export const hsl = (h: number, s: number, l: number, a = 1) => {
  const hh = h * 360
  const ss = s * 100
  const ll = l * 100
  return `hsla(${hh}, ${ss}%, ${ll}%, ${a})`
}

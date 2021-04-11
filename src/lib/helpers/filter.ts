// export const blur = (amount: number): string => `blur(${amount}px)`
export const blur = (u: number, range: number): string => `blur(${u * range}px)`

export const brightness = (u: number) => `brightness(${u * 100}%)`
export const contrast = (u: number) => `contrast(${u * 100}%)`
export const dropShadow = (
  u: number,
  v: number,
  color: string,
  range: number,
) => `drop-shadow(${u * range}px ${v * range}px ${color})`
export const grayscale = (u: number) => `grayscale(${u * 100}%)`
export const hueRotate = (u: number) => `hue-rotate(${u * 360}deg)`
export const invert = (u: number) => `invert(${u * 100}%)`
export const opacity = (u: number) => `opacity(${u * 100}%)`
export const saturate = (u: number) => `saturate(${u * 100}%)`
export const sepia = (u: number) => `sepia(${u * 100}%)`

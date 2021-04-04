
type Params = {
  onPrev?: () => void
  onNext?: () => void
}

export const controls = ({ onPrev, onNext }: Params) => {
  document.addEventListener('keydown', (e) =>  {
    // console.log(e.key)

    const actionMap: Record<string, (() => void) | undefined> = {
      a: onPrev,
      d: onNext,
    }

    actionMap[e.key]?.()
  })
}
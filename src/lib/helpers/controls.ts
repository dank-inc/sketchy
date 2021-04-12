export const createControls = (
  handlers: Record<KeyboardEvent['code'], () => void>,
) => {
  // const state: Record<KeyboardEvent['key'], boolean> = {}
  const state: string[] = []

  const handleKeyDown = (e: KeyboardEvent) => {
    handlers[e.code]?.()
    state.push(e.code)
  }

  window.addEventListener('keydown', handleKeyDown)

  return [
    state,
    // , () => window.removeEventListener('keydown', handleKeyDown)
  ]
}

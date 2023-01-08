export const getInputElement = (id: string) => {
  return document.querySelector(`#${id}`) as HTMLInputElement
}

export const setInputValue = (id: string, value: string | number) => {
  getInputElement(id).value = value as string
}

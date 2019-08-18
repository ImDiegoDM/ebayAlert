export function modalOpen(onConfirm: () => void, text: string) {
  return {
    payload: {
      onConfirm,
      text,
    },
    type: 'MODAL_OPEN',
  };
}

export function modalClose() {
  return {
    type: 'MODAL_CLOSE',
  };
}

export function modalConfirm() {
  return {
    type: 'MODAL_CONFIRM',
  };
}

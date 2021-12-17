import { useState, useCallback } from 'react'

export default function useTrigger(initialValue = false) {
  const [visible, setVisible] = useState(initialValue)

  const open = useCallback(() => {
    setVisible(true)
  }, [setVisible])

  const close = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  return {
    visible,
    open,
    close,
  }
}

'use client'

import { useState } from 'react'

export const useModalState = (initialState = false) => {
  const [condition, setCondition] = useState(initialState)

  const onOpen = () => setCondition(true)

  const onClose = () => setCondition(false)

  const onToggle = () => setCondition(prev => !prev)

  return { isOpen: condition, onOpen, onClose, onToggle }
}

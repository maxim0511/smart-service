'use client'

import { FCWithChildren } from '@/shared/@types'
import { AppStore, makeStore } from '@/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

const StoreProvider: FCWithChildren = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) storeRef.current = makeStore()

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider

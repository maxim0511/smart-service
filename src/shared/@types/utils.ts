import { FC, PropsWithChildren } from 'react'

export type PropsWithClassName<T = unknown> = T & { className?: string }

export type FCWithClassName<T = unknown> = FC<PropsWithClassName<T>>

export type FCWithChildren<T = unknown> = FC<PropsWithChildren<PropsWithClassName<T>>>

export type Nullable<T> = T | null

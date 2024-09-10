import { FCWithChildren } from '@/shared/@types'

export const ContentLayout: FCWithChildren = ({ children }) => (
  <main className='flex flex-col items-center justify-center min-h-content w-full'>{children}</main>
)

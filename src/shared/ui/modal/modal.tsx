import { Dialog, Transition, TransitionChild } from '@headlessui/react'
import React, { Fragment } from 'react'
import Close from '@/shared/assets/icons/common/close.svg'
import cn from 'classnames'
import { FCWithChildren } from '@/shared/@types'

export interface ModalProps {
  isOpen: boolean
  closableEsc?: boolean
  withCloseIcon?: boolean
  onClose: () => void
}

export const Modal: FCWithChildren<ModalProps> = ({
  children,
  isOpen,
  closableEsc = true,
  withCloseIcon = true,
  className = '',
  onClose,
}) => (
  <Transition show={isOpen} as={Fragment}>
    <Dialog
      as='div'
      className='fixed inset-0 z-50 bg-[#262424] bg-opacity-70 will-change-auto flex items-center justify-center overflow-y-auto'
      onClose={() => closableEsc && onClose()}
    >
      <TransitionChild
        as={Fragment}
        enter='ease-out duration-200'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-150'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='relative w-full desktop:w-fit px-small'>
          <div
            className={cn(
              'bg-white p-5 rounded-large max-h-[calc(100vh-100px)] overflow-auto will-change-transform',
              className
            )}
          >
            {children}
          </div>
          {withCloseIcon && (
            <button
              className='absolute flex items-center justify-center w-10 h-10 right-0 desktop:right-2.5 top-0 -translate-y-full desktop:translate-x-full desktop:translate-y-0'
              onClick={onClose}
            >
              <Close className='stroke-white' />
            </button>
          )}
        </div>
      </TransitionChild>
    </Dialog>
  </Transition>
)

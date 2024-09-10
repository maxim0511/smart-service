import { FC } from 'react'
import cn from 'classnames'
import { TextFieldProps, TextField } from '@mui/material'

interface InputProps {
  label?: string
  error?: boolean
  errorMessage?: string
  isRequired?: boolean
}

export const Input: FC<InputProps & TextFieldProps> = ({
  className,
  name,
  label,
  error,
  errorMessage,
  placeholder = '',
  isRequired,
  ref,
  ...rest
}) => {
  const withErrorMessage = !!(error && errorMessage && !rest.disabled)
  const labelSuffix = isRequired ? '*' : ''

  return (
    <div className={cn('flex flex-col gap-4 w-full', className)}>
      <label>{label}</label>
      <TextField
        {...rest}
        ref={ref}
        id={name}
        name={name}
        label={`${placeholder} ${labelSuffix}`}
        error={withErrorMessage}
        helperText={errorMessage}
      />
    </div>
  )
}

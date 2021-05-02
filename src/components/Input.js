import { TextField } from '@material-ui/core'
import React from 'react'

function Input({ id, label, onChange, value, error }) {
  return (
    <TextField
      id={id}
      label={label}
      variant='filled'
      style={{ width: '100%', margin: '.5em 0' }}
      value={value}
      onChange={onChange}
      error={error !== ''}
      helperText={error !== '' ? `${id} ${error}` : ''}
      type={id === 'password' ? 'password' : 'text'}
    ></TextField>
  )
}

export default Input

import React from 'react'

const Input = React.forwardRef(
  (
    {
      value,
      onChange,
      label,
      name,
      placeholder,
      wrapperClass,
      leadingIcon,
      trailingIcon
    },
    ref
  ) => {
    return (
      <div className={wrapperClass + ' input-wrapper '}>
        {!!label && <label htmlFor={name}>{label !== '' ? name : label}</label>}
        <input
          type='text'
          placeholder={placeholder || name}
          name={name}
          value={value}
          onChange={onChange}
        />
        <div className='input-trailing-icon'>
          {!!trailingIcon && trailingIcon}
        </div>
      </div>
    )
  }
)

export default Input

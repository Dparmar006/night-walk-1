import React from 'react'

const TextArea = React.forwardRef(
  (
    {
      value,
      rows = 5,
      onChange,
      label,
      name,
      placeholder,
      wrapperClass,
      trailingIcon,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={wrapperClass + ' input-wrapper '}>
        {!!label && <label htmlFor={name}>{label !== '' ? name : label}</label>}
        <textarea
          placeholder={placeholder || name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          ref={ref}
          {...rest}
        />
        <div className='input-trailing-icon'>
          {!!trailingIcon && trailingIcon}
        </div>
      </div>
    )
  }
)

export default TextArea

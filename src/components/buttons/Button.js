import React from 'react'

const Button = ({
  emoji,
  className,
  buttonType = 'button',
  title,
  tooltipTitle,
  tooltipPlacement = 'top',
  ...rest
}) => {
  return (
    <button type={buttonType} className={`button ${className || ''}`} {...rest}>
      {emoji} {!!title && title}
    </button>
  )
}

export default Button

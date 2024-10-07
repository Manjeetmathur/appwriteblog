import React from 'react'

const Button = ({
       children,
       type = 'button',
       bgColor = 'bg-blue-600',
       textColor = 'text-white',
       className  = '',
       ...props
}) => {
  return (
    <button className={``}>
      {children}
    </button>
  )
}

export default Button

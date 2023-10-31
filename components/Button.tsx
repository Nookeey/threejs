import React from 'react'

const Button = ({ children }: { children: String }) => {
  return (
    <button className='bg-lime-400 inline-block py-1 px-6 text-black rounded-2xl'>{children}</button>
  )
}

export default Button
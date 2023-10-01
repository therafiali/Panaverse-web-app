import React from 'react'
import { FC } from 'react'
const Button: FC<{text:string}> = ({text}) => {
  return (
    <button className='px-8 py-4 bg-[#00616c] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 duration-200    '>{text}</button>
  )
}

export default Button
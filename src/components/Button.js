import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='my-5 mx-[0.3rem] px-4 py-1 bg-gray-300 rounded-md'>{name}</button>
    </div>
  )
}

export default Button
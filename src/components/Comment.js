import React from 'react'

const Comment = ({data}) => {
    const { name, text, replies } = data;

  return (
    <div className='mt-2 flex bg-gray-100'>
        <img className='h-10 w-10 p-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="userIcon" />
        <div>
            <p className='px-1 text-lg font-semibold'>{name}</p>
            <p className='p-1'>{text}</p>
        </div>
    </div>
  )
}

export default Comment
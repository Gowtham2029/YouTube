import React from 'react'

const VideoCard = ({info}) => {

    
     const {snippet, statistics} = info;
     const {title, channelTitle, thumbnails} = snippet;
     const {viewCount} = statistics;

  return (
    <div className='m-2 p-2 h-[24rem] shadow-lg'>
        <img className='rounded-lg w-72' src={thumbnails.medium.url} alt="thumbnail" />
        <ul className=''>
            <li className='font-bold w-64 py-2'>{title}</li>
            <li className='w-64'>{channelTitle}</li>
            <li>{(viewCount/1000)}k views </li>
        </ul>
    </div>
  )
}

export default VideoCard
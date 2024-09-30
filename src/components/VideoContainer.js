import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
     try{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await data.json();
      console.log(jsonData)
      setVideos(jsonData.items)

    }
    catch(error){
      console.log("Error while fetching the data "+error.message)
    }
  }


  return (
    <div className='flex flex-wrap m-5'>
      {videos.map(video => <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>)}
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  )
}

export default VideoContainer
import React from 'react'

const Banner = ({movie}) => {
    console.log('[Banner.jsx] :', movie);

    const div_style={
        backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`
    }
  return (
    <div className='banner' style={div_style}>
      <div className='banner-info'>
      <h1>{movie?.title}</h1>
      <p>{movie?.overview}</p>
      </div>
      </div>
  )
}

export default Banner
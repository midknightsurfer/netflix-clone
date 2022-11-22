import { Movie } from '../typings'
import Image from 'next/image'
import { baseUrl } from '../constants/movie'
import { useState, useEffect } from 'react'

interface Props {
  netflixOriginals: Movie[],
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        fill={true}
        alt={movie?.name || movie?.title}
        style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Banner
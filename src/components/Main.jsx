import React, { useEffect, useState } from "react"
import requests from "./Requests"
import axios from "axios"
import { FaPlay } from "react-icons/fa"

const Main = () => {
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }

  return (
    <div className="'w-full h-[800px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[800px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-5 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{movie?.title}</h1>
          <p className="text-gray-400 text-sm my-1 md:py-5">
            Released: {movie?.release_date}
          </p>
          <div className="my-4">
            <button className="border font-bold md:text-2xl bg-white text-black border-gray-300 my-2 py-2 px-5 ml-4 rounded">
              <FaPlay className="inline mr-2" />
              Play
            </button>
            <button className="border border-black font-bold bg-black bg-opacity-75 text-white py-2 px-5 ml-5 md:text-2xl rounded">
              Watch Later
            </button>
          </div>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white my-6 md:my-10 md:text-2xl">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main

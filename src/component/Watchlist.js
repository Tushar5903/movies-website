import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import genreids from "../utility/genre"

function Watchlist({ watchlist, setWatchlist, removeToWatchlist }) {
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currentgenre, setCurrentGenre] = useState('All Genres')

  const handleSearcch = (event) => {
    setSearch(event.target.value)
  }

  function sortIncreasing() {
    const setIncrease = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...setIncrease])
  }

  function aciveHandler(genre) {
    setCurrentGenre(genre)
  }

  function sortDecresing() {
    const setDecrease = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...setDecrease])
  }

  function popularityIncreare() {
    const setIncrease = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity
    })
    setWatchlist([...setIncrease])
  }

  function popularityDecrese() {
    const setDecrease = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity
    })
    setWatchlist([...setDecrease])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    });
    temp = Array.from(new Set(temp))
    setGenreList(['All Genres', ...temp])

  }, [watchlist])


  return (
    <div>
      <div className='sorting-buttons'>
        {genreList.map((genre) => {
          return <button className={currentgenre === genre ? "sorting-button-blue" : "sorting-button-grey"} onClick={() => aciveHandler(genre)} > {genre}</button>
        })}

      </div>
      <div className='searching'>
        <input type='text' className='searching-input' placeholder='Search For Movies' onChange={handleSearcch}></input>
      </div>


      <div className='table-div'>
        <table className='table-tag'>
          <thead className='table-heading'>
            <tr>
              <th>Name</th>
              <div className='column-heading'>
                <th className='Rating-heading'>
                  <div className='arrows'  ><FaArrowUp onClick={sortDecresing} /></div>
                  <th>Rating</th>
                  <div className='arrows' ><FaArrowDown onClick={sortIncreasing} /></div>
                </th>
              </div>
              <div className='column-heading'>
                <th className='popularity-heading'>
                  <div className='arrows'><FaArrowUp onClick={popularityDecrese} /></div>
                  <th>Popularity</th>
                  <div className='arrows'><FaArrowDown onClick={popularityIncreare} /></div>
                </th>
              </div>

              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist
              .filter((movieObj) => {
                if (currentgenre === 'All Genres') {
                  return true
                } else {
                  return genreids[movieObj.genre_ids[0]] === currentgenre
                }
              })
              .filter((movieObj) => {
                return movieObj.title.toLowerCase().
                  includes(search.toLocaleLowerCase())
              })
              .map((movieObj) => {
                return <tr className='image-table-raw'>
                  <td className='image-table-data'>
                    <img src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`} className='image-tag'></img>
                    <div className='movie-title'>{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>

                  <td onClick={() => { removeToWatchlist(movieObj) }} className='watchlist-delete-button'>Delete</td>

                </tr>
              })}


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Watchlist

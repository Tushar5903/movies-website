import React from 'react'

function Moviecard({ poster_path, name,addToWatchlist,movieObj , removeToWatchlist , watchlist }) {

  function doesPresent (movieObj) {
    for (let i=0; i<watchlist.length; i++){
      if (watchlist[i].id === movieObj.id){
        return true
      }
    }
    return false
  }

  return (
    <div className='movie-card' >
      <div className='Movie-card-first-div' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>
      { doesPresent(movieObj)? 
      (<div className='add-button' onClick={()=>{removeToWatchlist(movieObj) }} > 
        ❤️
        </div>) :
      (<div className='add-button' onClick={()=>{addToWatchlist(movieObj)}  }>
        🤍
        </div>)}



        
        <div className='movie_name' >
          {name}
        </div>

      </div>
    </div>
  )
}

export default Moviecard

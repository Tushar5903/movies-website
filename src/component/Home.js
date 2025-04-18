import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Moviecard from './Moviecard'
import axios from 'axios'
import PageCount from './PageCount';

function Home({addToWatchlist , removeToWatchlist , watchlist}) {

    const [movies, setMovies] = useState([]);
    const [pageNo , setPageNo]= useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b36ffd3ba4b6933b37330a6015f7da7b&language=en-US&page=${pageNo}`).then(function (res) {
            setMovies(res.data.results);
        }, [pageNo]);
    })
    return (
        <div className='home-first-div'>
            <div className='home-second-div'>
                <Banner></Banner>
            </div>

            <div className='home-third-div'>
                Trending Movie
            </div>

            <div className='home-forth-div'>
                {
                    movies.map((movieObj)=>{
                        return <Moviecard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} addToWatchlist={addToWatchlist} removeToWatchlist={removeToWatchlist} watchlist={watchlist} movieObj={movieObj}/>
                    })
                }
            </div>
            <div>
                <PageCount pageNo = {pageNo} setPageNo = {setPageNo} />
            </div>
        </div>

    )
}

export default Home

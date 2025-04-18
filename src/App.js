import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Watchlist from "./component/Watchlist";
import { useEffect, useState } from "react";

function App() {
  let[watchlist , setWatchlist] = useState([]);

  let addToWatchlist = (movieObj)=>{
    let newWatchlist = [...watchlist , movieObj]
    localStorage.setItem("movieApp" , JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist) 
    console.log(newWatchlist)
  }

  let removeToWatchlist = (movieObj)=>{
    let filterWatchlist = watchlist.filter((movie)=>{
      return movie.id !== movieObj.id
    })
    localStorage.setItem("movieApp", JSON.stringify(filterWatchlist));
    setWatchlist(filterWatchlist)
    console.log(filterWatchlist)
  }

  useEffect(()=>{
    let movieFromLocalStorage = localStorage.getItem("movieApp")
    if (!movieFromLocalStorage){
      return 
    }
    setWatchlist(JSON.parse(movieFromLocalStorage))
  } , [])

  return (
    <div className="App">
      <div className="Nav-bar-div">
        <Navbar></Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home addToWatchlist={addToWatchlist} removeToWatchlist={removeToWatchlist} watchlist = {watchlist} />}></Route>
          <Route path="/Watchlist" element={<Watchlist watchlist = {watchlist} setWatchlist={setWatchlist} removeToWatchlist ={removeToWatchlist} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;


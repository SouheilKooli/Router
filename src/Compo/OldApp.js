import React, { useState }  from "react";
import Header from "../Compo/Navbar/Header";
import List from "../Compo/List";
import Search from "../Compo/Search";
import { movieContainer } from "../Compo/Movie-Container";
import Add from "../Compo/Modal/Add";
import "../App.css";
 /* import Footer from "../Compo/Footer/Footer"; */


function App() {

  const [movieData, setMovieData] = useState(movieContainer);
  const [movieSearch, setMovieSearch] = useState("");
  const [rateMovie, setRateMovie] = useState(1);
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]); 
  };
    return ( 
    <div className="App">
      <h1>
      <Header text="MOVIE APP" /></h1>
      <div style={{ cursor: "pointer" }}>
        <Search
          setMovieSearch={setMovieSearch}
          rateMovie={rateMovie}
          setRateMovie={setRateMovie}
        />
      </div>
      <Add adding={adding} />
      <List movieData={movieData} movieSearch={movieSearch} rateMovie={rateMovie} /> 
    </div>
  );
}

export default App;
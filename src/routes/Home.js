import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
class Home extends React.Component {
  // let index = 0;
  state = {
    isLoading: true,
    movies: []
  }

  getMovieData = async () => 
  {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //const recv_data = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //const movies = recv_data.data.data.movies;
    // const {
    //   data:{
    //     data:
    //       {movies}
    //     }
    //   } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    // const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    const {data:{data:{movies}}} = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
    // const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    

    // console.log("in getMovieData");
    // console.log(movies)
    // console.log("loging start")
    // console.log(movies.data)
    // console.log(movies.data.data)
    // console.log(movies.data.data.movies)
    //this.setState({movies: recv_data.data.data.moives})
    this.setState({movies, isLoading: false})
    // console.log(this.state.movies)
  }

  componentDidMount()
  {
    // let index = 0;
    // for(index = 0; index < 10000; index++)
    // {
    //   console.log(index);
    // }
    // setTimeout(
    //   ()=>{this.setState({isLoading: false});},3000
    // )
    this.getMovieData();

  }

  renderMovie = () =>
  {
    const {movies} = this.state
    console.log("in the renderMovie()");
    console.log(movies);
    return( 
      movies.map(movie=> 
        // <Movie key = {movie.id} 
        //         id = {movie.id} 
        //         year = {movie.year} 
        //         summary = {movie.summary} 
        //         poster = {movie.medium_cover_image} 
        //         title={movie.title}/>)
        <Movie key = {movie.id}  id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres= {movie.genres}/>)
    )
    // return <Movie title={this.state.movies[0].title}></Movie>
  }

  render()
  {
    // console.log("in render()")
    // console.log(this.state.movies)
    const {isLoading} = this.state;
    return(
      <section className = "container">
      {isLoading ? 
        <div className = "loader">
          <span className = "loader__text">Loading...</span>
        </div>
      : 
      <div className = "movies">
      {this.renderMovie()} 
      </div>  
      }
      
      </section>
    )
  }
}

export default Home;

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//sets state for movie component
export class Movie extends Component {
  state = {
    movie: "",
    movieArray: [],
  };
//sets movie state on change
  handleOnChange = (event) => {
    this.setState({
      movie: event.target.value,
    });
  };
//make axios call to api on submit and sets state ov movie array
  onSubmit = async (event) => {
    try {
      let result = await axios.get(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&s=${this.state.movie}`
      );

      console.log(result);

      this.setState({
        movieArray: result.data.Search,
      });
    } catch (e) {
      console.log(e);
    }
  };
//function to display list of movies from movie array state
  showMovieList = () => {
    return this.state.movieArray.map((item) => {
      return (
        <div
          key={item.imdbID}
          style={{ width: 300, height: 300, marginRight: 25 }}
        >
          <Link
            to={{
              pathname: `/movie-detail/${item.Title}`,
              //search: `?t=${item.Title}`, //?minPrice=20&maxPrice=59&color=white&size=10
            }}
          >
            <div>
              <img src={item.Poster} alt={item.Title} />
            </div>
            <div>
              Title: {item.Title}
              Year: {item.Year}
            </div>
          </Link>
        </div>
      );
    });
  };
//renders everything into the DOM
  render() {
    console.log(this.props);

    return (
      <div>
        <div
          style={{
            width: 500,
            margin: "0 auto",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <input
            type="text"
            placeholder="Search something..."
            name="movie"
            onChange={this.handleOnChange}
          />
          <button onClick={this.onSubmit}>Search</button>
        </div>

        <div
          style={{
            width: 1200,
            margin: "0 auto",
            textAlign: "center",
            marginTop: "50px",
            display: "flex",
          }}
        >
          {this.showMovieList()}
        </div>
      </div>
    );
  }
}

export default Movie;

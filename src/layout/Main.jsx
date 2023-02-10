import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=db2da59&s=panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (mv, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=db2da59&s=${mv}${type !== 'all' ? `&type=${type}` :''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    return (
      <div className="container content">
        <Search search={this.searchMovies}/>
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <Movies movies={this.state.movies} />
          </>
        )}
      </div>
    );
  }
}

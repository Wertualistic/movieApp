import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.search(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.search(this.state.search, this.state.type)
    });
  };

  render() {
    return (
      <>
        <div class="row">
          <div class="col s12">
            <div class="input-field" style={{ display: "flex" }}>
              <input
                placeholder="Search"
                type="text"
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <a
                class="waves-effect waves-light btn"
                onClick={() => this.props.search(this.state.search, this.state.type)}
              >
                Search movies
              </a>
            </div>
            <div style={{ gap: "30px", display: "flex" }}>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

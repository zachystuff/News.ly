import React from 'react';

const Search = (props) => (
  <div className="search">
    <span>
      <input
        type="image"
        src="https://img.icons8.com/dotty/80/000000/x-coordinate.png"
        onClick={props.handleClearPage}
        className="btn-img"
      />
    </span>
    <form onSubmit={props.handleSubmitSearch} className="search-bar">
      <label>
        <input
          type="text"
          onChange={props.handleChangeSearch}
          value={props.search_value}
          className="btn-input"
          placeholder="search news.ly" />
      </label>
      <input type="submit" className="btn-submit" />
    </form>
  </div>
)

export default Search;
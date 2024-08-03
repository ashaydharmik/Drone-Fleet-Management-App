import React from "react";
import "./search.scss"


const Search = ({ setSearchInput, error, searchInput }) => {
   

  return (
    <>
      <section className="search">
        <div className="heading">
          <h1>WELCOME</h1>
          <h2>Search the Drones here...</h2>
          <div className="search-bar">
            <form action="#" >
              <input
                type="search"
                placeholder="Search By Status..."
                 value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          {error && <div className="errorBox"><p>{error}</p></div>}
        </div>
      </section>
    </>
  );
};

export default Search;

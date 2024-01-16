import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1 className="heading">Tech News</h1>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </div>
    </form>
  );
};
export default Search;

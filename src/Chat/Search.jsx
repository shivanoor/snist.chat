import React, { useState, useContext } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = ({ setText }) => {
	return (
		<div className="searchForm">
			<span>
				<FontAwesomeIcon icon={faSearch} className="search-icon" />
			</span>
			<input
				type="text"
				placeholder="Find a user "
				onChange={(e) => setText(e.target.value)}
				// onKeyDown={(e) => setText(e.target.value)}
			/>
		</div>
		// {/* {err && <span>User Not Found!!</span>} */}
	);
};

export default Search;

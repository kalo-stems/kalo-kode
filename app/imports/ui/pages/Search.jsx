import React from 'react';
import { Button } from 'react-bootstrap';

const SearchList = () => (
  <>
    <input id="search-bar" className="fluid" size="50" type="text" placeholder="Search" />
    <Button className="px-2" id="search-button">Search</Button>
  </>
);

export default SearchList;

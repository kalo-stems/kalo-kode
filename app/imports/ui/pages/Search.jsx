import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Search = () => (
  <Col>
    <input className="fluid " type="text" placeholder="Search" />
    <Button className="px-2" id="search-button">Search</Button>
  </Col>
);

export default Search;

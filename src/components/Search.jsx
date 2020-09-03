import React from 'react';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { search } from '../slices/results';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <section className='Search'>
      <input
        type='text'
        placeholder='Search movies...'
        onChange={event => dispatch(search(event.target.value))}
      />
    </section>
  );
}

export default Search;
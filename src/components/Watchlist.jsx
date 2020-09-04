import React from 'react';
import './Watchlist.scss';
import defaultPoster from '../img/defaultPoster.jpg';

const Watchlist = () => {
  return (
    <section className='Watchlist'>
      <h1>My watch list</h1>
      <section className='movies'>
        <div className='movie'>
          <div className='poster' style={{ backgroundImage: `url(${defaultPoster})` }} />
          <div className='info'>
            <div className='title'>{'My movie'}</div>
            <div className='year'>{2020}</div>
          </div>
        </div>
        <div className='movie'>
          <div className='poster' style={{ backgroundImage: `url(${defaultPoster})` }} />
          <div className='info'>
            <div className='title'>{'My movie'}</div>
            <div className='year'>{2020}</div>
          </div>
        </div>
        <div className='movie'>
          <div className='poster' style={{ backgroundImage: `url(${defaultPoster})` }} />
          <div className='info'>
            <div className='title'>{'My movie'}</div>
            <div className='year'>{2020}</div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Watchlist;

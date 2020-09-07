import watchlist from './watchlist'
import deepFreeze from 'deep-freeze'
import { ADD_MOVIE, REMOVE_MOVIE } from '../actions/watchlist'

describe('watchlist reducer', () => {
  const testMovie = {
    Title: 'Some title',
    Year: '2015',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster: 'someposterurl.jpg'
  }

  describe('ADD_MOVIE', () => {
    it('adds movie to the state', () => {
      const state = deepFreeze({})
      const action = {
        type: ADD_MOVIE,
        payload: testMovie
      }
      const nextState = {
        [testMovie.imdbID]: testMovie
      }
      expect(watchlist(state, action)).toMatchObject(nextState)
    })
  })

  describe('REMOVE_MOVIE', () => {
    it('removes movie when present', () => {
      const state = deepFreeze({
        [testMovie.imdbID]: testMovie
      })
      const action = {
        type: REMOVE_MOVIE,
        payload: testMovie.imdbID
      }
      const nextState = {}
      expect(watchlist(state, action)).toEqual(nextState)
    })

    it('returns the same state when movie is not present', () => {
      const state = deepFreeze({})
      const action = {
        type: REMOVE_MOVIE,
        payload: testMovie.imdbID
      }
      const nextState = {}
      expect(watchlist(state, action)).toEqual(nextState)
    })
  })
})

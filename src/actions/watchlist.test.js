import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addMovie, ADD_MOVIE, REMOVE_MOVIE, removeMovie } from './watchlist'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('watchlist actions', () => {
  const testMovie = {
    Title: 'Some title',
    Year: '2015',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster: 'someposterurl.jpg'
  }

  describe('addMovie', () => {
    it('dispatches expected actions', () => {
      const store = mockStore({})
      const expectedActions = [{
        type: ADD_MOVIE,
        payload: testMovie
      }]
      store.dispatch(addMovie(testMovie))
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })

  describe('removeMovie', () => {
    it('dispatches expected actions', () => {
      const store = mockStore({})
      const expectedActions = [{
        type: REMOVE_MOVIE,
        payload: testMovie.imdbID
      }]
      store.dispatch(removeMovie(testMovie.imdbID))
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })
})
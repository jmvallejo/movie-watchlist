import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { search, API_BASE, fetchStart, fetchResponse } from './results'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('results slice', () => {
  const testMovie = {
    Title: 'Some title',
    Year: '2015',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster: 'someposterurl.jpg'
  }

  describe('thunks', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    describe('search', () => {
      it('dispatches expected actions when succeeding', () => {
        const store = mockStore({})
        const term = 'test'
        const params = new URLSearchParams({
          apikey: 'b0a320b1',
          s: term
        })
        fetchMock.getOnce(API_BASE + params, {
          body: { Search: [ testMovie ] },
          headers: { 'content-type': 'application/json' }
        })
        const expectedActions = [
          {
            type: fetchStart.type,
            payload: term
          },
          {
            type: fetchResponse.type,
            payload: [ testMovie ]
          }
        ]
        return store
          .dispatch(search(term))
          .then(() => expect(store.getActions()).toMatchObject(expectedActions))
      })
    })
  })
})

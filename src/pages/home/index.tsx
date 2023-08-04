import { useDispatch, useSelector } from 'react-redux'
import { useGetDocsListQuery } from '~/services/docs'

import { RootState } from '~/store'
import { counter } from '~/store/reducer'

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetDocsListQuery()

  return (
    <div>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="my-4 w-52 rounded border border-solid border-white px-4 py-3"
          aria-label="Increment value"
          onClick={() => dispatch(counter.increment())}
        >
          Increment
        </button>

        <button
          type="button"
          className="my-4 w-52 rounded border border-solid border-white px-4 py-3"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.decrement())}
        >
          Decrement
        </button>
        <div className="w-44">count is: {count}</div>
      </div>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((v, i) => {
          return (
            <span key={i}>
              {' | '}
              <a
                className="App-link"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {v.name}
              </a>
            </span>
          )
        })
      ) : (
        false
      )}
    </div>
  )
}

export default Home

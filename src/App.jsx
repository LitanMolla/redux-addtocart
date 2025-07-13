
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'
import Root from './components/Root'

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/counter' element={<Counter />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App

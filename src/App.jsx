
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'
import Root from './components/Root'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App

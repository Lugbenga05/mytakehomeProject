import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import ProductPage from './components/pages/ProductPage'

function App() {
  

  return (
    <>
        
        <BrowserRouter>
        <ProductList/>
          <Routes>
            <Route path="/productpage"element={<ProductPage/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App




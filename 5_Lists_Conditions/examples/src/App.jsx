import { useState } from 'react'
import './App.css'

import TermsOfUse from './components/TermsOfUse'
import ProductsList from './components/ProductsList'
import ProductsListMap from './components/ProductsListMap'
import Todos from './components/Todos'

function App() {
  const products = [
    {id: 'p1', title: 'A Book', price: 59.99},
    {id: 'p2', title: 'A Carpet', price: 129.99},
    {id: 'p3', title: 'A guitar', price: 39.99},
  ]

  return (
    <>
      <ProductsListMap products={products}/>
      <Todos />
    </>
  )
}

export default App

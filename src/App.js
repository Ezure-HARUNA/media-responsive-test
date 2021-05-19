/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react'
import CategoryBar from './components/CategoryBar'
import Sitagaki from './components/Sitagaki'
import NavBar from './components/NavBar'
import GohharaMihon from './components/GohharaMihon'

const margin = css({
  marginBottom: 400,
})

const App = () => {
  return (
    <div>
      {/* <CategoryBar /> */}
      {/* <GohharaMihon /> */} 
      {/* <NavBar /> */}
      <Sitagaki />
    </div>
  )
}

export default App
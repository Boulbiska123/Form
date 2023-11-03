import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Formbody from './Formbody'

export default function App() {
  return (
    <>
      <div className='container mx-auto mt-auto'>
        <Header />
        <Formbody />
        <Footer title={'Social Media'} />
      </div>
    </>
  )
}


import React from 'react'
import './App.css'
import Mobile from '../view/mobileview/mobile'
import Tablet from '../view/tabview/tablet'
import Website from '../view/webview/website'

function App() {

  return (
    <div>
      <Mobile />
      <Tablet />
      <Website />
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Mobile from './components/view/mobileview/mobile'
import Tablet from './components/view/tabview/tablet'
import Website from './components/view/webview/website'

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
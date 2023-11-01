import React from 'react'
import './App.css'
import Header from '../Header/Header'
import AdDesigner from '../AdDesigner/AdDesigner'
import Votes from '../Votes/Votes'
import Ad from '../Ad/Ad'

const App = () => (
  <div className='App'>
    <Header user="Chirpus"/>
    <div className='ad-container'> 
      <Ad flavor="Blue Moon" fontSize={13} darkTheme={true}/>
      <Ad flavor="Black Cherry" fontSize={24} darkTheme={false}/>
      <Ad flavor="Superman" fontSize={36} darkTheme/>
    </div>
    <AdDesigner />
    <Votes />
  </div>
)

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import MainPage from '../pages/MainPage'

export default function Dashboard() {
  return (
    <div>
        <Routes>
        <Route path='/' element={App} exact/>
            <Route path='/Main' element={MainPage} exact/>
        </Routes>
    </div>
  )
}

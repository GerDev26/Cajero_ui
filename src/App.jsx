import './App.css'
import { Home } from './pages/home'
import { Hola } from './pages/hola'
import { Route, Routes } from 'react-router'
import { UserLoggedProvider } from './contexts/InputContext'

export default function App(){
  return(
    <UserLoggedProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Hola' element={<Hola/>}/>
      </Routes>
    </UserLoggedProvider>
  )
}
import './App.css'
import { Home } from './pages/home'
import { Route, Routes } from 'react-router'
import { KeyboardProvider } from './contexts/InputContext'
import { CategoryPage } from './pages/categoryPage'
import { AppointmentsPage } from './pages/appointmentsPage'

export default function App(){
  return(
    <KeyboardProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='/turnos' element={<AppointmentsPage/>}/>
      </Routes>
    </KeyboardProvider>
  )
}
import './App.css'
import { Home } from './pages/home'
import { Route, Routes } from 'react-router'
import { KeyboardProvider, UserLoggedProvider } from './contexts/InputContext'
import { CategoryPage } from './pages/categoryPage'

export default function App(){
  return(
    <KeyboardProvider>
    <UserLoggedProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
      </Routes>
    </UserLoggedProvider>

    </KeyboardProvider>
  )
}
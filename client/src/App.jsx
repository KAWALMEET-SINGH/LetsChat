
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { useConversationContext } from './context/ConversationContext'

function App() {
  const {authUser} = useAuthContext();
const {conversationSelected,setConversationSelected} = useConversationContext();
  return (
   
    <>
     <div className={`p-4 h-screen flex items-center justify-center`}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ authUser ? <Navigate to={"/home"}/>:< SignIn />}/>
        <Route path='/signup' element={authUser ? <Navigate to={"/home"}/>: <SignUp  />}/>
        <Route path='/home' element={ !authUser ? <Navigate to={"/"}/>:<Home  />}/>
      </Routes>
      </BrowserRouter>
      <Toaster position="top-right"
  reverseOrder={false}/>
     </div>
    </>
  )
}

export default App


import { Route, Routes } from 'react-router-dom';
import './App.css';

import {  ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Reset from './Pages/Login/Reset/Reset';
import Navbar from './Shared/Navbar/Navbar';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Todo from './Pages/Todo/Todo';
import Home from './Pages/Home/Home';

function App() {

  return (
    <div className="">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='register' element={<Register></Register>}></Route>
       <Route path='reset' element={<Reset></Reset>}></Route>
       <Route path='todo' element={
         <RequireAuth>
           <Todo></Todo>
         </RequireAuth>
       }></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;

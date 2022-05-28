import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Header from './pages/Shared/Header/Header'
import SignUp from './pages/SignUp/SignUp';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AllItem from './pages/AllItem/AllItem'
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Inventory from './pages/Inventory/Inventory';
import Item from './pages/Item/Item';
import MyItem from './pages/MyItem';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/allitem' element={
          <RequireAuth>
            <AllItem></AllItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/manageitem' element={<AllItem></AllItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/myitem" element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App

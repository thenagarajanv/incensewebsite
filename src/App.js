import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailPage from './Components/DetailPage';
import SideBar from './Components/SideBar';
import SignUp from './Components/LoginAndSignUp/SignUp';
import SignIn from './Components/LoginAndSignUp/SignIn';
import Cart from './Components/Cart/Cart';
import AdminDashboard from './Admin/AdminDashboard';
import ProductManagement from './Admin/Components/ProductManagement';
import Settings from './Admin/Components/Settings'
import Orders from './Admin/Components/Orders';
import Customers from './Admin/Components/Customers';
import Dashboard from './Admin/Components/Dashboard';
import { useState } from "react";
import { products } from './Components/productsData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/ProductManagement' element={<ProductManagement/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Customers' element={<Customers/>}/>
        <Route path='/Settings' element={<Settings/>}/> */}
        
        <Route path='/' element={<Home />}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='/DetailPage/:id' element={<DetailPage />}/>
        <Route path="SideBar" element={<SideBar />}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import Home from './Components/Home';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import DetailPage from './Components/DetailPage';
// import SideBar from './Components/SideBar';
// import SignUp from './Components/LoginAndSignUp/SignUp';
// import SignIn from './Components/LoginAndSignUp/SignIn';
// import AdminDashboard from './Admin/AdminDashboard';
// import ProductManagement from './Admin/Components/ProductManagement';
// import Settings from './Admin/Components/Settings'
// import Orders from './Admin/Components/Orders';
// import Customers from './Admin/Components/Customers';
// import Dashboard from './Admin/Components/Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path='/' element={<AdminDashboard/>}/>
//         <Route path='/Dashboard' element={<Dashboard/>}/>
//         <Route path='/ProductManagement' element={<ProductManagement/>}/>
//         <Route path='/Orders' element={<Orders/>}/>
//         <Route path='/Customers' element={<Customers/>}/>
//         <Route path='/Settings' element={<Settings/>}/> */}
        
//         <Route path='/' element={<Home />}/>
//         <Route path='/DetailPage/:id' element={<DetailPage />}/>
//         <Route path="SideBar" element={<SideBar />}/>
//         <Route path='SignUp' element={<SignUp/>}/>
//         <Route path='SignIn' element={<SignIn/>}/>
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailPage from './Components/DetailPage';
import SideBar from './Components/SideBar';
import Cart from './Components/Cart/Cart';
import FragranceOil from './Components/FragranceOil';
import Decor from './Components/Decor';
import IncenseSticks from './Components/IncenseSticks';
import WinterCollection from './Components/WinterCollection';
import TrackOrder from './Components/TrackOrder';
import Contact from './Components/Contact';
import AdminDashboard from './Admin/AdminDashboard';
import ProductManagement from './Admin/Components/ProductManagement';
import Settings from './Admin/Components/Settings'
import Orders from './Admin/Components/Orders';
import Customers from './Admin/Components/Customers';
import Dashboard from './Admin/Components/Dashboard';
import { SignIn } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';
import { useState } from "react";
import { products } from './Components/productsData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='/DetailPage/:id' element={<DetailPage />}/>
        <Route path="SideBar" element={<SideBar />}/>
        <Route path='IncenseSticks' element={<IncenseSticks/>}/>
        <Route path='FragranceOil' element={<FragranceOil/>}/>
        <Route path='Decor' element={<Decor/>}/>
        <Route path='WinterCollection' element={<WinterCollection/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='TrackOrder' element={<TrackOrder/>}/>
        <Route path='/sign-in' element ={<SignIn />}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/ProductManagement' element={<ProductManagement/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Customers' element={<Customers/>}/>
        <Route path='/Settings' element={<Settings/>}/>
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

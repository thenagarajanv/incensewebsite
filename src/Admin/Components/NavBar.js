import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import Phool from 'C:/Users/Nagarajan V/incensewebsite/src/Components/Logo/Phool_Logo.webp';
import { Navbar } from 'react-bootstrap';

function NavBar() {
    return (
      <div className="sidebar">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul style={{textDecoration:"none"}} class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                  <Link to="/">
                    <h1 class="navbar-brand">
                        <Link to='/' ><img src={Phool} style={{height:"40px",width:"80px"}}></img></Link>
                    </h1>
                  </Link>
                  <li class="nav-item">
                    <Link to='/ProductManagement'>
                      <a style={{textDecoration: 'none'}} class="nav-link">{<ManageAccountsIcon />} Products Management</a>
                    </Link>
                  </li>
                    <li class="nav-item">
                    <Link to='/Orders'>
                      <a class="nav-link" style={{ textDecoration: 'none' }}> {<ShoppingCartIcon />} Orders</a>
                    </Link>
                    </li>
                  <Link to='/Customers'>
                    <li class="nav-item">
                      <a class="nav-link">{<PeopleIcon />}Customers</a>
                    </li>
                  </Link>
                  <Link to='/Settings'>
                  <li class="nav-item">
                  <a class="nav-link">{<SettingsIcon />}Settings</a>
                  </li>
                  </Link>
              </ul>
              </div>
          </div>
          </nav>
          
      </div>
    );
  }
export default NavBar;
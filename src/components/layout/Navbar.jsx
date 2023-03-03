import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible((current) => !current);
  };
 
  const pathName = useLocation().pathname;

  return  (
    <header className="flex justify-between p-4 lg:p-8">
      {isAuthenticated ? (
          <Link to={'/vehicles'} className="flex items-center gap-1">
            <span className="font-bold text-xl">Vroom</span>
          </Link>
      ):(
        <Link to={'/'} className="flex items-center gap-1">
          <span className="font-bold text-xl">Vroom</span>
        </Link>
      )}

      { isAuthenticated || pathName === "/register" || pathName === "/login" ? (
        <></>
      ) : (
      <div className="md:hidden flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <button className="bg-primary text-white p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        <Link to='/vehicles'>
          <div>Cars</div>
        </Link>
        <div className="border-l border-gray-300"></div>
        <Link>
          <div>Trucks</div>
        </Link>
        <div className="border-l border-gray-300"></div>
        <Link>
          <div>Motorcycles</div>
        </Link>
      </div>
      
      )}

      

      { isAuthenticated  ? (
              <div className="relative inline-block text-left" onClick={handleToggle}>
              <div>
                <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
                  <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            {visible && 
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <Link to="/bookings/fulfillment">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabIndex="-1" id="menu-item-0">My Booked Listings</a>
                  </Link>
                  <Link to="/bookings">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabIndex="-1" id="menu-item-1">My Bookings</a>
                  </Link>
                  <Link to="/vehicles/favorites">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabIndex="-1" id="menu-item-5">My Favorites</a>
                  </Link>
                </div>
                <div className="py-1" role="none">
                  <Link to="vehicles/my-listings">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabIndex="-1" id="menu-item-2">My Listings</a>

                  </Link>
                  <Link to="/vehicles/new">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500" role="menuitem" tabIndex="-1" id="menu-item-3">Create Listing</a>
                  </Link>
                </div>
                <div className="py-1" role="none">
                  <Link to={'/'}>
                  <a onClick={logout} href="#!">
                    <span className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500">Logout</span>
                  </a>
                  </Link>
                </div>
              </div>
              }
            </div>
      ):(
            <div className="flex">
              {pathName === "/login" || pathName === "/" ? (
                <Link to={'/register'} className="mr-2">
                  <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Register
                  </button>
                </Link>
              ) : (<></>)}
              {pathName ==="/register" || pathName === "/" ? (
                <Link to={'/login'}>
                <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Login        
                </button>
                </Link>
              ):(<></>)}
            </div>
      )}

    </header>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
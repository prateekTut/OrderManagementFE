import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Sidebar.css";
import "./css/Header.css";

import Logo from "./img/logo.jpg";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import { FRONTEND_API } from "./urls";

function Headerr() {
  const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const roles = localStorage.getItem("roles")
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    localStorage.removeItem("token")
    localStorage.removeItem("roles")
    localStorage.removeItem("userId")
    fetch(FRONTEND_API + 'logout')
    .then(() => {
      window.location.href = '/'; // Redirect to home page after logout
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });
  };

  
  return (
    <div>
      <div className='main_content_iner'>
        <div class='sidenav'>
          <nav class='navbar navbar-expand-sm ' id='navbar'>
            <div class='container-fluid'>
              <a class='navbar-brand' href='#'>
                <img src={Logo} alt='BigCo Inc. logo' id='logo' />
              </a>
              <a class='navbar-brand'></a>
              <div class='collapse navbar-collapse'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li class='nav-item'>
                    <a class='nav-link active' aria-current='page'>
                      <Link to='/dashboard'> Home </Link>
                    </a>
                  </li>
                  
                  {
                  console.log(roles)}

                  {roles ? (
                    <li class='nav-item'>
                      <a class='nav-link ' href='#' tabindex='-1' onClick={logout}>
                        <Link to=''>Sign out</Link>
                      </a>
                    </li>
                  ) : (
                    <li class='nav-item'>
                      <a class='nav-link ' href='#' tabindex='-1' aria-disabled=''>
                        <Link to='/login'>Login</Link>
                      </a>
                    </li>
                    // ==========================================================
                  )}
                </ul>
              </div>
            </div>
          </nav>
          {roles == "admin" ? (
            <>
              <a id='anav' class='sidemenu'>
                <Link to='/Updatetutors'> Experts </Link>
              </a>

              <a class='sidemenu'>
                <Link to='/updateotm'> OTMs</Link>
              </a>
              
              <a class='sidemenu'>
                <Link to='/teamLead'> Team Leads</Link>
              </a>

              <a class='dropdown'>
                <a class='dropbtn'>Clients</a>
                <div class='dropdown-content'>
                  <Link to='/UpdateClientdata'>Student</Link>
                  <Link to='/Updatevonder'>Vendor</Link>
                </div>
              </a>
              <a class='sidemenu'>
                <Link to='/Assingntask'>Tasks</Link>
              </a>
              <a class='sidemenu'>
                <Link to='/register'>Register</Link>
              </a>
              {/* <a class='dropdown'>
                <a class='dropbtn'>Invoice</a>
                <div class='dropdown-content'>
                  <Link to='/invoicedata'>Client Invoice</Link>
                  <Link to='/tutors-invoice'>Tutor Invoice</Link>
                </div>
              </a> */}
            </>
          ) : (
            null
          )}
          { roles == "otm" || roles == "lead" || roles=="expert" ? (
            <a class='sidemenu'>
              <Link to='/Assingntask'>Tasks</Link>
           </a> 
          ):(
            null
          )
            
          }
          { roles == "hr" ? (
            <>
              <a id='anav' class='sidemenu'>
              <Link to='/Updatetutors'> Experts </Link>
            </a>

            <a class='sidemenu'>
              <Link to='/updateotm'> OTMs</Link>
            </a>
            
            <a class='sidemenu'>
                <Link to='/teamLead'> Team Leads</Link>
            </a>
            
            <a class='sidemenu'>
              <Link to='/attendanceOverview'>Employee's Attendace</Link>
            </a>

          </>
          ) : (
            null
          )

          }

        </div>
      </div>
    </div>
  );
}

export default Headerr;

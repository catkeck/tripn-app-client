import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  function handleLogout() {
    localStorage.removeItem("token")
  }                      
  return (  
    <div>                      
      <div className="logo"><h1><Link to={`/`}>Tripn</Link></h1></div>
       {localStorage["token"] ? <div className="auth-links"><Link to={'/profile'}>My Profile</Link><Link to={'/'} onClick={handleLogout}> Log Out</Link></div> : <div><Link to={'/signup'}>Sign Up</Link> <Link to={'/login'}>Log In</Link></div>}
      <h1></h1>
    </div>
  )
}
    
 export default NavBar


      
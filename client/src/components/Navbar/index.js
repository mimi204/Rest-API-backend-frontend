import React from "react";
import AddUser from "../AddUser"
import "./style.css";
const NavBar = () => {
  return (
    <div>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" /><link rel="stylesheet" href="./style.css" />
  
      
<nav class="navbar is-danger" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
            <div style={{fontSize:'40px' , padding:'0px 20px'}} height={28}>CONTACT LIST</div>
    
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
        </div>
        
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="button">
          <AddUser /> 
        </div>
      </div>
    </div>
        </div>
        

</nav>
    </div>
  );
};



export default NavBar;
import React from 'react'
import "./style.css";
import { Link } from "react-router-dom"


const Description = (props) => {
    console.log(props)
    return (
       
<div>
    <div className="cardD">
            <div className="card-backgroundD" >
                 <img src="https://www.mbahalex.com/wp-content/uploads/2019/04/246x0w.jpg" class="card-imageD"/>
            
      </div>
      
<div className="card-infoD">
        <h1 className="titreD">INFORMATIONS OF {props.location.state.user.name}</h1>
         <h2 className="discrD"><i className="fas fa-envelope" /> {props.location.state.user.email}</h2>
        <h2 className="discrD"><i class="fas fa-phone-alt"></i> {props.location.state.user.phone}</h2>
          <h2 className="discrD"> <i class="fas fa-unlock"></i> {props.location.state.user.password}</h2>

        
            </div>

            </div>
                 <button class="button is-danger"><Link to='/'class="link">Return</Link></button>
</div>
     


    
    );
};

export default Description;

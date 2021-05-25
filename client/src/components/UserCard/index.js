import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actions";
import EditUser from "../EditUser";
import {Link} from 'react-router-dom'
import "./stylee.css";
import Description from "../Description";


const UserCard = ({ user }) => {
  console.log(user)
  const dispatch = useDispatch();
  return (
        <div className="card">
            <div className="card-background" >
                 <img src="https://www.mbahalex.com/wp-content/uploads/2019/04/246x0w.jpg" class="card-image"/>

               {user.name[0]}
      </div>
      
<div className="card-info">
        <h1 className="titre"> {" "}{user.name}{" "}</h1>
         <h2 className="discr"><i className="fas fa-envelope" /> {user.email}</h2>
        <h2 className="discr"><i class="fas fa-phone-alt"></i> {user.phone}</h2>
      
        <Link to={{
          pathname: `/Description/${user._id}`,
          state:{user}
        }}
         class="view">  View profile </Link>
        
          <EditUser user={user} />
             
      <button  class="button is-danger" onClick={() => {dispatch(deleteUser(user._id));dispatch(getUsers());  }}>Delete</button></div>

    </div>
  );
};

export default UserCard;
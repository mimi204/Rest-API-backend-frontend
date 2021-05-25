import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "../../redux/actions";
import "./style.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const addUserStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  fontSize: "25px",
  fontWeight: "800",
  color: "black",
  textAlign: "center",
  backgroundColor: "white",
  cursor: "pointer",
};

Modal.setAppElement("#root");

const AddUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" /><link rel="stylesheet" href="./style.css" />
  
      <div class="buttons">
  <button class="button is-warning is-light" onClick={openModal}>ADD USER</button>
      </div>
      
     

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form  onSubmit={(e) => e.preventDefault()}>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
          <input  class="input"
                type="text"
                placeholder="First name"
            value={name.toLocaleUpperCase()}
                onChange={(e) => setName(e.target.value)} />
                <span className="icon is-left">
       <i class="fas fa-user"></i>
      </span>
      <span className="icon is-right">
        <i className="fas fa-check" />
      </span>
            </div></div>
          
          <div className="field">
            <div className="control has-icons-left has-icons-right" >
          <input  class="input"
                type="email"
                placeholder="Email"
            value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <span className="icon is-left">
        <i className="fas fa-envelope" />
      </span>
      <span className="icon is-right">
        <i className="fas fa-check" />
      </span>
         </div></div>


                      <div className="field">
            <div className="control has-icons-left has-icons-right">
          <input  class="input"
                type="tel"
                placeholder="Phone"
            value={phone}
                onChange={(e) => setPhone(e.target.value)} />
               <span className="icon is-left">
       <i class="fas fa-phone-alt"></i>
      </span>
      <span className="icon is-right">
        <i className="fas fa-check" />
      </span>
                                  </div></div>


                      <div className="field">
            <div className="control has-icons-left has-icons-right">
          <input class="input"
                type="password"
         placeholder="Password"
            value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <span className="icon is-left">
       <i class="fas fa-unlock"></i>
      </span>
      <span className="icon is-right">
        <i className="fas fa-check" />
      </span>
              </div></div>

<div class="field is-grouped">
  <p class="control">
  <button class="button is-danger"
            onClick={() => {
              dispatch(addUser({ name, password, email, phone }));
              dispatch(getUsers());
              closeModal();
            }} > Confirm</button>
            </p>
            <span></span>
  <p class="control">
    <button class="button is-danger"
            onClick={closeModal}>
            Cancel</button>
  </p>
</div>
        </form>
      </Modal>
    
        </div>    
      
  );
};

export default AddUser;
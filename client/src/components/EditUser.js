import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editUser, getUsers } from "../redux/actions";
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
Modal.setAppElement("#root");
const EditUser = ({ user }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button class="button is-danger"  onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={(e) => e.preventDefault()}>
<div className="field">
            <div className="control has-icons-left has-icons-right">
          <input  class="input"
                type="text"
                placeholder="First name"
            value={name}
                onChange={(e) => setName(e.target.value.toLocaleUpperCase())} />
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
              dispatch(editUser(user._id, name, password, email, phone));
              dispatch(getUsers());
              closeModal();
            }}
          >Confirm </button>
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

export default EditUser;
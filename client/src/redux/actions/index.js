import axios from "axios";
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "../actionTypes";


export const getUsers = () => (dispatch) => {
  axios
    .get("/users/get")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("get error"));
};


export const addUser = ({ name,password, email, phone }) => (dispatch) => {
  const newUser = {
    name: name,
    password: password,
    email: email,
    phone: phone,
  };
  axios
    .post("/users/add", newUser)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((error) => alert("add errorr"));
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/users/delete/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("delete error"));
};

export const editUser = (id, name, password, email, phone) => (dispatch) => {
  const editedUser = {
    name: name,
    password: password,
    email: email,
    phone: phone,
  };
  axios
    .put(`/users/edit/${id}`, editedUser)
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    })
    .catch((err) => alert("edit error"));
};
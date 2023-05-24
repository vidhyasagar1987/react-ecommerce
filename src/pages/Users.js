import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Input,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  adduser,
  deleteUser,
  updateUser,
  userStatus,
} from "../Slices/UserSlice";
import Layout from "../utils/Layout";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  const defaultState = {
    name: "",
    email: "",
    category: "",
    role: "",
  };
  const [user, setUser] = useState(defaultState);

  const { name, email, category, role } = user;

  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState([]);

  const editHandler = (id) => {
    setEditMode(true);

    setEditUser(users.find((u) => u.id === id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    editMode
      ? setEditUser({ ...editUser, [name]: value })
      : setUser({ ...user, [name]: value });
  };

  const activeHandler = (id) => {
    dispatch(userStatus(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { ...user, id: Math.floor(Math.random() * 100) };

    !editMode ? dispatch(adduser(data)) : dispatch(updateUser(editUser));

    setUser(defaultState);
    setEditMode(false);
  };

  x = 10;
  console.log(x);
  var x;

  function outerFunction() {
    let x = "hi";

    function innerFunction() {
      console.log(x);
    }
    return innerFunction;
  }

  var closure = outerFunction();
  closure();

  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };
  console.log(searchInput);

  let filter = users.filter((val) => {
    if (searchInput === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      val?.email.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return val;
    }
  });
  return (
    <Layout>
      <h3>Users</h3>
      <h4>Search user</h4>
      <input type="text" onChange={searchHandler} value={searchInput} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filter?.length === 0 && searchInput === " "
              ? "No Users Found"
              : filter?.length === 0
              ? " No Match Found"
              : filter && filter.length > 0
              ? filter.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.category}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell>
                      {u.status ? "Active" : "Inactive"}
                      <button
                        onClick={() => {
                          activeHandler(u.id);
                        }}
                      >
                        {u.status ? " Mark as Inactive" : " Mark as Active"}
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          editHandler(u.id);
                        }}
                      >
                        Update
                      </button>{" "}
                      <button
                        onClick={() => {
                          dispatch(deleteUser(u.id));
                        }}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              : "No Users Found"}

            {/* Add more rows here */}
          </TableBody>
        </Table>
      </TableContainer>

      <h4>{editMode ? "Update Users" : "Add Users"}</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={editMode ? editUser.name : name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={editMode ? editUser.email : email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category: </label>
          <select
            name="category"
            value={editMode ? editUser.category : category}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value={"IT"}>IT</option>
            <option value={"Marketing"}>Marketing</option>
          </select>
        </div>
        <div>
          <label>Role: </label>

          <select
            name="role"
            onChange={handleChange}
            value={editMode ? editUser.role : role}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value={"Developer"}>Developer</option>
            <option value={"Manager"}>Manager</option>
            <option value={"Admin"}>Admin</option>
          </select>
        </div>
        <button>{editMode ? "Update User" : "Add User"}</button>
      </form>
      </Layout>
  );
};

export default Users;

import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "vidhya sagar",
        email: "v@gmail.com",
        category: "IT",
        role: "Developer",
        status: true,
      },
      {
        id: 2,
        name: "Harika sagar",
        email: "h@gmail.com",
        category: "Marketing",
        role: "Manager",
        status: true,
      },
    ],
  },
  reducers: {
    adduser: (state, action) => {
      state.users.push({ ...action.payload, status: true });
    },
    updateUser: (state, action) => {
      const { id, name, email, category, role } = action.payload;
      //   const uu = state.users.find((u) => u.id === id);
      //   if (uu) {
      //     uu.name = name;
      //     uu.email = email;
      //     uu.category = category;
      //     uu.role = role;
      //   }
      const updatedUsers = [...state.users];
      let updatedUser = action.payload;
      updatedUsers[state.users.findIndex((u) => u.id === id)] = updatedUser;
      state.users = updatedUsers;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    userStatus: (state, action) => {
      const userId = action.payload;
      state.users = state.users.map((u) => {
        if (u.id === userId) {
          return { ...u, status: !u.status };
        } else return u;
      });
    },
  },
});

export const { adduser, updateUser, deleteUser, userStatus } =
  userslice.actions;

export default userslice.reducer;
